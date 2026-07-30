# Accomp Repository Instructions

Before changing product-facing copy, information architecture, roadmap content,
or feature presentation, read
[`brand/product-definition.md`](./brand/product-definition.md).

The current product model is locked to one core feature:
**Shared Trip Planning / วางแผนทริปร่วมกัน**.

Its three capabilities are:

1. Plan the trip / วางแผน
2. Prepare the gear / เตรียมอุปกรณ์
3. Offline maps & trip data / แผนที่และข้อมูลออฟไลน์

Do not present gear preparation, offline maps, or offline trip data as separate
top-level product features. They may have dedicated marketing chapters or
roadmap stages only when the copy clearly identifies them as capabilities of
the same shared trip plan.

Home Screen Widgets are planned companion surfaces, not a fourth capability:

- Countdown Companion reuses the trip date and readiness context.
- Gear Checklist reuses the shared gear plan.

Follow the Phase 2.4 plan before changing widget-facing copy or presentation,
and do not claim platform availability or native interaction before validation.
The website now contains a static promotional preview; this does not mean the
native mobile widgets have been implemented.

Keep all public copy in `messages/en.json` and `messages/th.json`, preserve key
parity, and qualify unconfirmed collaboration and offline behavior.

## Daily Work and Prompt Maintenance

The reusable project prompt lives in [`prompt.md`](./prompt.md). Treat it as a
living summary of the latest approved product, design, interaction, content,
quality, and workflow decisions.

When the owner says `เริ่มงาน`:

1. Check whether `http://localhost:3000/` responds.
2. If it does not, run the repository's current development command.
3. Verify the URL before reporting readiness.
4. Keep the server running until the owner asks to stop it.

Before every owner-authorized Commit and Push:

1. Review all changes since the last Commit.
2. Update the matching category in `prompt.md` when the work refines an existing
   topic.
3. Add a new category near the end of `prompt.md` when the work introduces a
   genuinely new topic.
4. Consolidate repeated instructions and retain the latest approved decision.
5. Update the `Maintenance Log`.
6. Include `prompt.md` in the same Commit as the work it documents.
7. Use a concise Commit summary, push the current branch, and report the Commit
   hash and clean/dirty working-tree state.

Never Commit or Push without an explicit owner request.
