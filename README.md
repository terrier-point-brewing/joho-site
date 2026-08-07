# Joho Brewing Co. — public site

A Next.js (App Router) + TypeScript + Tailwind v4 static site for Joho
Brewing Co. Currently a single coming-soon page; structured to grow into
the full brewery site.

See [`CLAUDE.md`](./CLAUDE.md) for standing rules on brand, styling
tokens, content, and scope before making changes.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

This produces a fully static export in `out/` (`output: "export"` in
`next.config.ts`) — no server, no API routes, no database.
