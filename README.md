# Field Atlas

A read-only narrative atlas of scientific fields. It shows how subfields branched from one another, the dated turning points that forced each branch, and the open problems each field still hasn't answered.

Three domains are surveyed, 99 fields in 21 threads. Mathematics has nine threads: Geometry, Number Theory, Analysis, Foundations, Algebra, Combinatorics, Dynamics, Statistics and Computation. Physics has six: Relativity, Entropy, Quantum, Stars, Matter and Nuclear. Biology has five: Heredity, Cell, Brain, Ecology and Development. Every field has a closer-look chapter with a worked example. The **Crossings** page maps where results in one domain land in another.

- Product intent: [PRD.md](PRD.md)
- Visual identity: [DESIGN.md](DESIGN.md)
- Build notes and data model: [CLAUDE.md](CLAUDE.md)

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/
```

## Editing content

Each field is one Markdown file in `content/fields/`. YAML frontmatter holds the structured data (parents, turning points, open problems), and `## ` headings split the body into chapters. Figures live in `content/figures.json`. The build validates the whole graph, so a broken reference fails `npm run build` instead of shipping.

Corrections are a pull request that edits one file.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages. In the repository settings, set Pages → Source to **GitHub Actions**.

## Stack

Next.js 14 (static export), Tailwind CSS, d3-shape for the field tree, KaTeX for math. No backend.
