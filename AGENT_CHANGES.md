# Agent Changes — Session Log

_(Cleared after session termination on 2026-05-27. All lessons archived to MemPalace.)_

## 2026-06-11 — PDF Catalogs → Flipbook Replacement

- **Problem**: Catalog links downloaded PDFs from `public/catalogs/`. User wanted interactive flipbooks instead, served via iframe to keep the site navigation bar visible.
- **Solution**: 
  - Copied 7 flipbook folders from `Uploads/Catalogs/` → `webapp/public/flipbooks/[id]/`
  - Created new dynamic route `/catalogs/[id]/` with iframe viewer (keeps NarrativeNav + "Back to Catalogs" bar)
  - Updated `catalogsData.ts`: removed PDF fields, added `flipbookId` field, added Prefab Construction catalog, updated Stone Surfaces to use Granite Marble flipbook
  - Updated catalogs listing page: replaced Download icon/PDF link with BookOpen icon linking to viewer
  - Deleted all 11 PDFs from `webapp/public/catalogs/`
  - Cleaned stale `catalog` fields from `siteStructure.ts`
- **Files affected**:
  - `webapp/src/content/catalogsData.ts` — restructured data
  - `webapp/src/content/siteStructure.ts` — removed dead catalog refs
  - `webapp/src/app/catalogs/page.tsx` — linked to flipbook viewer
  - `webapp/src/app/catalogs/[id]/page.tsx` — NEW: flipbook viewer page
  - `webapp/public/catalogs/` — 11 PDFs deleted
  - `webapp/public/flipbooks/` — NEW: 7 flipbook directories
- **Errors encountered**: Turbopack cache corruption on Windows (Jest worker crash) — fixed by deleting `.next/` and restarting.