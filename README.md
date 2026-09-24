# Field Atlas

A read-only narrative atlas of scientific fields. It shows how subfields branched from one another, the dated turning points that forced each branch, and the open problems each field still hasn't answered.

Three domains are surveyed: mathematics (the **Geometry Thread**, nine fields from Euclid to algebraic geometry, the **Number Theory Thread**, five fields from Euclid's primes to post-quantum cryptography, the **Analysis Thread**, five fields from Archimedes to Kolmogorov, the **Foundations Thread**, five fields from Aristotle to P versus NP, the **Algebra Thread**, five fields from Babylonian equations to monstrous moonshine, the **Combinatorics Thread**, five fields from Pascal's triangle to Ramsey numbers and optimisation, and the **Dynamics Thread**, five fields from Newton's equations to chaos and the Mandelbrot set), physics (the **Relativity Thread**, five fields from Galileo to cosmology, the **Entropy Thread**, five fields from Carnot's engines to Maxwell's demon, and the **Quantum Thread**, five fields from Planck's quantum to the Higgs boson and quantum computing) and biology (the **Heredity Thread**, five fields from Darwin and Mendel to genomics). The **Crossings** page maps where results in one domain land in another.

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
