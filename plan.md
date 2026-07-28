# Accomp Marketing Website — Project Plan

> สถานะ: **Phase 2.4 implementation complete — รอ owner visual review และ final mascot**
> สร้างเมื่อ: 2026-07-26  
> Project path: `/Users/peeraponchanthacham/Documents/GitHub/Accomp`  
> Reference: [Phantom](https://phantom.com/?utm_source=loftlyy&utm_medium=referral&utm_campaign=phantom)

## กติกาการทำงาน

1. เอกสารนี้ต้องได้รับการตรวจและอนุมัติก่อนเริ่มพัฒนา
2. ทำงานทีละ Phase เท่านั้น
3. ก่อนเริ่ม Phase ถัดไป ต้องสรุปผล ตรวจ acceptance criteria และรอคำอนุมัติ
4. ห้ามนำงานจาก Phase ถัดไปมาทำล่วงหน้าโดยไม่ได้รับอนุญาต
5. Git repository, initial commit และ remote ถูกสร้างแล้วตามคำสั่งก่อนหน้า งาน Phase ใหม่จะไม่ commit, push หรือ deploy จนกว่าจะได้รับคำสั่ง
6. สโคปของโปรเจกต์คือ **เว็บไซต์สำหรับโปรโมตแอปมือถือ Accomp เท่านั้น** ไม่รวมการสร้าง iOS app, Android app, backend ของแอป หรือ dashboard ภายใน

### Phase naming from this point forward

- งานเดิม Phase 1–10 ให้นับเป็น Accomp Website Phase 1.1–1.10
- งานรอบถัดไปเริ่มที่ **Phase 2.1**
- ชื่อโฟลเดอร์และเอกสารเดิมยังคงไว้เพื่อรักษา Git history และลิงก์อ้างอิง

## 0. Phase Execution Status

ผู้ใช้สั่งเริ่ม Phase 1 โดยตรงเมื่อ 2026-07-26 แม้ Phase 0 ยังไม่ได้ปิด decision อย่างเป็นทางการ จึงดำเนินงาน Phase 1 ด้วยสมมติฐานที่ย้อนกลับได้:

- English-first
- Primary CTA: `Join the waitlist`
- ยังไม่สมมติว่าแอปเปิดตัวแล้ว
- ใช้ pine symbol exploration v1 ร่วมกับ text wordmark placeholder จนกว่าจะได้รับ approval
- Product claims ทั้งหมดยังต้อง validate
- ไม่มี social proof, store badge หรือ app screenshot ที่สร้างขึ้นเอง

### Phase 1 deliverables

- [Phase 1 index and approval status](./docs/phase-1/README.md)
- [Content strategy and copy deck](./docs/phase-1/content-strategy-and-copy.md)
- [Visual direction](./docs/phase-1/visual-direction.md)
- [Visual direction board preview](./docs/phase-1/visual-direction-board.png)
- [Visual direction board source](./docs/phase-1/visual-direction-board.svg)
- [Design token proposal](./docs/phase-1/design-tokens.md)
- [Asset brief](./docs/phase-1/asset-brief.md)
- [Motion concept](./docs/phase-1/motion-concept.md)
- [Pine symbol exploration v1](./brand/accomp-pine-icon.svg)
- [Current product definition](./brand/product-definition.md)

### Phase 2 deliverables

- [Phase 2 index and approval status](./docs/phase-2/README.md)
- [Information architecture](./docs/phase-2/information-architecture.md)
- [Revised copy hierarchy](./docs/phase-2/copy-hierarchy.md)
- [Interaction notes](./docs/phase-2/interaction-notes.md)
- [Responsive behavior matrix](./docs/phase-2/responsive-behavior-matrix.md)
- [Desktop wireframe](./docs/phase-2/desktop-wireframe.png)
- [Mobile wireframe](./docs/phase-2/mobile-wireframe.png)
- [Low-fidelity interaction prototype](./docs/phase-2/interaction-prototype.html)

### Phase 3 deliverables

- [Phase 3 index and approval status](./docs/phase-3/README.md)
- [High-fidelity design specification](./docs/phase-3/design-specification.md)
- [High-fidelity responsive prototype](./docs/phase-3/high-fidelity-prototype.html)
- [Desktop key screen](./docs/phase-3/desktop-key-screen.png)
- [Tablet key screen](./docs/phase-3/tablet-key-screen.png)
- [Mobile key screen](./docs/phase-3/mobile-key-screen.png)
- [Component state sheet](./docs/phase-3/component-state-sheet.png)
- [Asset export list](./docs/phase-3/asset-export-list.md)
- [Motion specification](./docs/phase-3/motion-specification.md)

### Phase 4 deliverables

- [Phase 4 index and approval status](./docs/phase-4/README.md)
- [Technical decisions](./docs/phase-4/technical-decisions.md)
- [Component contracts](./docs/phase-4/component-contracts.md)
- [Runnable foundation preview](./app/page.tsx)
- [Design token layer](./app/globals.css)
- [Core component exports](./components/index.ts)
- [Project conventions](./README.md)

### Phase 5 deliverables

- [Phase 5 index and approval status](./docs/phase-5/README.md)
- [Content model](./docs/phase-5/content-model.md)
- [Interaction and accessibility notes](./docs/phase-5/interaction-and-accessibility.md)
- [Core marketing page](./components/marketing/MarketingPage.tsx)
- [Typed marketing content](./content/site-content.ts)
- [Marketing component styles](./components/marketing/marketing-page.module.css)
- [Marketing source tests](./tests/marketing-content.test.mjs)

### Phase 6 deliverables

- [Phase 6 index and approval status](./docs/phase-6/README.md)
- [Interaction QA notes](./docs/phase-6/interaction-qa.md)
- [Progressive motion controller](./components/marketing/MotionController.tsx)
- [Motion source tests](./tests/motion.test.mjs)

### Phase 7 deliverables

- [Phase 7 index and approval status](./docs/phase-7/README.md)
- [Search, social, analytics and legal decisions](./docs/phase-7/search-social-and-legal.md)
- [Performance report](./docs/phase-7/performance-report.md)
- [Request-aware metadata](./app/layout.tsx)
- [Social preview](./public/og.png)
- [Sitemap](./app/sitemap.xml/route.ts)
- [Robots rules](./app/robots.txt/route.ts)
- [Privacy status](./app/privacy/page.tsx)
- [Terms status](./app/terms/page.tsx)

มี search/social-ready marketing page, legal status routes และ performance
baseline แล้ว แต่ยังไม่มี live waitlist, analytics, backend, final legal
agreements, confirmed production domain หรือ deployment

## 1. Project Intent

สร้าง marketing website สำหรับ Accomp ที่:

- อธิบายคุณค่าของแอปได้ภายในไม่กี่วินาที
- ทำให้ผู้ชมรู้สึกว่า Accomp เป็นเพื่อนร่วมทริปที่ไว้ใจได้
- เปลี่ยนผู้ชมให้กด Download, Join waitlist หรือ Get notified
- แสดงภาพการใช้งานแอปอย่างเข้าใจง่ายโดยไม่สร้าง mobile app จริง
- มีคุณภาพด้าน visual storytelling, spacing, motion และ responsive behavior ใกล้เคียงกับเว็บไซต์ Phantom
- มี visual identity ที่เป็นของ Accomp เองและไม่ทำให้สับสนกับ Phantom

## 2. Approved Scope

### In scope

- Responsive marketing website
- Homepage แบบ long-form storytelling
- Navigation และ mobile menu
- Original Accomp visual system
- Static app UI mockups หรือ screenshots ที่ได้รับอนุมัติ
- Feature storytelling
- Download/waitlist CTA
- FAQ
- Footer และ legal links
- SEO, social metadata และ structured data ที่เหมาะสม
- Accessibility, motion preferences, performance และ browser QA
- Analytics เฉพาะเมื่อผู้ใช้อนุมัติ provider และ consent approach

### Out of scope

- การพัฒนา iOS หรือ Android app
- Authentication
- User dashboard
- Trip creation ที่ใช้งานจริงบนเว็บ
- Offline maps ที่ใช้งานจริงบนเว็บ
- Backend, database หรือ account system
- CMS เว้นแต่มีเหตุผลและได้รับอนุมัติ
- Blog, careers, support center หรือหลายหน้าขนาดใหญ่ในรุ่นแรก
- การสร้าง repository, commit, push หรือ deployment ในขั้น planning

## 3. Reference Audit: What to Learn from Phantom

ตรวจ reference ทั้ง desktop และ mobile เมื่อ 2026-07-26 พบโครงสร้างสำคัญดังนี้:

### Structure

1. Sticky header ที่มี logo, navigation และ CTA ชัดเจน
2. Hero ขนาดใหญ่ในกรอบ rounded พร้อม visual ที่เด่น
3. Eyebrow, headline และ CTA ซ้อนอยู่บน visual
4. Feature chapters ที่ใช้ headline ใหญ่และพื้นที่ว่างมาก
5. Horizontal card carousel สำหรับเล่าความสามารถหลายข้อ
6. Light/dark section transitions เพื่อแบ่งจังหวะของเรื่อง
7. Social proof ก่อน final CTA
8. Download CTA ซ้ำในจุดสำคัญ
9. Footer ขนาดใหญ่ที่รวม newsletter, navigation, status และ legal
10. Mobile navigation ย่อเหลือ logo, CTA และ hamburger

### Interaction patterns

- Sticky navigation เปลี่ยนคอนทราสต์ตามพื้นหลัง
- Card groups ใช้การเลื่อนแนวนอนและปุ่มก่อนหน้า/ถัดไป
- Visual และข้อความ reveal ตาม scroll
- Section มีระยะหายใจมากเพื่อสร้าง focus
- Motion ช่วยเล่าเรื่อง ไม่ใช่เพียงตกแต่ง
- CTA มีรูปทรง pill และขนาดสัมผัสเหมาะกับมือถือ

### Accomp adaptation

| Reference pattern | Accomp expression |
|---|---|
| Cinematic product hero | กลุ่มเพื่อน + เส้นทาง + phone mockup + topographic motion |
| Large product statement | “Adventure Together.” และ value proposition ที่เน้น planning |
| Feature capability chapters | Plan / Prepare Gear / Ready Offline ภายใน shared trip plan เดียว |
| Brand mascot inserted in copy | Original path/companion symbol หลังมีโลโก้ที่อนุมัติ |
| Light/dark chapters | Surface light สำหรับ planning และ Brand Dark สำหรับ offline reliability |
| Repeated download CTA | App Store / Google Play หรือ waitlist ตามสถานะจริง |
| Community proof | ใช้เฉพาะตัวเลข รีวิว หรือ partner ที่ตรวจสอบได้ |

### Non-copy rule

เป้าหมายคือความใกล้เคียงด้าน **คุณภาพ จังหวะ และ interaction model** ไม่ใช่การคัดลอกแบบ pixel-for-pixel ห้ามใช้ข้อความ asset โลโก้ illustration video source code หรือ visual signature ของ Phantom

## 4. Brand and Product Sources of Truth

Brand identity ถูกเก็บไว้ที่:

`brand/brand-identity.md`

นิยามผลิตภัณฑ์ล่าสุดถูกเก็บไว้ที่:

`brand/product-definition.md`

Product definition กำหนดว่า Accomp มีฟีเจอร์หลักเดียวคือ `Shared Trip
Planning / วางแผนทริปร่วมกัน` พร้อมสามความสามารถ: วางแผน เตรียมอุปกรณ์
และพร้อมใช้งานออฟไลน์ เอกสารนี้มีลำดับความสำคัญเหนือ feature hierarchy
ใน Phase artifacts เก่า

เอกสารนั้นครอบคลุม:

- Brand essence, values และ audience
- Voice and tone
- Color tokens
- Typography
- Logo direction
- Photography, illustration และ iconography
- Motion principles
- Website expression
- Brand guardrails

ถ้ามีการแก้ brand identity ต้องอัปเดตเอกสารนั้นก่อน แล้วจึงสะท้อนการเปลี่ยนแปลงเข้าสู่ design และ code

## 5. Recommended Story Architecture

ลำดับด้านล่างเริ่มจาก proposed information architecture ใน Phase 0 และได้รับ
การปรับตาม product definition ล่าสุด บท Plan, Gear และ Offline เป็นบทเล่าเรื่อง
ของสามความสามารถภายใต้ฟีเจอร์หลักเดียว ไม่ใช่ top-level feature แยก:

### 5.1 Header

- Accomp logo/wordmark
- Product dropdown: Features และ How it works
- Roadmap direct link
- Support direct link
- Primary CTA
- Mobile hamburger menu

### 5.2 Hero — Adventure Together

หน้าที่:

- บอกว่า Accomp คืออะไร
- บอกประโยชน์หลัก
- แสดง app experience
- ส่งผู้ใช้ไปยัง CTA

แนวทาง provisional:

- Eyebrow: `Your companion for every adventure`
- H1: `Adventure Together.`
- Supporting copy: อธิบายการวางแผนทริป ชวนเพื่อน แบ่งอุปกรณ์ และใช้งานแบบออฟไลน์
- CTA: `Download Accomp` หรือ `Join the waitlist`
- Visual: phone mockup + shared route + companions/path motif

### 5.3 Trust Strip

- Store badges, platform availability หรือ launch status
- Verified rating/review/press/usage proof เท่านั้น
- ถ้ายังไม่มี proof ให้ใช้ข้อความ product promise แทน ห้ามสร้างตัวเลขขึ้นเอง

### 5.4 Capability Chapter 1 — Plan

- Create a trip
- Invite friends
- Build a shared itinerary
- Feature cards 3–4 ใบ

### 5.5 Capability Chapter 2 — Prepare Gear

- Shared gear checklist
- Assign responsibility
- See what is packed and what is missing
- ใช้ layered checklist cards และ calm micro-interactions

### 5.6 Capability Chapter 3 — Ready Offline

- Store essential trip information
- Offline maps
- Reliability without signal
- เปลี่ยนเป็น dark section เพื่อเน้นความมั่นใจและการใช้งานในพื้นที่ห่างไกล

### 5.7 How It Works

สามขั้นตอน:

1. Create a trip
2. Invite your crew
3. Plan, pack and explore together

### 5.8 Community or Real Trip Story

- ภาพเพื่อนจริงในธรรมชาติ
- Testimonial ที่ได้รับอนุญาต
- ถ้ายังไม่มี testimonial ให้ใช้ editorial brand statement โดยไม่ปลอมเป็นคำพูดลูกค้า

### 5.9 FAQ

คำถามตัวอย่าง:

- What is Accomp?
- Is Accomp available on iOS and Android?
- Can I use maps without an internet connection?
- Can friends edit the same trip?
- Is Accomp free?
- When will Accomp launch?

คำตอบต้องรอ product truth จากเจ้าของโปรเจกต์

### 5.10 Final CTA

- Headline ที่สรุปการเดินทางร่วมกัน
- Store badges หรือ waitlist CTA
- QR code เฉพาะเมื่อมี destination URL จริง

### 5.11 Footer

- Logo and short brand statement
- Product links
- Company/contact links
- Social links
- Privacy and terms
- Copyright
- Newsletter เฉพาะเมื่อมีระบบและ consent ที่พร้อมใช้งาน

## 6. Visual Direction

### Overall feeling

Friendly, calm, spacious, modern, reliable and outdoor-first.

### Core design language

- Warm off-white/light surface สลับกับ Brand Dark
- Trail Sage ใช้เป็น focus color บน Warm Cream canvas
- Extra-large Geist headlines
- Generous vertical rhythm
- Rounded content frames
- Soft shadows และ minimal borders
- Real photography ผสมกับ original geometric/map visuals
- Static phone mockups ที่สื่อ app behavior โดยไม่ทำ mobile app จริง

### Original Accomp motifs

- Abstract shared paths
- Topographic contours
- Route progress
- Two points moving together
- Stacked trip cards
- Shared checklist
- Offline map tiles

### Motion direction

- Scroll reveal ที่นุ่มและสั้น
- Route line draw
- Soft parallax เฉพาะจุด
- Gentle card stacking
- Horizontal card progression
- Sticky chapter transitions
- รองรับ reduced motion ทุกจุด

### Responsive behavior

- Desktop: full navigation และหลาย card ใน viewport
- Tablet: ลดขนาด headline และจำนวน card ที่เห็นพร้อมกัน
- Mobile: logo + CTA + menu, single-card focus, swipeable rows
- ห้ามมี horizontal page overflow นอก component ที่ตั้งใจให้เลื่อน
- CTA ต้องกดง่ายด้วยนิ้วโป้ง

## 7. Asset Plan

### Required original assets

- Accomp logo and wordmark
- App icon
- App screens or approved UI mockups
- Hero visual
- Feature illustrations
- Photography
- App Store and Google Play badges
- Social sharing image
- Favicon set

### Asset sources allowed after approval

- Assets supplied by the owner
- Original assets created for Accomp
- Properly licensed stock photography
- AI-generated imagery approved by the owner
- Open-source icon set with verified commercial license

### Asset rules

- เก็บ source และ export แยกกัน
- บันทึก license/attribution
- ใช้ SVG สำหรับ logo และ simple illustration
- ใช้ modern raster formats สำหรับ photography
- กำหนด responsive sizes และ lazy loading
- ไม่ดาวน์โหลดหรือนำ asset จาก Phantom มาใช้

## 8. Proposed Technical Direction

ต้องยืนยันใน Phase 0 ก่อน scaffold:

### Recommended baseline

- React-based static marketing site
- TypeScript
- Framework ที่รองรับ metadata, image optimization และ static generation
- CSS custom properties เป็น design tokens
- Component-scoped styling หรือ utility system ที่กำหนดกติกาชัดเจน
- Motion library เฉพาะเมื่อ native CSS/Web APIs ไม่เพียงพอ
- Content เก็บใน code/config ก่อน ยังไม่เพิ่ม CMS โดยไม่มีเหตุผล

### Architecture principles

- Static-first
- No backend by default
- Progressive enhancement
- Content separated from presentation where useful
- Reusable section and card primitives
- Server-rendered semantic content
- Minimal client-side JavaScript
- Motion loaded only where needed

### Proposed component map

```text
AppShell
├── SiteHeader
│   ├── DesktopNavigation
│   └── MobileMenu
├── HeroSection
│   ├── HeroCopy
│   └── HeroVisual
├── TrustStrip
├── FeatureChapter
│   ├── ChapterHeading
│   └── FeatureCarousel
│       └── FeatureCard
├── HowItWorks
├── StoryOrProof
├── FAQ
├── FinalCTA
└── SiteFooter
```

### Content model

ข้อความ CTA, feature cards, FAQ และ links ควรเก็บในโครงสร้างส่วนกลาง เพื่อแก้เนื้อหาโดยไม่ต้องแก้ markup หลายจุด

## 9. Phase Plan

### Phase 0 — Discovery and Decision Lock

#### Objective

ล็อกโจทย์ที่มีผลต่อทั้งโปรเจกต์ก่อนออกแบบหรือเขียน code

#### Work

- ทบทวนและอนุมัติ `plan.md`
- ทบทวน `brand/brand-identity.md`
- ยืนยันภาษาหลักของเว็บไซต์
- ยืนยันสถานะของแอปและ CTA
- ยืนยัน product truths
- เลือก technical stack
- กำหนด deployment target ในอนาคต
- เก็บ asset inventory
- ระบุ legal, privacy, analytics และ consent requirements
- กำหนด success metrics

#### Deliverables

- Approved scope
- Decision log
- Content and asset checklist
- Technical decision record
- Updated plan ถ้ามีการเปลี่ยนแปลง

#### Acceptance criteria

- ไม่มีคำถามสำคัญเกี่ยวกับ CTA, ภาษา, app availability และ product claims
- รู้ว่า asset ใดมีแล้วและ asset ใดต้องสร้าง
- Stack และ deployment direction ได้รับอนุมัติ
- เจ้าของโปรเจกต์อนุมัติให้เริ่ม Phase 1 อย่างชัดเจน

#### Exit gate

หยุดและรอคำสั่ง: **เริ่ม Phase 1**

### Phase 1 — Content Strategy and Visual Concept

#### Objective

กำหนดเรื่องที่จะเล่าและหน้าตาของ Accomp ก่อนทำ layout final

#### Work

- เขียน messaging hierarchy
- ทำ homepage copy draft
- สร้าง sitemap รุ่นแรก
- ทำ moodboard ที่เป็นของ Accomp
- สรุป visual motifs
- ทดลอง typography, colors, radius, shadow และ spacing
- วาง photography/illustration direction
- สร้าง motion storyboard ระดับแนวคิด
- ทำ asset brief สำหรับ logo, app screens และ hero

#### Deliverables

- [x] Copy deck v1
- [x] Visual direction board
- [x] Design token proposal
- [x] Asset brief
- [x] Motion concept

#### Acceptance criteria

- H1, value proposition และ CTA สื่อสารชัดเจน
- ภาพรวมไม่ดูเป็น clone ของ Phantom
- Visual direction สอดคล้องกับ brand identity
- ไม่มี asset สำคัญที่ถูกสมมติว่า “มีแล้ว” โดยไม่ยืนยัน

#### Exit gate

หยุดและรอคำสั่ง: **เริ่ม Phase 2**

### Phase 2 — Wireframe and Interaction Prototype

#### Objective

พิสูจน์ information hierarchy, flow และ responsive behavior ก่อนลงรายละเอียด visual

#### Work

- ทำ desktop wireframe
- ทำ mobile wireframe
- กำหนด section height และ storytelling rhythm
- วาง card carousel behavior
- วาง sticky header และ mobile menu
- วาง light/dark transitions
- กำหนดตำแหน่ง CTA
- ทำ low-fidelity interaction prototype
- ทบทวน reduced-motion path

#### Deliverables

- [x] [Desktop wireframe](./docs/phase-2/desktop-wireframe.png)
- [x] [Mobile wireframe](./docs/phase-2/mobile-wireframe.png)
- [x] [Interaction notes](./docs/phase-2/interaction-notes.md)
- [x] [Responsive behavior matrix](./docs/phase-2/responsive-behavior-matrix.md)
- [x] [Revised copy hierarchy](./docs/phase-2/copy-hierarchy.md)
- [x] [Low-fidelity interaction prototype](./docs/phase-2/interaction-prototype.html)

#### Acceptance criteria

- [x] ผู้ชมเข้าใจแอปและเห็น CTA โดยไม่ต้องอ่านทุก section
- [x] Mobile flow ไม่ใช่เพียง desktop ที่ถูกบีบให้แคบ
- [x] Carousel ใช้งานได้ด้วย touch, keyboard และ controls ใน prototype
- [x] Page order รองรับการปิด animation

#### Exit gate

หยุดและรอคำสั่ง: **เริ่ม Phase 3**

### Phase 3 — High-Fidelity Design

#### Objective

สร้างหน้าตา final ที่พร้อมใช้เป็น implementation reference

#### Work

- ออกแบบ header, hero และ mobile menu
- ออกแบบทุก feature chapter
- ออกแบบ original cards และ illustration
- ทำ phone mockups จาก app screens ที่อนุมัติ
- ออกแบบ final CTA, FAQ และ footer
- ทำ desktop, tablet และ mobile compositions
- สร้าง component states
- ระบุ animation timing และ easing
- ตรวจ color contrast และ text scaling

#### Deliverables

- [x] [High-fidelity page design](./docs/phase-3/high-fidelity-prototype.html)
- [x] [Responsive key screens](./docs/phase-3/README.md#deliverables)
- [x] [Component state sheet](./docs/phase-3/component-state-sheet.png)
- [x] [Asset export list](./docs/phase-3/asset-export-list.md)
- [x] [Motion specification](./docs/phase-3/motion-specification.md)

#### Acceptance criteria

- [x] ใช้ brand tokens อย่างสม่ำเสมอ
- [x] มี Accomp identity ที่จดจำได้
- [ ] Visual, content และ interaction ได้รับอนุมัติ — รอ owner review
- [x] Asset ทุกชิ้นมี source/สถานะการใช้งานชัดเจน และไม่ใช้ asset ที่ยังไม่ได้รับสิทธิ์
- [x] Design พร้อมให้ implement โดยไม่ต้องเดารายละเอียดสำคัญ

#### Exit gate

หยุดและรอคำสั่ง: **เริ่ม Phase 4**

### Phase 4 — Project Scaffold and Design System

#### Objective

สร้างฐาน code ที่เล็ก ชัดเจน และพร้อมรองรับหน้า marketing

#### Work

- สร้าง project scaffold ตาม stack ที่อนุมัติ
- ตั้ง lint, typecheck และ formatting
- สร้าง font loading
- สร้าง CSS tokens
- สร้าง layout/container primitives
- สร้าง typography, button, link, card และ icon primitives
- ตั้ง asset directories และ conventions
- ตั้ง testing baseline
- เพิ่ม placeholder metadata ที่ไม่เผยแพร่ข้อมูลเท็จ

#### Deliverables

- [x] [Runnable local project](./app/page.tsx)
- [x] [Design token layer](./app/globals.css)
- [x] [Core primitives](./components/index.ts)
- [x] [Quality scripts](./package.json)
- [x] [Project conventions](./README.md)

#### Acceptance criteria

- [x] Local development ทำงานได้
- [x] lint และ typecheck ผ่าน
- [x] ไม่มี backend หรือ dependency ที่เกินสโคป
- [x] Core tokens ตรงกับ brand identity
- [x] ยังไม่มี feature section ที่นำ Phase 5 มาทำล่วงหน้า

#### Exit gate

หยุดและรอคำสั่ง: **เริ่ม Phase 5**

### Phase 5 — Core Marketing Page

#### Objective

Implement โครงหน้าหลักและ content sections แบบครบสาระก่อนเพิ่ม motion ขั้นสูง

#### Work

- Site header
- Mobile navigation
- Hero
- Trust/availability strip
- Feature chapters
- Feature card groups
- How It Works
- Story/proof section
- FAQ
- Final CTA
- Footer
- Responsive layout
- Semantic structure และ basic accessibility

#### Deliverables

- [x] [Complete static homepage](./components/marketing/MarketingPage.tsx)
- [x] [Functional navigation](./components/marketing/SiteHeader.tsx)
- [x] Working CTA destinations
- [x] Responsive content

#### Acceptance criteria

- [x] เนื้อหาครบตาม copy ที่อนุมัติ
- [x] ไม่มี dead link หรือ CTA ปลอม
- [x] ใช้งานได้ตั้งแต่ 320px ขึ้นไป
- [x] Keyboard navigation ใช้งานได้ใน component contract
- [x] Layout ไม่พึ่ง motion เพื่อให้เข้าใจเนื้อหา
- [x] lint, typecheck และ tests ผ่าน

#### Exit gate

หยุดและรอคำสั่ง: **เริ่ม Phase 6**

### Phase 6 — Motion and Visual Storytelling

#### Objective

เพิ่มความรู้สึกระดับ premium โดยคงความสงบ ความเร็ว และ accessibility

#### Work

- Hero motion
- Scroll reveals
- Route/path animation
- Card stacking or horizontal progression
- Sticky chapter transitions
- Header theme transition
- Micro-interactions
- Reduced-motion alternatives
- Touch and keyboard carousel behavior

#### Deliverables

- [x] [Motion-complete homepage](./components/marketing/MarketingPage.tsx)
- [x] [Reduced-motion version](./components/marketing/MotionController.tsx)
- [x] [Interaction QA notes](./docs/phase-6/interaction-qa.md)

#### Acceptance criteria

- [x] Motion ช่วยลำดับสายตาและการเล่าเรื่อง
- [x] ไม่มี layout shift จาก animation
- [x] ไม่มี animation ที่ยาวหรือบังคับให้ผู้ใช้รอ
- [x] Reduced-motion mode มีข้อมูลครบ
- [x] Scroll และ interaction ใช้ passive listener, rAF และ native scrolling

#### Exit gate

หยุดและรอคำสั่ง: **เริ่ม Phase 7**

### Phase 7 — SEO, Analytics, Legal and Performance

#### Objective

ทำให้หน้าเว็บพร้อมสำหรับการค้นหา การแชร์ การวัดผล และการใช้งานจริง

#### Work

- [x] Title, description และ canonical metadata
- [x] Open Graph และ social image
- [x] WebSite structured data; งด SoftwareApplication จนกว่าข้อมูลพร้อม
- [x] Sitemap และ robots rules
- [x] Image and font optimization
- [x] Bundle review
- [x] ยืนยันไม่ใช้ Analytics จนกว่าจะอนุมัติ provider/consent
- [x] Privacy, terms และ cookie behavior
- [x] Error/404 handling ตามสโคป
- [x] Performance profiling

#### Deliverables

- [x] [Search and social metadata](./app/layout.tsx)
- [x] [Optimized social asset](./public/og.png)
- [x] [Legal link integration](./components/marketing/MarketingPage.tsx)
- [x] [เอกสารยืนยันว่าไม่ใช้ analytics](./docs/phase-7/search-social-and-legal.md)
- [x] [Performance report](./docs/phase-7/performance-report.md)

#### Acceptance criteria

- [x] ไม่มี metadata placeholder ที่หลุดสู่ production
- [x] Social preview ใช้งานได้
- [x] ไม่มี analytics ก่อน consent ถ้านโยบายกำหนด
- [x] Lighthouse production audit 90/100/100/100 และไม่มี critical issue
- [x] Core experience ทำงานได้แม้ JavaScript สำหรับ motion โหลดไม่สำเร็จ

#### Exit gate

หยุดและรอคำสั่ง: **เริ่ม Phase 8**

### Phase 8 — Cross-Device QA and Release Readiness

#### Objective

ตรวจทั้งระบบและเตรียม package สำหรับการสร้าง repo/deploy ในขั้นถัดไป

#### Work

- [x] Browser matrix QA สำหรับ in-app Chromium และ Google Chrome
- [x] Responsive QA
- [x] Keyboard and accessibility-tree smoke test
- [x] Contrast and narrow-reflow zoom proxy
- [x] Touch target test
- [x] Slow network simulation
- [x] Broken link and form checks
- [x] Console and runtime error checks
- [x] Content proofreading
- [x] Asset license audit
- [x] Production build verification
- [x] Final diff and project hygiene review

#### Target viewports

- [x] 320px
- [x] 390px
- [x] 768px
- [x] 1024px
- [x] 1440px
- [x] 1920px

#### Deliverables

- [x] [QA report](./docs/phase-8/qa-report.md)
- [x] [Known limitations](./docs/phase-8/known-limitations.md)
- [x] [Release checklist](./docs/phase-8/release-checklist.md)
- [x] Production-ready local candidate

#### Acceptance criteria

- [x] ไม่มี critical visual, accessibility หรือ runtime defects ที่พบในการทดสอบ
- [x] Production build สำเร็จด้วย output ที่ยืนยันได้
- [ ] CTA waitlist มีปลายทาง production จริง
- [ ] Legal และ product claims ได้รับการอนุมัติขั้นสุดท้าย
- [ ] เจ้าของโปรเจกต์อนุมัติ deployment

#### Exit gate

Commit และ push ได้รับอนุญาตในคำสั่งเริ่ม Phase 8 รอบนี้ แต่ deployment
ยังต้องรอคำสั่งแยกต่างหากหลังปิดรายการใน
[release checklist](./docs/phase-8/release-checklist.md)

### Phase 9 — Production Launch Preparation

#### Objective

เตรียม engineering launch path ให้ตรวจซ้ำได้และปลอดภัยขึ้น โดยไม่สมมติ
production domain, legal approval, CTA ปลายทางจริง หรือสิทธิ์ deploy

#### Work

- [x] GitHub Actions quality gate สำหรับ push และ pull request
- [x] Production origin preflight
- [x] Machine-readable release blocker report
- [x] Worker-level response security headers
- [x] No-store health endpoint
- [x] Environment contract สำหรับ production URL
- [x] Regression coverage สำหรับ launch controls
- [x] Production input worksheet และ deployment runbook

#### Deliverables

- [x] [Phase 9 overview](./docs/phase-9/README.md)
- [x] [Production readiness report](./docs/phase-9/production-readiness.md)
- [x] [Production input worksheet](./docs/phase-9/production-inputs.md)
- [x] [Deployment runbook](./docs/phase-9/deployment-runbook.md)
- [x] CI workflow, preflight scripts, health route และ security headers

#### Acceptance criteria

- [x] Repository quality gate รันได้ทั้ง local และ GitHub Actions
- [x] Production preflight ปฏิเสธ local/reserved/non-HTTPS origin
- [x] Production preflight รายงาน owner-controlled blockers ครบ
- [x] Health route และ security headers มี rendered-output tests
- [x] Production build และ full quality suite สำเร็จ
- [ ] Owner supplies and approves every production input
- [ ] Strict production preflight passes with the real origin
- [ ] Owner explicitly approves public deployment

#### Exit gate

Commit และ push ได้รับอนุญาตในคำสั่งเริ่ม Phase 9 รอบนี้ แต่ยังห้าม deploy
จนกว่าจะปิด owner-controlled checklist และได้รับคำสั่ง deployment แยกต่างหาก

### Phase 10 — Release Candidate Packaging and Smoke Automation

#### Objective

ทำให้ release candidate ทุกชุดตรวจผ่าน HTTP ได้และผูกกับ Git commit เดียว
ก่อนส่งต่อไปยัง hosted-version workflow

#### Work

- [x] URL-driven production smoke test
- [x] Managed local production-server smoke
- [x] Homepage, legal, crawl, health และ 404 route matrix
- [x] Security header, hash-link และ inactive-form assertions
- [x] Clean-tree Git archive packager
- [x] Commit SHA และ SHA-256 release manifest
- [x] CI release-quality gate
- [x] Regression coverage และ handoff documents

#### Deliverables

- [x] [Phase 10 overview](./docs/phase-10/README.md)
- [x] [Smoke-test contract](./docs/phase-10/smoke-test-contract.md)
- [x] [Release package contract](./docs/phase-10/release-package.md)
- [x] Smoke, local-server และ release-packaging scripts
- [x] CI integration และ regression tests

#### Acceptance criteria

- [x] Full quality suite และ production build สำเร็จ
- [x] Local production smoke ตรวจครบ 7 routes
- [x] Smoke test ปฏิเสธ insecure non-local origin
- [x] Release packager ปฏิเสธ dirty working tree
- [x] Clean commit สร้าง archive และ checksum manifest ได้
- [x] Archive checksum ตรงกับ manifest
- [ ] Hosted-origin smoke passes on the approved production URL
- [ ] Owner explicitly approves public deployment

#### Exit gate

Commit, package verification และ push ได้รับอนุญาตในคำสั่งเริ่ม Phase 10
รอบนี้ แต่ยังห้าม upload, save hosted version หรือ deploy

### Phase 2.1 — TH/EN Internationalization Foundation

#### Status

**Implementation complete — รอ owner review ภาษาไทยและ manual visual QA**

#### Objective

เพิ่มระบบเปลี่ยนภาษาไทยและอังกฤษแบบ file-based โดยข้อความทุกส่วนที่ผู้ใช้
มองเห็นหรือโปรแกรมช่วยการเข้าถึงอ่านได้ต้องมาจาก translation files และมี
ข้อความครบทั้ง `TH/EN`

#### Routing and locale decisions

- รองรับ locale ที่อนุญาตเพียง `en` และ `th`
- ใช้ URL เป็นแหล่งสถานะภาษา:
  - `/en` สำหรับภาษาอังกฤษ
  - `/th` สำหรับภาษาไทย
  - `/en/privacy`, `/th/privacy`
  - `/en/terms`, `/th/terms`
- `/` redirect ไป `/en` เป็นค่าเริ่มต้น
- ไม่ใช้ cookie, local storage, IP location หรือระบบติดตามเพื่อเลือกภาษา
- Language switcher ต้องเปลี่ยนไปยังหน้าเดียวกันในอีกภาษาและรักษา hash
  destination เมื่อเป็นไปได้
- Locale ที่ไม่รองรับต้องไม่ fallback แบบเงียบ ๆ และต้องตอบเป็น 404

#### File and code structure

- [x] สร้าง `messages/en.json` เป็นข้อความภาษาอังกฤษต้นฉบับ
- [x] สร้าง `messages/th.json` เป็นคำแปลภาษาไทย
- [x] สร้าง `lib/i18n/config.ts` สำหรับ locale constants และ validation
- [x] สร้าง `lib/i18n/messages.ts` สำหรับ static message loading ที่ใช้กับ
      Worker-compatible build
- [x] สร้าง type/schema จาก English catalog เพื่อบังคับ shape ของทั้งสองภาษา
- [x] รองรับตัวแปรในข้อความ เช่น `{current}` และ `{total}` โดยตรวจ placeholder
      parity ระหว่าง TH/EN
- [x] แยกข้อมูลที่ไม่ใช่ภาษา เช่น anchor IDs, visual keys และ component variants
      ออกจาก translation catalog
- [x] ย้าย typed marketing content เดิมออกจาก hard-coded English copy ให้
      component รับ localized content

#### Message catalog coverage

ทุกกลุ่มต่อไปนี้ต้องมี key ใน `messages/en.json` และ `messages/th.json`:

- [x] Site metadata: title, description, Open Graph, social และ structured data
- [x] Navigation, language switcher, mobile menu และ CTA
- [x] Hero, promise strip และข้อความประกอบภาพ
- [x] Plan, Pack และ Offline feature chapters
- [x] Feature cards, artwork labels และ carousel status
- [x] How It Works, editorial story และ final CTA
- [x] FAQ questions and answers
- [x] Waitlist inactive-state notice
- [x] Footer labels and navigation
- [x] Privacy page
- [x] Terms page
- [x] 404 page
- [x] Visible status, empty-state และ error copy
- [x] Accessibility copy: `aria-label`, `aria-roledescription`, live-region text,
      image alt text และ screen-reader-only labels

ชื่อแบรนด์ `Accomp`, URL, anchor IDs, route names ในระบบ, product identifiers
และ machine-readable `/health` payload ไม่ถือเป็นข้อความที่ต้องแปล

#### Translation catalog shape

ใช้ nested namespaces ที่อ่านและตรวจสอบง่าย:

```text
messages/
├── en.json
└── th.json

meta.*
common.*
navigation.*
languageSwitcher.*
hero.*
chapters.plan.*
chapters.pack.*
chapters.offline.*
howItWorks.*
editorial.*
faq.*
waitlist.*
footer.*
privacy.*
terms.*
notFound.*
accessibility.*
```

English catalog เป็น schema reference แต่ทั้งสองภาษาต้องมี key และ placeholder
ตรงกัน 100% ห้าม fallback ไปอีกภาษาใน production เพราะ fallback จะซ่อนข้อความ
ที่ยังแปลไม่ครบ

#### Language switcher

- [x] เพิ่มตัวเลือก `TH` และ `EN` ใน desktop header
- [x] เพิ่มตัวเลือกภาษาใน mobile menu
- [x] ระบุภาษาปัจจุบันด้วย state ที่มองเห็นได้และ `aria-current`
- [x] มีชื่อที่โปรแกรมอ่านหน้าจอเข้าใจ เช่น `Change language` /
      `เปลี่ยนภาษา`
- [x] ใช้ link จริงเพื่อให้ทำงานได้แม้ client JavaScript ไม่พร้อม
- [x] รองรับ keyboard และมี touch target อย่างน้อย 44 × 44 CSS pixels
- [ ] ตรวจ visual ว่า header, mobile menu และ CTA ไม่ล้นที่ความกว้าง 320px

#### Thai content and typography

- [x] แปลโดยรักษาน้ำเสียง calm, friendly, reliable และ outdoor-first
- [x] ไม่เพิ่ม product claim, launch claim หรือ offline claim ที่ต้นฉบับไม่ได้
      รับรอง
- [x] เลือก Thai-capable system fallback ที่ไม่เพิ่ม network dependency
- [x] กำหนด Thai line-height, line breaking และ text wrapping ที่เหมาะสม
- [ ] ตรวจ visual ของคำยาวใน CTA, navigation, cards และ legal pages
- [ ] ให้ owner review คำแปลไทยก่อนถือว่า copy approved

#### Localized SEO and crawl behavior

- [x] ตั้ง `<html lang="en">` และ `<html lang="th">` จาก route
- [x] สร้าง canonical URL แยกตาม locale
- [x] เพิ่ม `hreflang` สำหรับ `en`, `th` และ `x-default`
- [x] สร้าง localized title, description, Open Graph locale และ structured data
- [x] อัปเดต sitemap ให้มีหน้า EN/TH ครบ
- [x] คง `robots.txt` แบบไม่ hard-code placeholder domain
- [x] ใช้ `og.png` สำหรับ EN และสร้าง `og-th.png` สำหรับ TH
- [x] หน้า 404 ทุกภาษาต้องมี `noindex` โดยไม่มี index metadata ที่ขัดกัน

#### Testing and validation

- [x] เพิ่ม catalog parity test: key, type, array shape และ placeholder ตรงกัน
- [x] ปฏิเสธ empty message และ unresolved message key
- [x] เพิ่ม source guard สำหรับ user-visible hard-coded English/Thai ที่หลุดจาก
      catalog
- [x] Render homepage, Privacy, Terms และ 404 ครบทั้ง EN/TH
- [x] ตรวจ `lang`, canonical, `hreflang`, metadata และ localized structured data
- [x] ตรวจ language switcher เปลี่ยนไปยัง equivalent route และรักษา hash
- [x] ตรวจ navigation, FAQ, carousel live region และ accessibility labels ทั้งสองภาษา
- [x] ขยาย production smoke route matrix ให้ครอบคลุม localized routes
- [ ] ทำ manual responsive review ที่ 320, 390, 768, 1024, 1440 และ 1920px
- [x] ตรวจ keyboard/source semantics และ reduced-motion path
- [x] รัน formatting, lint, strict TypeScript, source tests, production build,
      rendered-output tests, release audit และ local production smoke

#### Deliverables

- [x] `messages/en.json`
- [x] `messages/th.json`
- [x] Locale configuration, loader, formatter และ type contracts
- [x] Locale-aware route structure
- [x] Accessible desktop/mobile language switcher
- [x] Localized homepage, Privacy, Terms, 404 และ metadata
- [x] Translation completeness and rendered-output regression tests
- [x] `docs/phase-2.1/README.md`
- [x] `docs/phase-2.1/translation-key-map.md`
- [x] Updated release checklist and smoke-test contract

#### Acceptance criteria

- [x] ทุกข้อความที่ผู้ใช้เห็นมีทั้งภาษาไทยและภาษาอังกฤษ
- [x] ไม่มี user-visible copy ที่ hard-code อยู่ใน React components
- [x] `messages/en.json` และ `messages/th.json` มี key/placeholder parity 100%
- [x] ผู้ใช้สลับภาษาได้จาก desktop และ mobile โดยไม่เสีย route context
- [x] ทุก localized route มีภาษา, canonical และ alternate metadata ถูกต้อง
- [ ] Owner ยืนยันว่า Thai copy ไม่มีข้อความล้น, ถูกตัด หรือทำให้ interaction ใช้งานไม่ได้
- [x] Core experience ใช้งานได้แม้ client-side JavaScript ไม่พร้อม
- [x] Full release-quality suite และ localized smoke tests ผ่าน
- [ ] Owner review และอนุมัติคำแปลภาษาไทย

#### Out of scope

- ภาษาอื่นนอกเหนือจากไทยและอังกฤษ
- Translation API, automatic translation service หรือ CMS
- Backend-stored language preference หรือ account preference
- IP-based geolocation และ automatic locale tracking
- RTL layout
- Live waitlist, analytics, final legal approval หรือ mobile-app localization
- Public deployment

#### Exit gate

Phase 2.1 implementation, automated QA, commit และ push ได้รับอนุญาตในคำสั่ง
รอบนี้ แต่การอนุมัติคำแปลไทย, manual visual QA และ deployment ยังต้องได้รับ
การตรวจหรือคำสั่งแยกต่างหาก

### Phase 2.2 — Bilingual Mobile App Roadmap

#### Status

**Implementation complete — รอ owner review ข้อความสาธารณะและ manual visual QA**

#### Objective

เพิ่มเมนูและหน้า Roadmap สาธารณะของ Accomp เพื่อสื่อทิศทางคร่าว ๆ ของ
**แอปมือถือ Accomp ในอนาคต** ตั้งแต่ product discovery จนถึง launch
preparation โดยรองรับภาษาไทยและอังกฤษครบถ้วน ทั้งนี้ Phase นี้แก้เฉพาะเว็บไซต์
โปรโมตและไม่เริ่มพัฒนาแอปมือถือ

#### Product and content decisions

- Roadmap เป็น **high-level mobile product direction** ไม่ใช่ประวัติการสร้างเว็บ
- แสดงเฉพาะลำดับเป้าหมายกว้าง ๆ ของแอป ไม่ลงรายละเอียด implementation
- ใช้สถานะที่เข้าใจง่าย:
  - `Current focus` / `กำลังให้ความสำคัญ` สำหรับ product discovery
  - `Planned` / `วางแผนไว้` สำหรับขั้นถัดไป
- ใช้ horizon `Now`, `Next`, `Later` แทนวันที่ที่ยังยืนยันไม่ได้
- ห้ามสร้างเปอร์เซ็นต์ความคืบหน้า วันที่เปิดตัว แพลตฟอร์ม หรือคำสัญญาฟีเจอร์
  ที่ยังไม่ได้ validate

#### Roadmap content inventory

Roadmap เวอร์ชันแก้ไขมี 6 ขั้นเรียงตามทิศทางผลิตภัณฑ์:

| Stage | Horizon | Public focus |
| --- | --- | --- |
| 1. Product discovery | Now | ตรวจสอบผู้ใช้ ปัญหาหลัก และ core trip flow |
| 2. Build the shared trip plan | Next | สร้างทริป ชวนเพื่อน กำหนดการและรายละเอียดร่วม |
| 3. Add gear coordination | Next | เพิ่ม checklist, assignment และ readiness เข้าในแผนเดิม |
| 4. Take the plan offline | Later | เพิ่มข้อมูลทริปออฟไลน์และสถานะการซิงก์เข้าในแผนเดิม |
| 5. Private beta | Later | ทดลองกับกลุ่มเล็กและปรับจากการใช้งานจริง |
| 6. Launch readiness | Later | privacy, safety, accessibility, support และ store readiness |

Stage 2–4 เป็นลำดับการพัฒนาสามความสามารถภายใต้ฟีเจอร์หลักเดียวคือ
`Shared Trip Planning / วางแผนทริปร่วมกัน` ไม่ใช่ top-level feature แยก
โดยให้ [product definition](./brand/product-definition.md) เป็น source of truth
ล่าสุดเหนือเอกสาร Phase เก่า

แต่ละรายการมี `id`, stage, horizon, localized title, localized summary,
highlights และ status โดยไม่มีวันที่เปิดตัว

#### Information architecture and routing

- เพิ่ม route `/en/roadmap` สำหรับภาษาอังกฤษ
- เพิ่ม route `/th/roadmap` สำหรับภาษาไทย
- `/roadmap` redirect ไป `/en/roadmap` เพื่อให้สอดคล้องกับ default locale
- เพิ่ม `Roadmap` / `โรดแมป` ใน desktop navigation และ mobile menu
- เพิ่ม Roadmap ใน footer navigation เป็นทางเข้ารอง
- Language switcher ต้องสลับ `/en/roadmap` ↔ `/th/roadmap` โดยคง route context
- ลิงก์กลับหน้าหลักต้องไปยัง homepage ของ locale ปัจจุบัน
- Route หรือ locale ที่ไม่รองรับต้องรักษาพฤติกรรม 404 เดิม

#### File and code structure

- [x] สร้าง `content/roadmap.ts` เป็น structural source of truth สำหรับ ID,
      stage order, horizon, status และ copy keys โดยไม่มี user-visible copy
- [x] เพิ่ม namespace `roadmap.*` ใน `messages/en.json` และ `messages/th.json`
- [x] สร้าง `app/[locale]/roadmap/page.tsx`
- [x] สร้าง `app/roadmap/page.tsx` สำหรับ default-locale redirect
- [x] สร้าง reusable roadmap presentation component และ stylesheet ภายใต้
      `components/roadmap/`
- [x] ขยาย locale-aware navigation โดยไม่ duplicate route logic
- [x] ไม่อ่าน Git history, Markdown หรือ filesystem ใน runtime

#### Experience and visual direction

- ใช้ responsive vertical timeline หรือ semantic ordered journey เป็นแกนหลัก
- ใช้ pine marker, เส้นทาง และ palette
  `#778873`, `#A1BC98`, `#DCCFC0`, `#FDF6ED`
- รักษา typography, spacing, border radius และ motion language จากหน้า marketing
  ปัจจุบัน
- ทำให้ `Current focus` เด่นขึ้นอย่างสุขุมโดยไม่ใช้สีเพียงอย่างเดียว
- แต่ละ Stage แสดง summary แบบสแกนง่ายและ highlights เพียง 2 รายการ
  หน้าแน่นเกินไป
- Mobile ต้องอ่านเป็นลำดับเดียว ไม่ใช้ horizontal overflow และไม่ซ่อนข้อมูลหลัก
- ใช้ CSS และ asset/icon ที่มีอยู่แล้ว ไม่เพิ่ม bitmap illustration ใหม่ใน Phase นี้
- Motion ต้องเป็น progressive enhancement และมี reduced-motion alternative

#### Internationalization requirements

- ข้อความที่ผู้ใช้เห็นและ accessibility copy ทั้งหมดต้องมาจาก translation catalog
- EN/TH ต้องมี key, array shape และ placeholders ตรงกัน 100%
- Stage number, horizon key, status key และ route key เป็นข้อมูลกลางที่ไม่ต้องแปล
- แปล title, summary, highlights, status label, navigation, metadata และ ARIA labels
- Owner ต้องตรวจภาษาไทยและความถูกต้องของ public summary ก่อนอนุมัติหน้า

#### Accessibility

- ใช้ `<main>`, H1 หนึ่งรายการ และ `<ol>` สำหรับลำดับเหตุการณ์
- แต่ละ Stage มี heading ที่เชื่อมกับรายการด้วย accessible name
- ใช้ข้อความและ icon/shape ร่วมกันเพื่อสื่อสถานะ ไม่พึ่งสีเพียงอย่างเดียว
- Product discovery ใช้ `aria-current="step"`
- Navigation, language switcher และลิงก์ทั้งหมดใช้งานด้วย keyboard ได้
- Interactive target มีขนาดอย่างน้อย 44 × 44 CSS pixels
- Heading hierarchy และ reading order ต้องตรงกันบน desktop และ mobile

#### Localized SEO and discovery

- เพิ่ม localized title และ description สำหรับหน้า Roadmap
- เพิ่ม canonical, `hreflang` (`en`, `th`, `x-default`) และ Open Graph metadata
- เพิ่ม `/en/roadmap` และ `/th/roadmap` ใน sitemap
- ใช้ social preview ของ locale ปัจจุบันที่มีอยู่แล้ว โดยไม่สร้าง asset ซ้ำ
- Structured data ใหม่จะเพิ่มเฉพาะเมื่อมี schema ที่ตรงกับเนื้อหาจริง

#### Testing and validation

- [x] ตรวจ roadmap ID ไม่ซ้ำ ลำดับ Stage ถูกต้อง และมี product discovery–launch
      readiness ครบ 6 ขั้น
- [x] ตรวจว่าทุก roadmap entry อ้างถึง translation key ที่มีอยู่จริง
- [x] ตรวจ catalog parity ของ roadmap title, summary และ highlights
- [x] ตรวจ rendered EN/TH roadmap: `lang`, H1, ordered timeline, horizon และ status
- [x] ตรวจ desktop/mobile navigation และ footer มี localized Roadmap link
- [x] ตรวจ language switcher ไป equivalent roadmap route
- [x] ตรวจ current phase semantics และ status ไม่สื่อด้วยสีอย่างเดียว
- [x] ตรวจ canonical, `hreflang`, metadata และ sitemap routes
- [x] ขยาย production smoke matrix จาก 12 เป็น 14 localized content routes
- [ ] ตรวจ responsive layout ที่ 320, 390, 768, 1024, 1440 และ 1920px
- [ ] ตรวจ keyboard flow, focus visibility และ 200% zoom ด้วย browser
- [x] ตรวจ semantic keyboard path, touch-target source และ reduced motion
- [x] รัน formatting, lint, strict TypeScript, source tests, production build,
      rendered-output tests, release audit และ local production smoke

#### Deliverables

- [x] Bilingual `/en/roadmap` และ `/th/roadmap`
- [x] Localized Roadmap menu ใน desktop, mobile และ footer
- [x] Typed, curated roadmap data model
- [x] `roadmap.*` message catalog ครบ EN/TH
- [x] Localized metadata, sitemap และ equivalent-route switching
- [x] Roadmap regression tests และเอกสาร `docs/phase-2.2/README.md`
- [x] Updated release checklist and smoke-test contract

#### Acceptance criteria

- [x] ผู้ใช้เข้าหน้า Roadmap ได้จาก desktop และ mobile menu
- [x] Roadmap แสดง 6 ขั้นของทิศทางแอปมือถือครบตามลำดับ
- [x] แต่ละ Stage อธิบายเป้าหมายคร่าว ๆ โดยไม่ลงรายละเอียดเกินจำเป็น
- [x] ทุกข้อความบนหน้าและเมนูมีทั้งภาษาไทยและอังกฤษ
- [x] การสลับภาษารักษา roadmap route context
- [ ] หน้าใช้งานได้บน target viewports โดยไม่มีข้อความล้นหรือ horizontal scroll
- [ ] Manual keyboard, zoom และ visual status communication ผ่าน browser QA
- [x] Semantic timeline และ automated accessibility contracts ผ่าน QA
- [x] Localized SEO และ production smoke ครอบคลุม route ใหม่
- [ ] Owner อนุมัติข้อความ roadmap สาธารณะทั้ง TH/EN
- [x] Full release-quality suite ผ่าน

#### Out of scope

- การลงมือพัฒนา iOS app, Android app, backend หรือระบบ sync จริง
- การรับรองว่าแต่ละฟีเจอร์จะเปิดใช้จริงตามลำดับนี้
- Issue tracker, project-management dashboard, GitHub feed หรือ admin/CMS
- Roadmap ที่ผู้ใช้แก้ไขได้
- Progress percentage, voting, comments หรือ subscription notification
- การประกาศ launch date, platform availability หรือ feature-complete date
- Live waitlist, analytics, production input, hosted smoke และ deployment

#### Exit gate

Phase 2.2 implementation, automated QA, commit และ push ได้รับอนุญาตในคำสั่ง
รอบนี้ แต่ owner review ข้อความ public roadmap, manual browser/device QA และ
deployment ยังต้องได้รับการตรวจหรือคำสั่งแยกต่างหาก

### Phase 2.3 — Support the Developer and Supporter Wall

#### Status

**Implementation complete with safe empty state — รอข้อมูลผู้สนับสนุนจริง,
approved support destination และ owner review**

#### Objective

เพิ่มเมนูและหน้าสาธารณะ **“สนับสนุนผู้พัฒนา” / “Support the developer”**
เพื่ออธิบายว่าการสนับสนุนช่วย Accomp อย่างไร และแสดง supporter wall ที่มี
รูปภาพกับชื่อสาธารณะของผู้สนับสนุนจริง โดยรองรับภาษาไทยและอังกฤษครบถ้วน

Phase นี้ยังอยู่ในสโคปเว็บไซต์โปรโมต ไม่สร้างระบบชำระเงินเอง ไม่สร้าง backend
และไม่เปิดเผยชื่อหรือรูปของบุคคลใดโดยไม่มีความยินยอม

#### Product and trust decisions

- ใช้ข้อมูลผู้สนับสนุนจริงที่เจ้าของโปรเจกต์จัดเตรียมและยืนยันแล้วเท่านั้น
- ห้ามสร้างชื่อ รูปบุคคล หรือ testimonial สมมติเพื่อทำให้หน้าดูมีข้อมูล
- ผู้สนับสนุนเลือกใช้ชื่อจริง นามแฝง หรือไม่แสดงตัวตนได้
- แสดงเฉพาะชื่อสาธารณะและรูปที่ได้รับอนุญาต ไม่มีจำนวนเงิน อันดับ หรือ tier
  ในเวอร์ชันแรก
- ลำดับการแสดงผลเป็น `sortOrder` ที่เจ้าของกำหนด ไม่สื่อว่าคนแรกสนับสนุนมากกว่า
- ต้องมีวิธีถอดชื่อหรือรูปออกเมื่อผู้สนับสนุนถอนความยินยอม
- CTA สนับสนุนจะเปิดใช้งานเมื่อมี HTTPS destination ที่เจ้าของอนุมัติแล้ว
- หากยังไม่มี destination ให้แสดงสถานะ “ช่องทางสนับสนุนกำลังเตรียมการ”
  อย่างตรงไปตรงมา และไม่ใช้ปุ่มที่ดูเหมือนชำระเงินได้
- หากใช้แพลตฟอร์มภายนอก ให้เป็น outbound link ที่ระบุชัดว่าออกจาก Accomp
  ไม่ฝังช่องกรอกบัตรหรือรับข้อมูลการเงินบนเว็บไซต์

#### Information architecture and routing

- เพิ่ม route `/en/support` สำหรับภาษาอังกฤษ
- เพิ่ม route `/th/support` สำหรับภาษาไทย
- `/support` redirect ไป `/en/support` ตาม default locale
- เพิ่ม `Support the developer` / `สนับสนุนผู้พัฒนา` ใน desktop navigation
  และ mobile menu
- เพิ่มลิงก์หน้า Support ใน footer
- Language switcher ต้องสลับ `/en/support` ↔ `/th/support`
- โลโก้และลิงก์กลับหน้าหลักต้องรักษา locale ปัจจุบัน
- CTA จากหน้า Support กลับไป product story หรือไป approved support destination
  ตามสถานะที่ตรวจสอบแล้ว
- Route และ locale ที่ไม่รองรับต้องรักษาพฤติกรรม 404 เดิม

#### Page content

หน้า Support เวอร์ชันแรกประกอบด้วย:

1. Hero ที่อธิบายการสนับสนุนแบบกระชับ
2. “What support helps with” / “การสนับสนุนช่วยเรื่องอะไร”
3. Support CTA หรือสถานะกำลังเตรียมช่องทางอย่างตรงไปตรงมา
4. Supporter wall พร้อมรูปและชื่อสาธารณะ
5. Empty state ที่สุภาพเมื่อยังไม่มีผู้สนับสนุนที่อนุมัติให้เผยแพร่
6. Privacy note ว่ารายชื่อและรูปแสดงโดยได้รับความยินยอม

ข้อความต้องไม่อ้างว่าเงินสนับสนุนรับประกันฟีเจอร์ สิทธิ์ควบคุม roadmap
ผลตอบแทนทางการเงิน หรือวันเปิดตัว

#### Supporter data model

- [x] สร้าง `content/supporters.ts` เป็น source of truth แบบ static
- แต่ละ supporter entry มีเฉพาะ:
  - `id` ที่ไม่ใช้ข้อมูลส่วนตัวโดยตรง
  - `displayName`
  - `imagePath`
  - `sortOrder`
- ข้อมูลที่ผู้ใช้เห็นนอกเหนือจากชื่อเฉพาะต้องมาจาก translation catalog
- Proper name และนามแฝงไม่แปลข้ามภาษา
- ไม่เก็บ email, payment ID, transaction amount, address หรือ private consent
  evidence ใน repository
- Empty array ต้อง render empty state ได้โดยไม่ทำให้ build ล้ม
- Duplicate ID, duplicate image path และ duplicate sort order ต้องถูกปฏิเสธ
- Runtime ห้ามอ่าน payment provider, Git history, Markdown หรือ filesystem

#### Supporter image requirements

- เก็บ asset ที่อนุมัติแล้วใน `public/supporters/`
- ใช้ภาพอัตราส่วน 1:1 ที่ crop อย่างเคารพเจ้าของภาพ
- ใช้ WebP หรือ AVIF เมื่อแปลงได้โดยไม่เสียคุณภาพอย่างเห็นได้ชัด
- กำหนด `width` และ `height` เพื่อป้องกัน layout shift
- ใช้ lazy loading และ asynchronous decoding สำหรับรูปที่อยู่นอก viewport
- เป้าหมายขนาดไม่เกิน 200 KB ต่อภาพ และไม่เกิน 1.5 MB ตาม global asset budget
- ลบ EXIF/GPS metadata ก่อนนำเข้า repository
- ห้ามใช้รูปจาก social media, search engine หรือบุคคลที่สามโดยเดาสิทธิ์ใช้งาน
- Alt text ใช้ template ที่แปลได้ เช่น `Portrait of {name}` /
  `รูปของ {name}` และ placeholder ต้องตรงกันระหว่าง TH/EN
- หากผู้สนับสนุนไม่ต้องการใช้รูป ให้รอ asset ที่ได้รับอนุมัติหรือใช้ anonymous
  treatment ที่เจ้าของยืนยัน ห้ามสร้างใบหน้าทดแทนเอง

#### Consent and privacy workflow

ก่อนเพิ่ม supporter entry เจ้าของโปรเจกต์ต้องยืนยัน:

- ชื่อสาธารณะที่ต้องการแสดง
- ไฟล์รูปที่มีสิทธิ์เผยแพร่
- ความยินยอมให้แสดงชื่อและรูปบนเว็บไซต์สาธารณะ
- การยืนยันว่าบุคคลในภาพเป็นผู้ใหญ่ หรือมี guardian consent ที่ตรวจสอบแล้ว
- ช่องทางรับคำขอลบหรือแก้ไขข้อมูล

สร้าง `docs/phase-2.3/supporter-publication-register.md` สำหรับรายการ asset,
public display name, permission status และวันที่เจ้าของอนุมัติเท่านั้น
หลักฐานความยินยอมส่วนตัวต้องเก็บนอก public repository

#### File and code structure

- [x] ขยาย `LocalizedPathname` ให้รองรับ `/support`
- [x] สร้าง `app/[locale]/support/page.tsx`
- [x] สร้าง `app/support/page.tsx` สำหรับ default-locale redirect
- [x] สร้าง `components/support/SupportPage.tsx`
- [x] สร้าง `components/support/support-page.module.css`
- [x] สร้าง `content/supporters.ts`
- [x] เพิ่ม namespace `support.*` ใน `messages/en.json` และ `messages/th.json`
- [x] ขยาย shared navigation และ footer โดยไม่ duplicate route logic
- [x] เพิ่ม publication register และ regression tests
- [ ] เพิ่ม supporter assets หลังได้รับไฟล์และ publication permission จริง

#### Experience and visual direction

- ใช้ topbar รูปแบบ Accomp ปัจจุบัน: brand ซ้าย, menu capsule กลาง และ actions ขวา
- รวมเมนูเป็น `Product` dropdown พร้อม hover expansion และ keyboard fallback
  ส่วน `Roadmap` กับ `Support` เป็น direct link โดย mobile menu ต้องรักษาลำดับ
  ชั้นเดียวกัน
- Product dropdown แสดงเฉพาะ `Features` และ `How it works`; Offline Maps เป็น
  ส่วนหนึ่งของ Features และไม่มี topbar destination แยก
- Footer หมวด Product ใช้โครงเดียวกันโดยไม่มี Offline link แยก และยังคง
  `Roadmap` เป็นเส้นทางรอง
- เก็บ FAQ ไว้เฉพาะใน footer ไม่แสดงใน topbar หรือ Support dropdown
- ตัดแถบ preview สีดำด้านบนออกจากทุก public page
- Hero ใช้ pine/path motif และ palette
  `#778873`, `#A1BC98`, `#DCCFC0`, `#FDF6ED`
- Supporter wall เป็น responsive card grid ที่ให้รูปและชื่อมีน้ำหนักเท่ากัน
- รูปใช้กรอบวงกลมหรือ rounded square แบบเดียวกันทุกคน
- ไม่ใช้ขนาด card, สี หรือ badge เพื่อสื่อมูลค่าเงินสนับสนุน
- Mobile ต้องเป็นลำดับเดียว อ่านง่าย ไม่มี horizontal overflow
- Motion เป็น progressive enhancement และมี reduced-motion alternative
- Empty state ต้องดูตั้งใจ ไม่แสดง broken image หรือ skeleton ถาวร

#### Internationalization

- เพิ่ม localized navigation, hero, support explanation, CTA/status, section
  headings, empty state, consent note, metadata และ ARIA labels
- EN/TH ต้องมี key, array shape และ placeholders ตรงกัน 100%
- `displayName`, asset path และ structural ID เป็นข้อมูลกลางที่ไม่แปล
- Language switcher ต้องรักษา support route context
- Owner review ภาษาไทยและอังกฤษก่อนถือว่า public copy approved

#### Accessibility

- ใช้ `<main>`, H1 หนึ่งรายการ และ semantic section headings
- Supporter wall ใช้ `<ul>`/`<li>` หรือโครงสร้างรายการที่เทียบเท่า
- รูปทุกภาพมี localized meaningful alt text
- ไม่ซ้ำชื่อใน alt text และ visible text แบบสร้างเสียงรบกวนโดยไม่จำเป็น
- Support CTA, menu และ language switcher ใช้ keyboard ได้
- Interactive target มีขนาดอย่างน้อย 44 × 44 CSS pixels
- Focus state ชัดเจนและ reading order ตรงกันทุก viewport
- Empty state และ external-link notice ต้องอ่านได้ด้วย screen reader

#### Localized SEO and discovery

- เพิ่ม localized title และ description สำหรับหน้า Support
- เพิ่ม canonical, `hreflang` (`en`, `th`, `x-default`) และ Open Graph metadata
- เพิ่ม `/en/support` และ `/th/support` ใน sitemap
- ใช้ social preview ตาม locale ที่มีอยู่แล้ว
- ไม่ใส่ `Person` structured data สำหรับผู้สนับสนุนโดยอัตโนมัติ
- ไม่ใส่ donation/payment schema จนกว่าจะมีปลายทางและสถานะที่ยืนยันแล้ว

#### Testing and validation

- [x] ตรวจ supporter ID, image path และ sort order ไม่ซ้ำ
- [ ] ตรวจทุก supporter entry มีชื่อและ asset ที่มีอยู่จริง
- [ ] ตรวจ image format, dimensions, file size และไม่มี EXIF/GPS metadata
- [x] ตรวจ catalog parity รวม `{name}` placeholder
- [x] ตรวจ rendered EN/TH support page: `lang`, H1 และ empty state
- [x] ตรวจ image contract มี dimensions, lazy loading, decoding และ localized alt
- [x] ตรวจ desktop/mobile navigation และ footer มี localized Support link
- [x] ตรวจ language switcher ไป equivalent support route
- [ ] ตรวจ approved external link เป็น HTTPS และมี safe external-link behavior
- [x] ตรวจ disabled/inactive state ไม่มี form หรือ submission surface
- [x] ตรวจ canonical, `hreflang`, metadata และ sitemap routes
- [x] ขยาย production smoke matrix จาก 14 เป็น 16 localized content routes
- [ ] ตรวจ topbar และ card grid ที่ 320, 390, 768, 1024, 1440 และ 1920px
- [ ] ตรวจ keyboard flow, focus visibility, 200% zoom และ reduced motion
- [x] รัน formatting, lint, strict TypeScript, source tests, production build,
      rendered-output tests, release audit และ local production smoke

#### Deliverables

- [x] Bilingual `/en/support` และ `/th/support`
- [x] Localized Support menu ใน desktop, mobile และ footer
- [ ] Responsive supporter wall พร้อมรูปและชื่อที่ได้รับอนุญาต
- [x] Honest inactive preparation state
- [x] Typed static supporter data model
- [x] Publication register
- [ ] Optimized supporter assets หลังได้รับรูปที่ได้รับอนุญาตจริง
- [x] `support.*` message catalog ครบ EN/TH
- [x] Localized metadata, sitemap และ equivalent-route switching
- [x] Regression tests และ `docs/phase-2.3/README.md`
- [x] Updated release checklist and smoke-test contract

#### Acceptance criteria

- [x] ผู้ใช้เข้าหน้า Support ได้จาก desktop และ mobile menu
- [ ] หน้าแสดงรูปและชื่อผู้สนับสนุนจริงตามข้อมูลที่ได้รับอนุมัติ
- [x] ไม่มีชื่อ รูป จำนวนเงิน หรือ claim ที่สร้างขึ้นเอง
- [ ] ผู้สนับสนุนทุกคนมี publication permission ที่เจ้าของยืนยัน
- [x] ทุกข้อความบนหน้าและเมนูมีทั้งภาษาไทยและอังกฤษ
- [x] การสลับภาษารักษา support route context
- [ ] หน้าใช้ได้ทุก target viewport โดยไม่มีเมนูชน ข้อความล้น หรือ horizontal scroll
- [ ] Semantic list, alt text, keyboard navigation และ empty state ผ่าน QA
- [x] Localized SEO และ production smoke ครอบคลุม route ใหม่
- [ ] Owner อนุมัติ support destination และ public supporter wall
- [x] Full release-quality suite ผ่าน

#### Out of scope

- Payment processing, wallet, subscription หรือรับข้อมูลบัตรบนเว็บไซต์
- Backend, database, supporter login หรือ self-service profile
- Automatic sync จาก Patreon, Buy Me a Coffee, GitHub Sponsors หรือ provider อื่น
- Upload form สำหรับชื่อและรูป
- Support tier, leaderboard, amount, badge หรือ reward system
- Public comment, testimonial หรือ social profile link
- การพัฒนาแอปมือถือ
- Analytics, final legal approval, production input, hosted smoke และ deployment

#### Owner inputs required before implementation can be considered complete

- Approved support destination หรือยืนยันให้ใช้ preparation state
- รายชื่อสาธารณะของผู้สนับสนุนแต่ละคน
- รูป 1:1 ที่มีสิทธิ์เผยแพร่ของแต่ละคน
- Confirmation ว่าทุกคนยินยอมให้เผยแพร่ชื่อและรูป
- ลำดับการแสดงผลที่ต้องการ
- ช่องทางติดต่อสำหรับคำขอลบหรือแก้ไข

#### Exit gate

ผู้ใช้อนุญาต implementation, commit และ push ในคำสั่งรอบนี้ หน้า Support
ทำงานด้วย safe empty state โดยไม่มีชื่อ รูป หรือระบบรับเงินสมมติ การเติม
supporter wall ให้มีข้อมูลจริงยังต้องได้รับชื่อ รูปและ permission ก่อน ส่วน
owner review, manual browser/device QA และ deployment ต้องได้รับการตรวจหรือ
คำสั่งแยกต่างหาก

### Phase 2.4 — Home Screen Widget Spotlight

#### Status

**Implementation complete — Widget spotlight, TH/EN, provisional assets,
Roadmap integration, documentation และ automated regression coverage พร้อมแล้ว**

#### Product classification decision

Home Screen Widgets **ไม่ใช่ฟีเจอร์หลักใหม่** และไม่ใช่ความสามารถลำดับที่ 4
ของ Accomp แต่เป็น **Companion Surface / ช่องทางแสดงผลเสริม** ที่นำข้อมูลจาก
ฟีเจอร์หลัก `Shared Trip Planning / วางแผนทริปร่วมกัน` มาให้ผู้ใช้เห็นและ
เข้าถึงได้รวดเร็วจากหน้าจอ Home หรือหน้าจอ Widget ของมือถือ

Widget ทั้งสองแบบเชื่อมกลับไปยังความสามารถเดิม:

- Countdown Mascot Widget นำวันเริ่มทริปและสถานะความพร้อมจากแผนทริปมาแสดง
- Gear Checklist Widget นำรายการอุปกรณ์และความพร้อมจากแผนทริปมาแสดง

เว็บไซต์สามารถให้ Widgets เป็นบทโปรโมตเด่นภายใน `Features` ได้ แต่ห้ามเพิ่ม
เป็น top-level navigation, ห้ามเรียกว่า core feature ใหม่ และห้ามทำให้เข้าใจว่า
เป็นผลิตภัณฑ์ที่แยกจากแผนทริปร่วม

#### Objective

เพิ่มส่วนโปรโมต Widgets บนหน้า Home ภาษาไทยและอังกฤษ เพื่อสื่อว่า Accomp
สามารถนำข้อมูลสำคัญจากแผนทริปมาอยู่ใกล้ผู้ใช้มากขึ้น โดยนำเสนอแนวคิด Widget
สองแบบอย่างชัดเจน ซื่อสัตย์ และไม่อ้างว่าเปิดใช้งานบนแพลตฟอร์มใดแล้ว

Phase นี้แก้เฉพาะเว็บไซต์โปรโมต ไม่พัฒนา WidgetKit, Android App Widget,
mobile app, background sync, notification หรือ deep link จริง

#### Widget concept 1 — Countdown Companion

Widget แสดงข้อมูลขั้นต่ำ:

- ชื่อทริป หรือ privacy-safe label ที่ผู้ใช้เลือก
- วันที่เริ่มทริป
- จำนวนวันนับถอยหลัง
- มาสคอตต้นสน Accomp ที่มีความสุขและตื่นเต้นขึ้นเมื่อวันเดินทางใกล้เข้ามา
- สถานะ `Today / วันนี้` เมื่อถึงวันเริ่มทริป โดยไม่แสดงเลขติดลบ

แนวทาง mascot progression สำหรับ prototype:

| Countdown state | Mascot direction | Required text |
| --- | --- | --- |
| 31 วันขึ้นไป | สงบและเริ่มสนใจ | จำนวนวันที่เหลือ |
| 30–8 วัน | ยิ้มเล็กน้อย | จำนวนวันที่เหลือ |
| 7–3 วัน | ตื่นเต้นชัดขึ้น | จำนวนวันที่เหลือ |
| 2–1 วัน | มีความสุขมากและพร้อม | จำนวนวันที่เหลือ |
| วันเดินทาง | พร้อมออกเดินทาง | `Today / วันนี้` |

สีหรือสีหน้ามาสคอตเป็นเพียง visual reinforcement จำนวนวันและข้อความต้อง
สื่อสถานะได้ด้วยตนเอง หากวันเริ่มทริปผ่านไปแล้ว preview ต้องเปลี่ยนเป็น
สถานะทริปกำลังดำเนินอยู่หรือจบการนับถอยหลัง ไม่แสดงค่าติดลบ

การคำนวณวันสำหรับ product concept ต้องอิง calendar day และ timezone ของทริป
ไม่ใช่การหารจำนวนชั่วโมงด้วย 24 ตรง ๆ เพื่อหลีกเลี่ยงวันที่คลาดเคลื่อน

#### Widget concept 2 — Gear Checklist

Widget แสดงข้อมูลขั้นต่ำ:

- ชื่อทริปหรือ label แบบย่อ
- จำนวนอุปกรณ์ที่พร้อมเทียบกับทั้งหมด เช่น `8/10`
- รายการที่ยังต้องเตรียมจำนวนจำกัดเพื่อให้อ่านได้บนพื้นที่เล็ก
- สถานะว่าใครรับผิดชอบ เมื่อข้อมูลดังกล่าวได้รับการยืนยันในแอป
- ทางเข้าสู่รายการอุปกรณ์ฉบับเต็มในแอปในอนาคต

เว็บไซต์เวอร์ชันแรกต้องนำเสนอเป็น illustrative preview ไม่ทำ checkbox ที่ดู
เหมือนกดแล้วบันทึกข้อมูลได้จริง พฤติกรรม interactive widget, deep link และ
การอัปเดต checklist จากหน้า Home ต้องรอการยืนยัน platform และ mobile
implementation

#### Privacy and trust requirements

- หน้าจอ Home เป็นพื้นที่ที่คนอื่นอาจมองเห็นได้ ต้องวางแผน privacy-safe mode
- ผู้ใช้ควรเลือกได้ในอนาคตว่าจะใช้ชื่อทริปจริงหรือ generic label
- ห้ามแสดงพิกัด จุดนัดพบ รายชื่อผู้ร่วมทาง หรือข้อมูลที่ละเอียดอ่อนใน preview
- Gear Widget แสดงเฉพาะชื่ออุปกรณ์ที่จำเป็นและไม่เปิดเผยข้อมูลส่วนตัว
- เว็บไซต์ต้องระบุว่า Widget เป็น product concept และ platform availability
  ยังไม่ยืนยัน
- ห้ามใช้หน้าตา iOS หรือ Android ที่สื่อว่าได้รับ approval จาก platform
- ห้ามอ้าง real-time sync, background refresh หรือ interactive controls
  จนกว่าจะผ่าน technical validation

#### Website information architecture

- ไม่มี route ใหม่
- ไม่มี topbar หรือ footer menu ใหม่
- เพิ่ม Widget spotlight ภายใน wrapper `#features` หลัง Offline capability
  และก่อน `#how-it-works`
- ใช้ชื่อบทแนะนำ:
  - EN: `Your trip at a glance`
  - TH: `เห็นทริปได้ทันที`
- อธิบายว่า Widgets เป็น companion surfaces ของ shared trip plan
- แสดง widget preview สองแบบเคียงกันบน desktop และเรียงแนวตั้งบน mobile
- เชื่อมเรื่องกลับไปยังแผนเดียวกัน ไม่ใช้ CTA แยกที่สื่อว่าดาวน์โหลด Widget ได้
- Roadmap ยังคงจำนวน Stage เดิม โดยอาจเพิ่มข้อความสั้นใน Stage ที่เกี่ยวข้อง
  แทนการสร้าง top-level feature หรือ Stage ใหม่

#### Content direction

โครงข้อความที่ต้องมีใน `messages/en.json` และ `messages/th.json`:

- Section eyebrow, title และ body
- คำอธิบายว่าเป็นส่วนขยายของ shared trip plan
- ชื่อและคำอธิบาย Countdown Companion Widget
- ชื่อและคำอธิบาย Gear Checklist Widget
- ตัวอย่างจำนวนวัน, `Today / วันนี้`, checklist progress และ empty state
- Concept disclaimer และ platform-validation note
- ARIA label สำหรับ widget preview และ mascot expression

ข้อความต้องหลีกเลี่ยงคำว่า “available now”, “works on iOS/Android”,
“real-time”, “always updated” หรือคำรับรองการทำงานที่ยังไม่ได้พิสูจน์

#### Visual and motion direction

- ใช้ temporary mascot logo ปัจจุบันเป็น reference เท่านั้น และแยก asset
  ออกจาก final logo เพื่อเปลี่ยนภายหลังได้
- Countdown preview ใช้ expression states ที่อ่านออกในขนาดเล็ก
- Gear preview ใช้ typography และ checklist language เดียวกับ feature cards
- ใช้กรอบ Widget ที่ platform-neutral ไม่คัดลอก proprietary system UI
- ใช้ palette `#778873`, `#A1BC98`, `#DCCFC0`, `#FDF6ED`
- Motion บนเว็บไซต์อาจแสดง progression อย่างสงบเมื่อ section reveal เท่านั้น
- ห้ามใช้ countdown ที่เดินจริงหรือ loop สีหน้ารวดเร็ว
- Reduced motion แสดง state แบบคงที่โดยไม่สูญเสียข้อมูล

#### Asset plan

- เตรียม mascot expression 5 state จากไฟล์ที่เจ้าของอนุมัติ
- ใช้ WebP หรือ AVIF พร้อม transparency
- เก็บ provisional widget assets ภายใต้ `public/brand/widget-mascot/`
- เป้าหมายไม่เกิน 60 KB ต่อ state และไม่เกิน 300 KB รวม
- ระบุทุก asset ว่า temporary จนกว่า final mascot/logo จะได้รับอนุมัติ
- ห้ามให้ AI แก้สีหน้าโลโก้หรือสร้าง variant เพิ่มก่อนเจ้าของอนุญาตใน
  implementation turn

#### File and code plan

- [x] อัปเดต `brand/product-definition.md` ด้วย planned companion surfaces
- [x] เพิ่ม `marketing.widgets.*` ใน `messages/en.json` และ `messages/th.json`
- [x] เพิ่ม typed widget preview content ใน `content/site-content.ts` หรือ
      `content/widgets.ts`
- [x] สร้าง `WidgetSpotlight` component และ CSS Module
- [x] วาง section ใหม่ภายใน `#features` โดยไม่เพิ่ม navigation destination
- [x] เพิ่ม provisional mascot states จาก temporary mascot reference
- [x] อัปเดต Roadmap copy เฉพาะจุดที่จำเป็น โดยไม่เพิ่ม top-level feature
- [x] เพิ่ม source, translation และ rendered-output regression tests
- [x] สร้าง `docs/phase-2.4/README.md` หลัง implementation

#### Internationalization

- ทุกข้อความที่ผู้ใช้เห็นต้องอยู่ใน file-based TH/EN catalogs
- ใช้ locale-aware date label และ day-count wording
- EN ต้องจัดการ `1 day` กับ `2 days`; TH ใช้รูปแบบที่เป็นธรรมชาติ
- `Today / วันนี้` และ empty state ต้องไม่ประกอบ string ใน component
- Translation keys, arrays และ placeholders ต้องตรงกัน 100%
- ตัวเลขตัวอย่างต้องถูกระบุว่าเป็น concept data ทั้งสองภาษา

#### Accessibility

- Widget preview ต้องมี accessible name และคำอธิบายที่ไม่พึ่งภาพมาสคอต
- สีหน้า สี และ animation ห้ามเป็นวิธีเดียวที่สื่อจำนวนวันที่เหลือ
- Checklist state ต้องมีข้อความพร้อม/ยังไม่พร้อม ไม่ใช้ checkmark อย่างเดียว
- Decorative mascot และ device chrome ต้องถูกซ่อนจาก screen reader
- Reading order ต้องเป็น Countdown ก่อน Gear Checklist ในทุก viewport
- รองรับ keyboard, visible focus, 200% zoom และ reduced motion
- ข้อความใน preview ต้องอ่านได้ที่ขนาด 320px โดยไม่ล้น

#### Testing and validation

- [x] ตรวจว่า Widget section อยู่ภายใน `#features`
- [x] ตรวจว่าไม่มี Widget link ใหม่ใน topbar หรือ footer
- [x] ตรวจว่า product definition ยังคงหนึ่ง core feature และสาม capabilities
- [x] ตรวจ Countdown state ครบ, ไม่มีค่าติดลบ และมี `Today / วันนี้`
- [x] บันทึก day-count locale และ timezone assumptions สำหรับ mobile phase
- [x] ตรวจ Gear preview มี progress และรายการที่ยังต้องเตรียม
- [x] ตรวจว่า preview ไม่มี control ที่ดูเหมือนบันทึกข้อมูลจริง
- [x] ตรวจ platform disclaimer และไม่มี availability claim
- [x] ตรวจ TH/EN key, array และ placeholder parity
- [x] ตรวจ image format, dimensions, transparency และ asset budget
- [x] ตรวจ semantic output, accessible labels และ reduced-motion fallback
- [ ] ตรวจ responsive layout ที่ 320, 390, 768, 1024, 1440 และ 1920px
- [x] รัน formatting, lint, strict TypeScript, source tests, production build,
      rendered-output tests, release audit และ local production smoke

#### Deliverables

- [x] Product-definition update สำหรับ planned companion surfaces
- [x] Bilingual Widget spotlight บนหน้า Home
- [x] Countdown Companion Widget preview พร้อม mascot progression
- [x] Gear Checklist Widget preview
- [x] Platform-neutral responsive presentation
- [x] Provisional mascot expression assets สำหรับ owner review
- [x] TH/EN messages และ accessibility copy
- [x] Regression tests และ `docs/phase-2.4/README.md`

#### Acceptance criteria

- [x] Copy ระบุว่า Widgets นำข้อมูลจาก shared trip plan มาแสดง
- [x] Countdown แสดงจำนวนวันและ mascot progression พร้อมข้อความกำกับ
- [x] Gear Widget แสดง progress และสิ่งที่ยังต้องเตรียมอย่างกระชับ
- [x] Widgets ไม่ถูกนำเสนอเป็น core feature หรือ top-level menu ใหม่
- [x] ไม่มี platform, sync, interaction หรือ availability claim ที่ยังไม่ยืนยัน
- [x] Temporary mascot เปลี่ยนเป็น final asset ภายหลังได้โดยไม่แก้โครง component
- [x] ทุกข้อความและ accessibility label รองรับ TH/EN
- [ ] Layout และข้อความผ่าน responsive, keyboard, zoom และ reduced-motion QA
- [x] Full release-quality suite ผ่าน
- [ ] Owner อนุมัติ public copy, mascot states และ widget presentation

#### Out of scope

- การสร้าง WidgetKit, Android App Widget หรือ native mobile code
- Background refresh, notification, live countdown service หรือ sync engine
- Interactive checklist, deep link หรือ app intent ที่ทำงานจริง
- การยืนยัน iOS/Android availability หรือ OS version support
- Calendar integration, lock-screen widget, Live Activity หรือ wearable
- Widget customization UI ภายในแอป
- Analytics, production deployment หรือ public launch

#### Remaining owner review

- อนุมัติชื่อ `Countdown Companion` และ `Gear Checklist`
- อนุมัติ mascot expression progression ทั้ง 5 state
- ยืนยันให้ใช้ temporary logo เป็นฐานสำหรับ mascot variants
- เลือกว่าจะแสดงชื่อทริปจริงหรือ generic label ใน public preview
- อนุมัติ concept disclaimer ภาษาไทยและอังกฤษ

#### Exit gate

ผู้ใช้อนุญาต implementation, commit และ push ในคำสั่งรอบนี้แล้ว งาน native
mobile widget, final mascot, owner visual review, manual browser/device QA และ
deployment ยังอยู่นอกคำสั่งและต้องได้รับการตรวจหรือคำสั่งแยกต่างหาก

## 10. Quality Gates

ใช้กับทุก Phase ที่มี code:

- Lint
- Typecheck
- Automated tests ตามความเสี่ยง
- Production build
- Visual inspection
- Responsive inspection
- Accessibility check
- Broken link check
- `git diff --check` หลังเริ่มใช้ Git

### Accessibility targets

- Semantic headings and landmarks
- Full keyboard access
- Visible focus states
- Sufficient color contrast
- Meaningful alt text
- Decorative images hidden from assistive technology
- Touch-friendly controls
- 200% zoom support
- Reduced-motion support

### Performance targets

ตัวเลขสุดท้ายจะล็อกใน Phase 0 แต่ทิศทางคือ:

- Fast initial content
- Stable layout
- Responsive interactions
- Optimized fonts and images
- Minimal client JavaScript
- No autoplay media that wastes bandwidth

## 11. Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| พยายามเหมือน Phantom แบบตรงตัวเกินไป | ขาด brand identity และเสี่ยงด้านทรัพย์สินทางปัญญา | ใช้เฉพาะ pattern/quality bar และสร้าง Accomp assets ใหม่ |
| Pine symbol ยังไม่อนุมัติและยังไม่มี app screenshots | Production implementation อาจต้องแก้ visual ภายหลัง | ใช้ symbol v1 และ illustrative UI ชั่วคราว พร้อมขอ approval ก่อน Phase 4 |
| CTA destination ยังไม่พร้อม | ผู้ใช้กดแล้วไปต่อไม่ได้ | ใช้ waitlist/get notified ที่มีระบบจริง หรือชะลอ CTA |
| Product claims ยังไม่ยืนยัน | สื่อสารเกินจริง | ทำ product truth checklist ใน Phase 0 |
| Motion มากเกินไป | หน้าเว็บช้าและใช้งานยาก | จำกัด motion budget และมี reduced-motion path |
| ภาพถ่ายไม่มีสิทธิ์ใช้งาน | เสี่ยงด้าน license | เก็บ source/license register |
| ขอบเขตไหลไปเป็นการทำแอป | เวลาและสโคปเพิ่มมาก | ยึด out-of-scope และใช้ static mockups เท่านั้น |

## 12. Inputs Needed from the Owner

ไม่จำเป็นต้องตอบทั้งหมดในตอนนี้ แต่ต้องตอบภายใน Phase ที่ระบุ:

### Before Phase 1

- เว็บไซต์ใช้ภาษา English, Thai หรือ bilingual
- แอปเปิดตัวแล้วหรือยัง
- CTA หลักคือ Download, Join waitlist หรือ Get notified
- ฟีเจอร์ใดพร้อมโปรโมตจริง
- มี logo/app icon แล้วหรือไม่

### Before Phase 3

- Approved logo and wordmark
- Approved app screenshots หรือสิทธิ์ให้ทำ static mockups
- Photography direction และ asset source
- App Store / Google Play badge status
- Verified social proof

Phase 3 ดำเนินต่อด้วย provisional assumptions เพราะผู้ใช้สั่งเริ่ม Phase 3 โดยตรง
และบันทึกสิ่งที่ยังขาดไว้ใน [asset export list](./docs/phase-3/asset-export-list.md)
โดยไม่สร้าง photography, store badge, social proof หรือ product screenshot ปลอม

### Before Phase 7

- Domain
- Legal entity/contact
- Privacy policy
- Terms
- Analytics provider
- Cookie/consent requirements
- Final store or waitlist URLs

## 13. Definition of Done

โปรเจกต์ถือว่าเสร็จเมื่อ:

- เป็นเว็บไซต์โปรโมตแอป Accomp ที่ responsive และเข้าถึงได้
- สื่อสารว่า Accomp มีฟีเจอร์หลักเดียวคือ Shared Trip Planning พร้อมความสามารถ
  ด้านการวางแผน เตรียมอุปกรณ์ และพร้อมใช้งานออฟไลน์
- มี Accomp visual identity ชัดเจน
- มี storytelling quality และ interaction polish ตามระดับ reference
- ไม่คัดลอก proprietary content หรือ visual identity ของ Phantom
- ทุก CTA ใช้งานจริง
- ทุกคำกล่าวอ้างตรวจสอบแล้ว
- Build และ QA ผ่าน
- เจ้าของโปรเจกต์อนุมัติ final

## 14. Current Project State

- [x] สร้างโฟลเดอร์ `/Users/peeraponchanthacham/Documents/GitHub/Accomp`
- [x] เก็บ brand identity ใน `brand/brand-identity.md`
- [x] ตรวจ reference Phantom บน desktop และ mobile
- [x] สร้าง phased implementation plan
- [x] ผู้ใช้อนุมัติให้เริ่ม Phase 1 เมื่อ 2026-07-26
- [ ] ปิด Phase 0 อย่างเป็นทางการ — ใช้ working assumptions ชั่วคราว
- [x] สร้าง Phase 1 deliverables
- [x] Carry Phase 1 forward ด้วย provisional assumptions เมื่อผู้ใช้สั่งเริ่ม Phase 2
- [x] เริ่ม Phase 2 เมื่อ 2026-07-26
- [x] สร้างและ browser-test Phase 2 deliverables
- [x] Carry Phase 2 forward ด้วย provisional assumptions เมื่อผู้ใช้สั่งเริ่ม Phase 3
- [x] เริ่ม Phase 3 เมื่อ 2026-07-27
- [x] สร้างและ browser-test Phase 3 deliverables
- [x] Carry Phase 3 forward ด้วย provisional assumptions เมื่อผู้ใช้สั่งเริ่ม Phase 4
- [x] เริ่ม Phase 4 เมื่อ 2026-07-28
- [x] สร้าง project scaffold, design tokens และ core primitives
- [x] ตรวจ formatting, lint, typecheck, tests, build และ local runtime
- [x] Carry Phase 4 forward ด้วย provisional assumptions เมื่อผู้ใช้สั่งเริ่ม Phase 5
- [x] เริ่ม Phase 5 เมื่อ 2026-07-28
- [x] สร้าง core marketing page และ typed content model
- [x] สร้าง mobile menu, feature rails และ native FAQ
- [x] ตรวจ formatting, lint, typecheck, tests, build และ local runtime สำหรับ Phase 5
- [x] Carry Phase 5 forward พร้อม typography และ offline map ที่ผู้ใช้ยืนยันจาก Phase 3
- [x] เริ่ม Phase 6 เมื่อ 2026-07-28
- [x] สร้าง hero motion, scroll reveal, route draw และ final CTA motion
- [x] สร้าง active-card progression และ keyboard carousel behavior
- [x] สร้าง sticky header theme/active-section transitions
- [x] สร้าง reduced-motion alternative และ interaction QA notes
- [x] ตรวจ formatting, lint, typecheck, tests, build และ local runtime สำหรับ Phase 6
- [x] Carry Phase 6 forward เมื่อผู้ใช้สั่งเริ่ม Phase 7
- [x] เริ่ม Phase 7 เมื่อ 2026-07-28
- [x] สร้าง search/social metadata, sitemap, robots และ structured data
- [x] สร้าง social preview ต้นฉบับของ Accomp
- [x] เชื่อม privacy/terms status pages และ branded 404
- [x] ยืนยัน no-analytics/no-cookie behavior
- [x] ตรวจ bundle, Lighthouse production audit และ performance target
- [x] ตรวจ formatting, lint, typecheck, tests, build และ local runtime สำหรับ Phase 7
- [x] Carry Phase 7 forward เมื่อผู้ใช้สั่งเริ่ม Phase 8
- [x] เริ่ม Phase 8 เมื่อ 2026-07-28
- [x] ตรวจ browser/responsive matrix ครบทุก target viewport
- [x] แก้ touch target, contrast และ skip-target focusability
- [x] เพิ่ม release audit, regression coverage และเอกสาร Phase 8
- [x] ตรวจ formatting, lint, typecheck, tests, build และ local runtime สำหรับ Phase 8
- [ ] Provide final domain, CTA, legal, product and analytics decisions
- [ ] Approve public deployment
- [x] เริ่ม Phase 9 เมื่อ 2026-07-28
- [x] เพิ่ม CI quality gate, production preflight และ environment contract
- [x] เพิ่ม health endpoint และ Worker security headers
- [x] เพิ่ม Phase 9 regression coverage และ deployment handoff documents
- [ ] Close Phase 9 owner-controlled production inputs
- [ ] Pass strict production preflight with the approved real origin
- [x] เริ่ม Phase 10 เมื่อ 2026-07-28
- [x] เพิ่ม production smoke route matrix และ managed local server
- [x] เพิ่ม clean-commit archive, SHA-256 manifest และ CI release gate
- [x] เพิ่ม Phase 10 regression coverage และ release handoff documents
- [ ] Run hosted-origin smoke on the approved production URL
- [x] วางแผน Phase 2.1 สำหรับ file-based TH/EN internationalization
- [x] เริ่ม Phase 2.1 หลังได้รับคำสั่งจากผู้ใช้
- [x] สร้าง `messages/en.json` และ `messages/th.json`
- [x] ย้าย user-visible copy ทั้งหมดเข้าสู่ translation catalogs
- [x] เพิ่ม locale routes, language switcher และ localized metadata
- [x] ตรวจ translation parity, accessibility semantics และ localized smoke
- [ ] Owner review ภาษาไทยและ manual responsive visual QA
- [x] วางแผน Phase 2.2 สำหรับ bilingual mobile app roadmap
- [x] เริ่ม Phase 2.2 หลังได้รับคำสั่งจากผู้ใช้
- [x] สร้าง `/en/roadmap` และ `/th/roadmap`
- [x] เพิ่ม Roadmap menu ใน desktop, mobile และ footer
- [x] ตรวจ public summaries, translation parity, accessibility และ localized SEO
- [x] ปรับ Roadmap จากประวัติเฟสของเว็บไซต์เป็นทิศทางคร่าว ๆ ของแอปมือถือ
- [x] วางแผน Phase 2.3 สำหรับเมนูสนับสนุนผู้พัฒนาและ supporter wall
- [x] เริ่ม Phase 2.3 หลังได้รับคำสั่งจากผู้ใช้
- [x] ใช้ inactive preparation state จนกว่าจะได้รับ approved support destination
- [ ] รับชื่อ รูป และ publication permission ของผู้สนับสนุน
- [x] สร้าง `/en/support` และ `/th/support`
- [x] เพิ่ม Support menu ใน desktop, mobile และ footer
- [x] ตรวจ safe supporter model, translation, accessibility และ SEO
- [x] ใช้ mascot pine image ที่เจ้าของโปรเจกต์ส่งให้เป็น temporary logo โดยยัง
  ไม่ถือเป็น final logo หรือ app icon
- [x] ล็อก product feature hierarchy เป็นหนึ่งฟีเจอร์หลัก `Shared Trip
  Planning` พร้อมสามความสามารถ: วางแผน เตรียมอุปกรณ์ และพร้อมใช้งานออฟไลน์
- [x] วางแผน Phase 2.4 สำหรับ Countdown Companion และ Gear Checklist Widgets
  ในฐานะ companion surfaces ของ shared trip plan
- [ ] เริ่ม Phase 2.4 หลังได้รับคำสั่งจากผู้ใช้
- [x] สร้าง source code foundation
- [x] สร้าง Git repository
- [x] Initial commit
- [x] Create remote repository
- [ ] Deploy

**งานถัดไป:** รับ approved support destination และชื่อ รูป ลำดับ พร้อม
publication permission ของผู้สนับสนุนจริงเพื่อแทน safe empty state ส่วน owner
review ภาษาไทยและ public copy, production input, manual browser/device/legal
gates, hosted smoke และ deployment ยังคงเป็นงานที่ต้องได้รับข้อมูลหรือคำสั่ง
แยกต่างหาก
