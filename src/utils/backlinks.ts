import { getCollection } from "astro:content";

export interface Backlink {
  slug: string;
  title: string;
}

// Global cache so we only calculate this once during the build
let backlinkMapCache: Map<string, Backlink[]> | null = null;

export async function getBacklinkMap() {
  if (backlinkMapCache) return backlinkMapCache;

  const map = new Map<string, Backlink[]>();
  const notes = await getCollection("notes");

  // Initialize the map with empty arrays for every post
  for (const post of notes) {
    map.set(post.id, []);
  }

  // Regular expression to match wikilinks: [[target|label]] or [[target]]
  const linkRegex = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;

  for (const note of notes) {
    let match;
    const body = note.body || "";

    while ((match = linkRegex.exec(body)) !== null) {
      const targetPath = match[1];

      // Extract the slug/id from the matched URL path
      // This helper depends on how your URLs are structured.
      // If links are written as /notes/post-name, we clean it up:
      const targetId = targetPath
        .replace(/^\//, "") // remove leading slash
        .replace(/^notes\//, "") // remove folder prefix if present
        .replace(/\/$/, ""); // remove trailing slash

      // Find if the targeted slug actually exists in our collections
      const targetNote = notes.find(
        (n) => n.id === targetId || n.id === `${targetId}.md`,
      );

      if (targetNote && targetNote.id !== note.id) {
        const backlinks = map.get(targetNote.id) || [];
        // Avoid duplicate backlinks from the same file
        if (!backlinks.some((link) => link.slug === note.id)) {
          backlinks.push({
            slug: note.id,
            title: note.data.title || note.id,
          });
          map.set(targetNote.id, backlinks);
        }
      }
    }
  }

  backlinkMapCache = map;
  return map;
}
