<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
# AGENTS.md

## Project Identity

This project is the official digital platform for **AmanaFlow**.

AmanaFlow is being built as a premium, scalable, high-trust digital infrastructure and services brand. The system includes:

- Public marketing website
- Hosting/service presentation pages
- Blog/content/SEO growth system
- WHMCS-powered client and billing system
- Future-ready API/backend expansion path
- AI-assisted workflow and content production

This is not a toy project.  
All agents must treat this as a **production-grade, long-term business platform**.

---

## Core Mission

Build and maintain a clean, scalable, SEO-friendly, premium-quality website and content system that:

1. Presents services professionally
2. Converts visitors into leads/customers
3. Supports future hosting/cloud/service expansion
4. Keeps frontend and WHMCS responsibilities clearly separated
5. Enables a high-quality blog and knowledge hub
6. Maintains performance, clarity, and trust

---

## Non-Negotiable Rules

1. Do not make random structural changes.
2. Do not rewrite major sections without strong reason.
3. Do not break visual consistency.
4. Do not mix blog/content responsibilities into WHMCS.
5. Do not use WHMCS as the blog CMS.
6. Do not touch the Hero section unless explicitly instructed.
7. Do not introduce bloated UI, unnecessary animations, or clutter.
8. Do not add heavy assets without optimization.
9. Do not change routes, slugs, or content architecture casually.
10. Do not destroy existing work to replace it with generic output.
11. Do not use placeholder text in final output unless clearly marked.
12. Do not make the site look like a generic template demo.
13. Do not prioritize flashy design over speed, trust, and clarity.
14. Do not create unnecessary categories, tags, or taxonomy chaos.
15. Do not produce thin SEO content.

---

## Project Architecture

### Frontend
The public website is the main presentation layer.

Responsibilities:
- Homepage
- Service pages
- Landing pages
- Pricing presentation UI
- Blog homepage
- Blog posts
- Category pages
- SEO content
- Conversion-focused layouts
- Brand presentation
- CTA systems

### WHMCS
WHMCS is used as the operational backend/client platform.

Responsibilities:
- Client area
- Billing
- Invoices
- Orders
- Cart
- Domain management
- Support tickets
- Automation
- Service/client management

### Future API
A future API layer may be added later for custom backend functionality, but that is not the current primary implementation focus unless explicitly requested.

---

## Domain/Subdomain Structure

Expected structure:

- `amanaflow.cloud` → public frontend
- `clients.amanaflow.cloud` → WHMCS
- `staging.amanaflow.cloud` → testing/staging
- `api.amanaflow.cloud` → future backend/API (optional/future)

Agents must keep this separation in mind when planning pages, routes, logic, integrations, and content ownership.

---

## Design Philosophy

The site must feel:

- Premium
- Trustworthy
- Fast
- Modern
- Clean
- Structured
- Serious
- Scalable

Design characteristics:
- Strong typography hierarchy
- Clean spacing
- Limited, purposeful color use
- Soft shadows only when necessary
- High readability
- Clear CTA placement
- Consistent card systems
- Responsive layouts
- Professional SaaS-style visual rhythm

Avoid:
- Over-decoration
- Visual noise
- Giant icons everywhere
- Overlapping sections
- Cheap-looking gradients
- Random animations
- Busy backgrounds
- Inconsistent section spacing

---

## Performance Philosophy

Every decision must consider speed and maintainability.

Agents must prefer:
- Lightweight components
- Static or cache-friendly rendering where possible
- Optimized images
- Avoiding large JS bundles
- Controlled client-side interactivity
- Minimal unnecessary re-renders
- Efficient layout patterns
- Reusable UI structures

Avoid:
- Heavy sliders
- Unnecessary carousels
- Unoptimized media
- Oversized hero videos unless explicitly requested
- Large image payloads
- Needless third-party bloat

---

## Blog System Rules

### Important
The blog belongs to the **frontend/content layer**, not to WHMCS.

### Blog goals
- SEO growth
- Authority building
- Education
- Conversion support
- Internal linking
- Long-term traffic engine

### Blog homepage responsibilities
Agents may improve:
- Category navigation
- Featured posts layout
- Latest posts layout
- Search/filter UX
- Category blocks
- CTA blocks
- Card systems
- Taxonomy display

### Protected rule
**Do not touch the Hero section unless explicitly instructed.**

### Blog detail pages
Must support:
- Clean reading experience
- TOC where useful
- Internal links
- Category clarity
- Relevant CTA
- Related posts
- SEO metadata

---

## Blog Category Architecture

The default main categories are:

1. Web Hosting
2. VPS & Cloud
3. Domain & DNS
4. WHMCS
5. WordPress
6. SEO & Marketing
7. Online Business
8. Security
9. AI & Automation
10. Tutorials

Agents must not create taxonomy chaos.

If proposing subcategories:
- keep them minimal
- ensure they are justified
- avoid duplicates
- avoid overlapping semantics

---

## Content Quality Rules

All content must be:

- Clear
- Structured
- Useful
- Search-intent aligned
- Non-generic
- Non-fluffy
- Trust-building
- Readable for beginners while still professional

Every article should ideally include:
- Clear title
- Search intent alignment
- Strong introduction
- Logical headings
- Useful examples
- Actionable advice
- Internal linking
- CTA
- FAQ if relevant
- Solid conclusion

Avoid:
- keyword stuffing
- vague filler
- robotic repetition
- fake expertise tone
- low-information writing

---

## SEO Rules

Agents must support SEO in all content and blog system work.

### URL/Slug rules
- Keep slugs short, clean, descriptive
- Use hyphen-separated words
- Avoid meaningless filler words
- Avoid inconsistent slug naming

### On-page rules
- One clear H1
- Logical H2/H3 structure
- Strong title/meta description
- Good intro summary
- Internal linking
- Relevant image alt text
- Category alignment
- No orphan pages
- No duplicate category/tag confusion

### Category pages
Category pages should act as useful archive/landing pages, not empty shells.

### Internal linking
Agents must build topic clusters and recommend related links.

---

## Image Generation Rules

When generating blog or page images:

1. Keep images clean and topic-relevant.
2. Prefer modern professional visual style.
3. Avoid clutter.
4. Avoid too much text inside images.
5. Avoid childish visuals.
6. Keep style consistency across blog covers.
7. Support the article topic clearly.
8. Optimize all output for web usage.

### Preferred image styles
- modern SaaS illustration
- clean tech composition
- cloud/server visual metaphor
- dashboard-inspired graphic
- minimal brand-supportive abstract visuals
- WordPress/SEO/security conceptual visuals

### File optimization rules
- Prefer modern formats such as WebP where possible
- Avoid huge file sizes
- Resize before upload
- Maintain consistent aspect ratio
- Use SEO-friendly file names
- Always provide meaningful alt text

---

## Homepage and Section Editing Rules

Agents may improve:
- structure
- spacing
- card layout
- responsiveness
- visual clarity
- CTA placement
- hierarchy
- section grouping

Agents must not:
- break the existing brand direction
- arbitrarily redesign unrelated sections
- replace carefully planned sections with generic patterns
- introduce unnecessary complexity

---

## Service Page Rules

Service pages must:
- explain clearly
- communicate trust
- show benefits
- support comparisons
- guide users toward action
- remain visually clean
- include conversion pathways to WHMCS/client/order flow where needed

Where suitable, service pages may include:
- feature grids
- pricing comparison UI
- FAQ
- technical highlights
- CTA blocks
- trust signals

---

## WHMCS Integration Rules

WHMCS is not the blog system.

Use WHMCS for:
- order flow
- cart links
- client area
- service/billing workflows

Frontend may link into WHMCS using:
- buy now buttons
- client area access points
- order CTAs
- pricing action buttons

Agents must keep frontend presentation and WHMCS operations separated cleanly.

---

## Working Method for Agents

Before making changes, every agent must:

1. Understand the page or component purpose
2. Check whether it belongs to frontend or WHMCS responsibility
3. Preserve architecture boundaries
4. Review existing layout and styles
5. Avoid unnecessary changes
6. Explain reasoning for major structural edits
7. Prefer iterative improvement over destructive replacement

---

## Required Output Style

When performing tasks, agents should provide structured output in this order where relevant:

1. Goal
2. Current state
3. Issues identified
4. Recommended solution
5. Implementation plan
6. Risks/notes
7. Final status

For larger work, agents should use:
- Done
- Pending
- Blocked

For priorities, use:
- Critical
- High
- Medium
- Low

---

## Content Planning Rules

When asked to plan blog posts:

- Think in clusters, not random isolated titles
- Start with pillar topics
- Then create supporting cluster posts
- Map category + keyword + intent + CTA
- Recommend internal links
- Suggest image concepts
- Consider beginner and advanced audiences
- Keep the roadmap scalable to 100+ posts

---

## Frontend Coding Rules

Agents working on frontend should:

- preserve reusable component architecture
- avoid duplicating UI patterns
- maintain naming consistency
- keep components readable
- prefer maintainable structure
- support responsive design
- avoid unnecessary complexity
- keep future expansion in mind

Prefer:
- composable sections
- reusable cards
- reusable filters
- modular category blocks
- scalable content structures

---

## UX Rules

Always optimize for:
- clarity
- scannability
- readability
- hierarchy
- mobile usability
- CTA discoverability
- reduced cognitive load

Avoid:
- too many simultaneous focal points
- crowded cards
- confusing dropdowns
- weak contrast
- hidden important actions
- disorganized spacing

---

## Editing Boundaries

Agents must ask internally before changing anything:

- Is this section explicitly in scope?
- Does this change improve clarity, UX, SEO, or conversion?
- Will this break existing work?
- Is this touching protected structure such as Hero?
- Does this belong in frontend or WHMCS?
- Is this introducing unnecessary design noise?

If the answer is uncertain, prefer conservative improvement.

---

## Quality Assurance Checklist

Before finalizing any major task, agents must verify:

- Design consistency preserved
- Hero not changed unless requested
- Mobile layout still good
- Performance not worsened
- Content structure improved
- SEO logic sound
- Categories clean
- Images optimized
- CTA placement sensible
- Internal linking opportunities considered
- No random breakage introduced

---

## Content Production Workflow

For content work, follow this pipeline:

1. Topic selection
2. Search intent definition
3. Outline creation
4. Category assignment
5. SEO metadata planning
6. Draft content
7. Internal link planning
8. CTA placement
9. Image prompt generation
10. Image optimization
11. QA review
12. Publish-ready output

---

## Protected Priorities

Top priorities for this project:

1. Clean architecture
2. High trust presentation
3. SEO-friendly structure
4. Scalable blog system
5. Strong frontend/WHMCS separation
6. Performance
7. Conversion-ready layout
8. Professional consistency

---

## Anti-Patterns to Avoid

Do not:
- turn the blog homepage into a chaotic magazine layout
- create 30 unnecessary categories
- dump heavy images without optimization
- over-style cards
- add random widgets just because they look “feature-rich”
- mix operational backend logic into content pages
- turn every section into a giant visual block
- make the UI look like a cheap demo template
- write filler-heavy SEO posts
- make broad destructive edits without cause

---

## When Working on Blog Homepage

Remember:

- Hero stays untouched
- Improve everything below it
- Build a professional category-driven content experience
- Make content discovery easy
- Keep it elegant, not noisy
- Prioritize usability and structure over gimmicks

---

## When Working on 100+ Blog Planning

Agents must include:
- title
- category
- keyword angle
- search intent
- funnel stage
- suggested CTA
- image concept
- cluster relationship

They should also identify:
- first 20 priority posts
- pillar posts
- tutorial posts
- conversion-supporting posts

---

## Final Instruction

This project is long-term and strategic.

Agents must behave like:
- careful architects
- disciplined product designers
- serious frontend engineers
- thoughtful SEO planners
- structured content strategists

They must not behave like:
- random template generators
- flashy demo builders
- careless bulk content machines
- destructive refactoring bots

Always prefer:
**clarity, structure, performance, trust, and scalability**.
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
