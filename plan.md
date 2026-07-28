# Accomp Marketing Website — Project Plan

> สถานะ: **Phase 9 production launch preparation complete — ยังไม่อนุมัติ deployment**
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
| Feature card carousel | Plan Together / Shared Gear / Trip Info / Offline Maps |
| Brand mascot inserted in copy | Original path/companion symbol หลังมีโลโก้ที่อนุมัติ |
| Light/dark chapters | Surface light สำหรับ planning และ Brand Dark สำหรับ offline reliability |
| Repeated download CTA | App Store / Google Play หรือ waitlist ตามสถานะจริง |
| Community proof | ใช้เฉพาะตัวเลข รีวิว หรือ partner ที่ตรวจสอบได้ |

### Non-copy rule

เป้าหมายคือความใกล้เคียงด้าน **คุณภาพ จังหวะ และ interaction model** ไม่ใช่การคัดลอกแบบ pixel-for-pixel ห้ามใช้ข้อความ asset โลโก้ illustration video source code หรือ visual signature ของ Phantom

## 4. Brand Source of Truth

Brand identity ถูกเก็บไว้ที่:

`brand/brand-identity.md`

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

ลำดับด้านล่างเป็น proposed information architecture ต้องอนุมัติใน Phase 0:

### 5.1 Header

- Accomp logo/wordmark
- Features
- How it works
- Offline
- FAQ
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

### 5.4 Chapter 1 — Plan Together

- Create a trip
- Invite friends
- Build a shared itinerary
- Feature cards 3–4 ใบ

### 5.5 Chapter 2 — Pack Together

- Shared gear checklist
- Assign responsibility
- See what is packed and what is missing
- ใช้ layered checklist cards และ calm micro-interactions

### 5.6 Chapter 3 — Ready Anywhere

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
- สื่อสารว่า Accomp ช่วย plan, invite, pack, organize และ explore offline
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
- [x] สร้าง source code foundation
- [x] สร้าง Git repository
- [x] Initial commit
- [x] Create remote repository
- [ ] Deploy

**งานถัดไปหลังจากผู้ใช้ตรวจเอกสาร:** กรอก
[production input worksheet](./docs/phase-9/production-inputs.md), ปิด manual
browser/device/legal gates และรอคำสั่ง deployment แยกต่างหาก
