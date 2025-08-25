import fs from 'node:fs';
import path from 'node:path';
import { remark } from 'remark';
import html from 'remark-html';

export async function renderMarkdown(fileName: string) {
  const filePath = path.join(process.cwd(), 'content', fileName);
  const source = fs.readFileSync(filePath, 'utf-8');
  const processed = await remark().use(html).process(source);
  return processed.toString();
}
