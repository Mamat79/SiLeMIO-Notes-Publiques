import { readFile, writeFile } from 'node:fs/promises';
import { collectPublicReleaseBodies } from './lib/public-release-ingest.mjs';
import { mergeHistory, renderHistory } from './lib/release-history.mjs';

const names = {
  stageflow: 'StageFlow', stagedesk: 'StageDesk', 'dante-config-editor': 'Dante Config Editor',
  stagemark: 'StageMark', stagemon: 'StageMon', 'larsen-lupin': 'Larsen Lupin',
  'controller-studio': 'Controller Studio', audiowatch: 'AudioWatch',
  'session-audio': 'Session Audio', tlc: 'TLC — Track Latency Compensation',
};
const outputs = [];
// Collect everything before writing. Any HTTP, encoding or validation error
// leaves all committed histories untouched and makes the workflow fail.
for (const [slug, name] of Object.entries(names)) {
  const old = JSON.parse(await readFile(new URL(`./data/${slug}.json`, import.meta.url), 'utf8'));
  const incoming = await collectPublicReleaseBodies(slug, fetch, new Date().toISOString(), process.env.GITHUB_TOKEN ?? '');
  const merged = mergeHistory(old, incoming);
  outputs.push([slug, merged, renderHistory(name, merged)]);
}
for (const [slug, records, text] of outputs) {
  await writeFile(new URL(`./data/${slug}.json`, import.meta.url), JSON.stringify(records, null, 2) + '\n');
  await writeFile(new URL(`./history/${slug}.md`, import.meta.url), text);
  console.log(`${slug}: ${records.length} retained entries`);
}
