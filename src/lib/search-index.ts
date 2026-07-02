import { NAV_LINKS } from "./site";

export type SearchEntry = {
  title: string;
  url: string;
  group: "Sections" | "Compare";
};

function localHref(href: string) {
  if (href.startsWith("#")) return `/${href}`;
  return href;
}

export function buildSearchIndex(): SearchEntry[] {
  return [
    { title: "Home", url: "/", group: "Sections" },
    ...NAV_LINKS.map((link) => ({
      title: link.label,
      url: localHref(link.href),
      group: "Sections" as const,
    })),
    { title: "Screenshots For Ai Agents", url: "/compare/screenshots-for-ai-agents", group: "Compare" as const },
  ];
}
