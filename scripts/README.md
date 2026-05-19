# Scripts

| Script | Purpose | When it runs |
|---|---|---|
| `validate.ts` | Frontmatter schema, (id, language) uniqueness, category↔directory, slug↔filename, staleness | `pnpm validate` / CI on every PR |
| `lint-content.ts` | Required sections, Quick-answer word cap, banned phrases, competitor mentions, live-fact markers | `pnpm lint` / CI on every PR |
| `export-for-rag.ts` | Produces `kb-index.json` for runtime consumption by Converse Domain | `pnpm export` — manual + CI dry-run |
| `extract-coverage-gaps.ts` | **Design stub.** Mines Converse runtime logs for "couldn't answer" signals → appends to `eval/coverage-gaps.md` | Weekly cron once implemented |

## Adding a new check

When adding a check, decide: error or warning?

- **Error** = blocks merge. Use for: schema violations, id collisions, banned competitor mentions, live commerce facts.
- **Warning** = visible but non-blocking. Use for: staleness, broken `related` references when one side doesn't exist yet, missing source_of_truth on confidence:high.

Then update this README + `package.json` script wiring + CI workflow.
