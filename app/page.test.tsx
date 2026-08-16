import { beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import Page from "./page";
import { ACTIONS } from "@/components/CommandPalette";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

beforeEach(() => {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({ ok: false, json: async () => [] }),
  );
});

describe("home page integrity", () => {
  it("renders without throwing", () => {
    render(<Page />);
  });

  it("has no duplicate element ids", () => {
    render(<Page />);
    const ids = Array.from(document.querySelectorAll("[id]")).map((el) =>
      el.getAttribute("id"),
    );
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every command palette section target exists on the page", () => {
    render(<Page />);
    for (const action of ACTIONS) {
      if (action.kind === "section") {
        expect(
          document.getElementById(action.id),
          `missing section target: #${action.id}`,
        ).not.toBeNull();
      }
    }
  });

  it("has a main landmark", () => {
    render(<Page />);
    expect(document.querySelector("main")).not.toBeNull();
  });

  it("key sections are present", () => {
    render(<Page />);
    for (const id of ["top", "projects", "experience", "skills", "contact"]) {
      expect(document.getElementById(id), `missing #${id}`).not.toBeNull();
    }
  });
});
