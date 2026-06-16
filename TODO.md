# TODO - Projects Section + Branding Redesign

## Step 1: Project data + Bento Grid UI
- [ ] Update `src/components/Projects.tsx`:
  - [ ] Replace placeholder featured/small card layout with a Bento Grid layout.
  - [ ] Featured project: real screenshot, title, problem statement, key features, tech stack, GitHub + Live Demo links.
  - [ ] Secondary projects: real screenshot, title, one-line description, tech stack, GitHub + Demo links.
  - [ ] Implement responsive spanning for desktop/tablet/mobile.

## Step 2: Add screenshots + content fields
- [ ] Extend the internal project model in `Projects.tsx` with:
  - [ ] `screenshotSrc`
  - [ ] `problem`
  - [ ] `keyFeatures`
  - [ ] `liveDemo`

## Step 3: Branding (Navbar logo + favicon)
- [ ] Update `src/components/Navbar.tsx`:
  - [ ] Replace inline “NAVEEN” text logo with a minimal geometric “N” monogram SVG.
- [ ] Update `src/app/layout.tsx`:
  - [ ] Add `metadata.icons` to reference the new logo as favicon.
- [ ] Create `public/logo-n.svg` (and optional additional icon variants if needed).


## Step 4: Verify
- [ ] Run `npm run build`.
- [ ] (Optional) Run `npm run dev` and visually confirm projects + navbar logo on breakpoints.

