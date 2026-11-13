/** Pure, storage-independent merge. The caller must authenticate writes and
 * verify that entries come from the approved repository and release channel. */
export function mergeHistory(existing, incoming) {
  if (!Array.isArray(existing) || !Array.isArray(incoming)) throw new TypeError('history must be an array');
  const keyed = new Map();
  for (const record of [...existing, ...incoming]) {
    validate(record);
    const key = recordKey(record);
    const prior = keyed.get(key);
    if (!prior || record.observedAt < prior.observedAt ||
        (record.observedAt === prior.observedAt && JSON.stringify(record) < JSON.stringify(prior))) keyed.set(key, structuredClone(record));
  }
  return [...keyed.values()].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)
    || b.observedAt.localeCompare(a.observedAt) || recordKey(a).localeCompare(recordKey(b)));
}

function validate(r) {
  if (!r || typeof r !== 'object' || !/^[A-Za-z0-9._-]{1,100}$/.test(r.tag ?? '') ||
      !/^[0-9]{1,20}$/.test(String(r.releaseId ?? '')) ||
      !['fr', 'en', 'original'].includes(r.locale) || !['windows', 'macos', 'all', 'unspecified'].includes(r.platform) ||
      !/^[a-f0-9]{64}$/.test(r.contentSha256 ?? '') || typeof r.text !== 'string' || !r.text.trim() || r.text.length > 200000 ||
      !/^https:\/\/github\.com\/Mamat79\/[A-Za-z0-9._-]+\/releases\/tag\/[A-Za-z0-9._-]+$/.test(r.source ?? '') ||
      !/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?Z$/.test(r.publishedAt ?? '') ||
      !/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?Z$/.test(r.observedAt ?? '')) throw new TypeError('invalid release record');
}
function recordKey(r) { return [r.releaseId, r.locale, r.platform, r.contentSha256].join(':'); }

/** A single downloadable document, newest first. Original-language text is
 * marked explicitly; no translation or platform is inferred here. */
export function renderHistory(name, records) {
  if (typeof name !== 'string' || !name.trim()) throw new TypeError('invalid history');
  const lines = [`# ${name} — Notes de version / Release notes`, ''];
  for (const r of mergeHistory([], records)) {
    lines.push(`## ${r.tag} · ${r.publishedAt.slice(0, 10)} · ${r.platform} · ${r.locale}`, '', r.text.trim(), '', `Source : ${r.source}`, '');
  }
  return lines.join('\n');
}
