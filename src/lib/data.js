// Reads the YAML files in /content. Edit those files, not this one.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { load } from 'js-yaml';

export function data(name) {
  const file = join(process.cwd(), 'content', `${name}.yaml`);
  if (!existsSync(file)) return null;
  return load(readFileSync(file, 'utf8'));
}

// A post is listed when visible is not false. In `npm run dev` hidden posts are shown too, marked as hidden.
export const isListed = (post) => import.meta.env.DEV || post.data.visible !== false;
export const isPublished = (post) => post.data.status === 'published';

export function readingTime(text = '') {
  return Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 220));
}
