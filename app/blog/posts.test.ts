import { describe, expect, it } from "vitest";
import { POSTS } from "./posts";

const VALID_STATUS = ["published", "drafting"];
const VALID_ACCENTS = ["indigo", "accent"];
const VALID_BLOCK_TYPES = ["p", "h2", "ul"];

describe("blog posts data", () => {
  it("has at least one published post", () => {
    expect(POSTS.filter((p) => p.status === "published").length).toBeGreaterThan(0);
  });

  it("has unique slugs", () => {
    const slugs = POSTS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every post has valid fields", () => {
    for (const post of POSTS) {
      expect(post.slug, `slug for ${post.title}`).toMatch(/^[a-z0-9-]+$/);
      expect(post.title.length, `title for ${post.slug}`).toBeGreaterThan(5);
      expect(post.desc.length, `desc for ${post.slug}`).toBeGreaterThan(10);
      expect(post.date, `date for ${post.slug}`).toMatch(/^[A-Z][a-z]{2} \d{4}$/);
      expect(VALID_STATUS, `status for ${post.slug}`).toContain(post.status);
      expect(VALID_ACCENTS, `accent for ${post.slug}`).toContain(post.accent);
    }
  });

  it("every block has valid structure", () => {
    for (const post of POSTS) {
      expect(post.blocks.length, `blocks for ${post.slug}`).toBeGreaterThan(0);
      for (const block of post.blocks) {
        expect(VALID_BLOCK_TYPES, `block type in ${post.slug}`).toContain(block.type);
        if (block.type === "p" || block.type === "h2") {
          expect(typeof block.text, `block text in ${post.slug}`).toBe("string");
          expect(block.text.length, `block text length in ${post.slug}`).toBeGreaterThan(0);
        }
        if (block.type === "ul") {
          expect(block.items.length, `ul items in ${post.slug}`).toBeGreaterThan(0);
          for (const item of block.items) {
            expect(item.length, `item in ${post.slug}`).toBeGreaterThan(0);
          }
        }
      }
    }
  });

  it("no fabricated placeholder metrics remain in published posts", () => {
    const LEAKS = [
      "$0.004",
      "92%",
      "89%",
      "94%",
      "100+ concurrent",
      "~30s",
      "40 resume / JD pairs",
      "88% to 92%",
    ];
    for (const post of POSTS.filter((p) => p.status === "published")) {
      const text = JSON.stringify(post);
      for (const leak of LEAKS) {
        expect(text, `'${leak}' in ${post.slug}`).not.toContain(leak);
      }
    }
  });
});
