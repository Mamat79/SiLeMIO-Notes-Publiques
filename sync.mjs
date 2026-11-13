import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { collectPublicReleaseBodies } from './lib/public-release-ingest.mjs';
import { mergeHistory, renderHistory } from './lib/release-history.mjs';
import { pathToFileURL } from 'node:url';

const names = {
  stageflow: 'StageFlow', stagedesk: 'StageDesk', 'dante-config-editor': 'Dante Config Editor',
  stagemark: 'StageMark', stagemon: 'StageMon', 'larsen-lupin': 'Larsen Lupin',
  'controller-studio': 'Controller Studio', audiowatch: 'AudioWatch',
  'session-audio': 'Session Audio', tlc: 'TLC — Track Latency Compensation',
};
export async function synchronize({ root = new URL('./', import.meta.url), products = names, fetchImpl = fetch, now = new Date().toISOString(), token = '' } = {}) {
  const outputs = [];
  // No writes until all sources succeed. A failed workflow never pushes.
  for (const [slug, name] of Object.entries(products)) {
    const old = JSON.parse(await readFile(new URL(`./data/${slug}.json`, root), 'utf8'));
    const incoming = await collectPublicReleaseBodies(slug, fetchImpl, now, token);
    const merged = mergeHistory(old, incoming);
    outputs.push([slug, merged, renderHistory(name, merged)]);
  }
  for (const [slug, records, text] of outputs) {
    await writeFile(new URL(`./data/${slug}.json`, root), JSON.stringify(records, null, 2) + '\n');
    await writeFile(new URL(`./history/${slug}.md`, root), text);
    console.log(`${slug}: ${records.length} retained entries`);
  }
  await mkdir(new URL('./status/', root), { recursive: true });
  // One factual daily checkpoint, never one commit per polling run.
  await writeFile(new URL('./status/last-success.json', root), JSON.stringify({ checkedOnUTC: now.slice(0, 10) }, null, 2) + '\n');
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await synchronize({ token: process.env.GITHUB_TOKEN ?? '' });
