const repositories = Object.freeze({
  stageflow: 'StageFlow', stagedesk: 'StageDesk', 'dante-config-editor': 'Dante-Config-Editor',
  stagemark: 'StageMark', stagemon: 'StageMon', 'larsen-lupin': 'SiLeMIO-Larsen',
  'controller-studio': 'Controller-Studio-for-LiveProfessor', audiowatch: 'AudioWatch',
  'session-audio': 'Session-Audio', tlc: 'TLC-Track-Latency-Compensation',
});

/** Collection is read-only. A failing or incomplete response throws, so a
 * caller must preserve its last committed history rather than replace it. */
export async function collectPublicReleaseBodies(slug, fetchImpl = fetch, observedAt = new Date().toISOString(), apiToken = '') {
  const repo = repositories[slug];
  if (!repo) throw new TypeError('unknown software');
  const response = await fetchImpl(`https://api.github.com/repos/Mamat79/${repo}/releases?per_page=100`, {
    headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'SiLeMIO-release-history', ...(apiToken ? { Authorization: `Bearer ${apiToken}` } : {}) },
  });
  if (!response.ok) throw new Error(`release source HTTP ${response.status}`);
  const data = await response.json();
  if (!Array.isArray(data) || data.length >= 100) throw new Error('release listing invalid or requires pagination');
  const result = [];
  for (const release of data) {
    const tag = release?.tag_name;
    if (release?.draft !== false || typeof release?.prerelease !== 'boolean') continue;
    if (release.prerelease && !((slug === 'audiowatch' && /^v\d+(?:\.\d+){1,3}(?:-(?:windows|macos))?$/i.test(tag ?? '')) || (slug === 'session-audio' && /^v\d+(?:\.\d+){1,3}-macos$/i.test(tag ?? '')))) continue;
    if (!/^[A-Za-z0-9._-]{1,100}$/.test(tag ?? '') || !Number.isSafeInteger(release.id) || release.id <= 0 ||
        release.html_url !== `https://github.com/Mamat79/${repo}/releases/tag/${tag}` ||
        !/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\dZ$/.test(release.published_at ?? '') ||
        (release.body != null && (typeof release.body !== 'string' || release.body.length > 200000))) continue;
    const platform = /-windows$/i.test(tag) ? 'windows' : /-macos$/i.test(tag) ? 'macos' : 'unspecified';
    const add = async (text, locale, targetPlatform) => {
      text = text.replace(/\r\n/g, '\n').trim();
      const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
      const contentSha256 = [...new Uint8Array(digest)].map(x => x.toString(16).padStart(2, '0')).join('');
      result.push({ releaseId: String(release.id), tag, source: release.html_url, publishedAt: release.published_at,
        observedAt, locale, platform: targetPlatform, text, contentSha256 });
    };
    if (typeof release.body === 'string' && release.body.trim()) await add(release.body, 'original', platform);
    const assets = Array.isArray(release.assets) ? release.assets : [];
    const hasEnglish = assets.some(a => /^RELEASE[-_]NOTES.*[-_]EN\.md$/i.test(a?.name ?? ''));
    for (const asset of assets) {
      const name = asset?.name;
      if (!/^RELEASE[-_]NOTES[A-Za-z0-9._-]*\.md$/i.test(name ?? '') || !Number.isSafeInteger(asset.size) || asset.size <= 0 || asset.size > 200000) continue;
      let locale = /[-_]EN\.md$/i.test(name) ? 'en' : /[-_]FR\.md$/i.test(name) ? 'fr' : null;
      if (!locale && slug === 'dante-config-editor' && hasEnglish) locale = 'fr';
      if (!locale) continue;
      const expected = `https://github.com/Mamat79/${repo}/releases/download/${tag}/${name}`;
      if (asset.browser_download_url !== expected) throw new Error('unexpected public notes asset');
      const assetResponse = await fetchImpl(expected, { headers: { 'User-Agent': 'SiLeMIO-release-history' } });
      if (!assetResponse.ok) throw new Error(`notes asset HTTP ${assetResponse.status}`);
      const bytes = await assetResponse.arrayBuffer();
      if (bytes.byteLength !== asset.size) throw new Error('incomplete notes asset');
      const text = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
      if (!text.trim()) throw new Error('empty notes asset');
      await add(text, locale, /[-_]MAC(?:OS)?[-_]/i.test(name) ? 'macos' : platform);
    }
  }
  return result;
}
