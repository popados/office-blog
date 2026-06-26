/**
 * Parses YAML-style frontmatter from a markdown string.
 * Supports flat key: value pairs and quoted values.
 * Returns { data, content } where content is the body after the closing ---.
 */
export function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw.trim() };

  const data = {};
  match[1].split('\n').forEach(line => {
    const colon = line.indexOf(': ');
    if (colon === -1) return;
    const key = line.slice(0, colon).trim();
    let val = line.slice(colon + 2).trim();
    if (/^["']/.test(val) && val.endsWith(val[0])) val = val.slice(1, -1);
    data[key] = val;
  });

  return { data, content: match[2].trim() };
}
