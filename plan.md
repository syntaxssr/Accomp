# Accomp Marketing Website — Project Plan

> สถานะ: **Planning only — รออนุมัติก่อนเริ่ม Phase 0**  
> สร้างเมื่อ: 2026-07-26  
> Project path: `/Users/peeraponchanthacham/Documents/GitHub/Accomp`  
> Reference: [Phantom](https://phantom.com/?utm_source=loftlyy&utm_medium=referral&utm_campaign=phantom)

## กติกาการทำงาน

1. เอกสารนี้ต้องได้รับการตรวจและอนุมัติก่อนเริ่มพัฒนา
2. ทำงานทีละ Phase เท่านั้น
3. ก่อนเริ่ม Phase ถัดไป ต้องสรุปผล ตรวจ acceptance criteria และรอคำอนุมัติ
4. ห้ามนำงานจาก Phase ถัดไปมาทำล่วงหน้าโดยไม่ได้รับอนุญาต
5. ยังไม่สร้าง Git repository, commit, remote repository หรือ deploy จนกว่าจะได้รับคำสั่ง
6. สโคปของโปรเจกต์คือ **เว็บไซต์สำหรับโปรโมตแอปมือถือ Accomp เท่านั้น** ไม่รวมการสร้าง iOS app, Android app, backend ของแอป หรือ dashboard ภายใน

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
- Accomp Green ใช้เป็น focus color
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

- Copy deck v1
- Visual direction board
- Design token proposal
- Asset brief
- Motion concept

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

- Desktop wireframe
- Mobile wireframe
- Interaction notes
- Responsive behavior matrix
- Revised copy hierarchy

#### Acceptance criteria

- ผู้ชมเข้าใจแอปและเห็น CTA โดยไม่ต้องอ่านทุก section
- Mobile flow ไม่ใช่เพียง desktop ที่ถูกบีบให้แคบ
- Carousel ใช้งานได้ด้วย touch, keyboard และ controls
- Page order รองรับการปิด animation

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

- High-fidelity page design
- Responsive key screens
- Component state sheet
- Asset export list
- Motion specification

#### Acceptance criteria

- ใช้ brand tokens อย่างสม่ำเสมอ
- มี Accomp identity ที่จดจำได้
- Visual, content และ interaction ได้รับอนุมัติ
- Asset ทุกชิ้นมี source และ usage rights ชัดเจน
- Design พร้อมให้ implement โดยไม่ต้องเดารายละเอียดสำคัญ

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

- Runnable local project
- Design token layer
- Core primitives
- Quality scripts
- Project conventions

#### Acceptance criteria

- Local development ทำงานได้
- lint และ typecheck ผ่าน
- ไม่มี backend หรือ dependency ที่เกินสโคป
- Core tokens ตรงกับ brand identity
- ยังไม่มี feature section ที่นำ Phase 5 มาทำล่วงหน้า

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

- Complete static homepage
- Functional navigation
- Working CTA destinations
- Responsive content

#### Acceptance criteria

- เนื้อหาครบตาม copy ที่อนุมัติ
- ไม่มี dead link หรือ CTA ปลอม
- ใช้งานได้ตั้งแต่ 320px ขึ้นไป
- Keyboard navigation ใช้งานได้
- Layout ไม่พึ่ง motion เพื่อให้เข้าใจเนื้อหา
- lint, typecheck และ tests ผ่าน

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

- Motion-complete homepage
- Reduced-motion version
- Interaction QA notes

#### Acceptance criteria

- Motion ช่วยลำดับสายตาและการเล่าเรื่อง
- ไม่มี layout shift จาก animation
- ไม่มี animation ที่ยาวหรือบังคับให้ผู้ใช้รอ
- Reduced-motion mode มีข้อมูลครบ
- Scroll และ interaction ลื่นบนอุปกรณ์ระดับกลาง

#### Exit gate

หยุดและรอคำสั่ง: **เริ่ม Phase 7**

### Phase 7 — SEO, Analytics, Legal and Performance

#### Objective

ทำให้หน้าเว็บพร้อมสำหรับการค้นหา การแชร์ การวัดผล และการใช้งานจริง

#### Work

- Title, description และ canonical metadata
- Open Graph และ social image
- App/software structured data เมื่อข้อมูลพร้อม
- Sitemap และ robots rules
- Image and font optimization
- Bundle review
- Analytics ตาม consent ที่อนุมัติ
- Privacy, terms และ cookie behavior
- Error/404 handling ตามสโคป
- Performance profiling

#### Deliverables

- Search and social metadata
- Optimized assets
- Legal link integration
- Analytics integration หรือเอกสารยืนยันว่าไม่ใช้
- Performance report

#### Acceptance criteria

- ไม่มี metadata placeholder ที่หลุดสู่ production
- Social preview ใช้งานได้
- ไม่มี analytics ก่อน consent ถ้านโยบายกำหนด
- หน้าเว็บมีเป้าหมาย Lighthouse ที่เหมาะสมและไม่มี critical issue
- Core experience ทำงานได้แม้ JavaScript สำหรับ motion โหลดไม่สำเร็จ

#### Exit gate

หยุดและรอคำสั่ง: **เริ่ม Phase 8**

### Phase 8 — Cross-Device QA and Release Readiness

#### Objective

ตรวจทั้งระบบและเตรียม package สำหรับการสร้าง repo/deploy ในขั้นถัดไป

#### Work

- Browser matrix QA
- Responsive QA
- Keyboard and screen-reader smoke test
- Contrast and zoom test
- Touch target test
- Slow network test
- Broken link and form checks
- Console and runtime error checks
- Content proofreading
- Asset license audit
- Production build verification
- Final diff and project hygiene review

### Target viewports

- 320px
- 390px
- 768px
- 1024px
- 1440px
- 1920px

#### Deliverables

- QA report
- Known limitations
- Release checklist
- Production-ready local project

#### Acceptance criteria

- ไม่มี critical visual, accessibility หรือ runtime defects
- Production build สำเร็จด้วย output ที่ยืนยันได้
- CTA ทุกจุดไปยังปลายทางจริง
- Legal และ product claims ได้รับการอนุมัติ
- เจ้าของโปรเจกต์อนุมัติว่าพร้อมสร้าง repo/commit/deploy

#### Exit gate

หยุดและรอคำสั่งแยกต่างหากสำหรับ Git repository, commit, remote และ deployment

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
| ยังไม่มี logo/app screenshots | Final design ทำไม่ได้อย่างแม่นยำ | ทำ asset brief ใน Phase 1 และอนุมัติก่อน Phase 3 |
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
- [ ] อนุมัติ plan
- [ ] เริ่ม Phase 0
- [ ] สร้าง source code
- [ ] สร้าง Git repository
- [ ] Commit
- [ ] Create remote repository
- [ ] Deploy

**งานถัดไปหลังจากผู้ใช้ตรวจเอกสาร:** ปรับ `plan.md` ตาม feedback หรือรับคำสั่งเริ่ม Phase 0 เท่านั้น
