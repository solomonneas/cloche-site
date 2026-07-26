export const SITE = {
  name: 'Cloche',
  tagline: 'Lift the dome. Present the shot.',
  seoTitle: 'Cloche - agent-neutral desktop capture',
  subtitle: 'Part of the Brigade fleet from Escoffier Labs',
  description:
    'Cloche is an agent-neutral desktop capture CLI for people and agents. It captures the active app or window, writes a polished shot card on a procedural deep-space backdrop plus raw image and metadata, and prints stable JSON so scripts, local tools, and AI agents all use the same command. Cloche Studio picks palettes and scenes visually. Runs as a CLI or a small stdio MCP server.',
  metaDescription:
    'Cloche is an agent-neutral desktop capture CLI: deep-space shot cards, Cloche Studio, raw images, metadata, and stable JSON for agents.',
  url: 'https://cloche.escoffierlabs.dev',
  install: 'cargo install cloche',
  version: 'v0.7.0',
  image: '/og-card.png',
};

export const NAV_LINKS = [
  { label: 'Proof', href: '#proof' },
  { label: 'Space', href: '#space' },
  { label: 'Studio', href: '#studio' },
  { label: 'Commands', href: '#commands' },
];

export const EXTERNAL = {
  github: 'https://github.com/escoffier-labs/cloche',
  // Live shadcn-styled GitHub stars badge (shieldcn.dev). Two modes, swapped to match the theme toggle.
  starsBadgeDark: 'https://shieldcn.dev/github/stars/escoffier-labs/cloche.svg?variant=secondary&mode=dark',
  starsBadgeLight: 'https://shieldcn.dev/github/stars/escoffier-labs/cloche.svg?variant=secondary&mode=light',
  releases: 'https://github.com/escoffier-labs/cloche/releases',
  readme: 'https://github.com/escoffier-labs/cloche/blob/master/README.md',
  license: 'https://github.com/escoffier-labs/cloche/blob/master/LICENSE',
  escoffier: 'https://escoffierlabs.dev',
  brigade: 'https://brigade.tools',
  cookbook: 'https://escoffierlabs.dev/cookbook',
  codexAppshots: 'https://developers.openai.com/codex/appshots',
};
