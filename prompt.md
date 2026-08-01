# Reusable Prompt Playbook — Accomp Marketing Website

> Status: Living source for recreating the Accomp-style marketing experience  
> Last consolidated: 2026-07-30  
> Scope: Website prompts, design decisions, product story, implementation rules,
> QA, and source-control workflow

## 1. Purpose and Maintenance Rule

เอกสารนี้รวมคำสั่งและการตัดสินใจที่เกิดขึ้นระหว่างการสร้างเว็บไซต์ Accomp
โดยรวมเรื่องที่ซ้ำกันเข้าด้วยกัน และเก็บเฉพาะคำตัดสินล่าสุดแทนการคัดลอกบทสนทนา
ทุกข้อความแบบ verbatim

ใช้เอกสารนี้ได้สองแบบ:

1. คัดลอก **Master Prompt** เพื่อสร้างเว็บไซต์ใหม่ที่มีคุณภาพและพฤติกรรมใกล้เคียง
   Accomp แล้วแทนค่าที่อยู่ในวงเล็บเหลี่ยม
2. คัดลอก Prompt เฉพาะหมวดเพื่อแก้หรือเพิ่มความสามารถให้โปรเจกต์ที่มีอยู่

กติกาการดูแลเอกสาร:

- ก่อน Commit และ Push ทุกครั้ง ต้องตรวจงานที่เปลี่ยนตั้งแต่ Commit ล่าสุด
- ถ้าเป็นเรื่องที่มีหมวดอยู่แล้ว ให้อัปเดต Summary และ Prompt ของหมวดเดิม
- ถ้าเป็นเรื่องใหม่ ให้เพิ่มหมวดใหม่ต่อท้ายก่อน `Maintenance Log`
- รวมคำสั่งที่ซ้ำกันและลบข้อกำหนดเก่าที่ถูกตัดสินใจแทนแล้ว
- เก็บ `prompt.md` ไว้ใน Commit เดียวกับงานที่ Prompt นั้นอธิบาย
- ห้าม Commit หรือ Push โดยอัตโนมัติ ต้องรอคำสั่งจากเจ้าของโปรเจกต์เสมอ

## 2. Master Prompt

คัดลอก Prompt นี้ไปใช้สร้างโปรเจกต์ใหม่ได้ทันที:

```text
สร้างเว็บไซต์โปรโมตแอปมือถือชื่อ [BRAND_NAME] สำหรับ [PRODUCT_CATEGORY]
โดยเว็บไซต์มีหน้าที่เล่าเรื่องและโปรโมตแอปเท่านั้น ไม่ต้องสร้างตัวแอปมือถือ
หรือระบบหลังบ้านที่ยังไม่ได้รับอนุมัติ

ใช้เว็บไซต์ reference เช่น Phantom เพื่ออ้างอิงเฉพาะระดับคุณภาพ สัดส่วน
จังหวะการเล่าเรื่อง Topbar, Hero, การ์ด และ Motion ห้ามคัดลอกข้อความ รูปภาพ
โลโก้ ไอคอน source code หรือ visual signature แบบ pixel-for-pixel
งานทั้งหมดต้องใช้อัตลักษณ์และ asset ต้นฉบับของ [BRAND_NAME]

Product story:
- มี Core feature เพียงหนึ่งเดียวคือ [CORE_FEATURE]
- Core feature ประกอบด้วย 3 capabilities:
  1. [CAPABILITY_1]
  2. [CAPABILITY_2]
  3. [CAPABILITY_3]
- Capability ทั้งหมดต้องถูกเล่าเป็นส่วนหนึ่งของ Core feature เดียวกัน
- Widget หรือหน้าจอเสริมเป็น companion surfaces ไม่ใช่ feature ใหม่
- ห้ามกล่าวอ้าง platform, ราคา, launch date, collaboration permissions,
  offline behavior, safety หรือข้อมูลผู้ใช้ที่ยังไม่ได้ยืนยัน

Visual direction:
- ใช้สีหลัก [PRIMARY], [SECONDARY], [SAND], [CREAM] และ [DARK]
- ให้ความรู้สึกเป็นมิตร สงบ ทันสมัย เชื่อถือได้ และมีพื้นที่ว่างมาก
- ใช้มุมโค้ง เงาอ่อน เส้นทาง/เส้นชั้นความสูง และ layered cards
- Hero เป็น artwork ขนาดใหญ่ตรงกลาง โดยวางข้อความและ CTA กลางภาพ
- Desktop content width สูงสุดประมาณ 91.5rem
- Feature cards ใช้สัดส่วน 3:4 และแสดง 3 ใบบน Desktop
- ก่อนเลื่อนถึงการ์ด ให้การ์ดซ้อนตรงกลาง จากนั้นแยกออกตาม Scroll
- Hover ต้องขยับเฉพาะตัวการ์ดเล็กน้อย ไม่ขยับ element ภายในการ์ด

Navigation:
- Header ใช้โลโก้ SVG พร้อมชื่อแบรนด์เป็นข้อความ
- รวม Features และ How it works ไว้ใน Product dropdown
- Roadmap และ Support เป็น direct links
- FAQ อยู่ใน Footer เท่านั้น
- มี Language switcher และ Primary CTA
- ขนาดเมนูและปุ่มต้องคงที่เมื่อเปลี่ยนภาษา

Internationalization:
- รองรับภาษาไทยและอังกฤษแบบ file-based
- เก็บข้อความทั้งหมดใน messages/th.json และ messages/en.json
- ใช้เส้นทาง /th และ /en
- เปลี่ยนภาษาแบบ client-side โดยไม่ reload หน้า
- Key และ placeholder ของทั้งสองภาษาต้องตรงกัน
- Metadata, navigation, FAQ, legal, roadmap, support และ 404 ต้องแปลครบ

Typography:
- ภาษาอังกฤษใช้ [EN_BODY_FONT] กับ body และ UI
- ภาษาไทยใช้ [TH_BODY_FONT] กับ body และ UI
- ใช้ [ACCENT_FONT] เฉพาะชื่อแบรนด์ Hero headline, Section heading
  และ Card title
- Self-host ฟอนต์ที่ได้รับอนุญาต
- หัวข้อภาษาไทยหลายบรรทัดต้องมี line-height อย่างน้อย 1.3
- รองรับ ligatures ภาษาไทยและมี fallback font

Pages and sections:
- Home: Header, Hero, Core feature cards, 3 capability chapters,
  widget spotlight, How it works, editorial story, FAQ, final CTA และ Footer
- Roadmap ต้องเป็น Roadmap ของแอปมือถือ ไม่ใช่ประวัติการทำเว็บไซต์
- Support ต้องกระชับ มีสถานะช่องทางสนับสนุนที่ตรงกับความจริง
  และแสดงชื่อ/รูปผู้สนับสนุนเฉพาะผู้ที่อนุญาต
- Privacy, Terms และ 404 ต้องตรงกับสถานะ pre-launch
- Waitlist ต้องปิดการส่งข้อมูลจนกว่าจะมี backend, policy และ consent ที่อนุมัติ

Quality:
- Responsive ตั้งแต่มือถือถึง Desktop
- Keyboard accessible, semantic HTML, visible focus และ touch target >= 44px
- รองรับ prefers-reduced-motion
- รักษา contrast และความอ่านง่าย
- หลีกเลี่ยง animation library ถ้า CSS และ requestAnimationFrame เพียงพอ
- ตรวจ format, lint, typecheck, tests, production build และ rendered HTML
- ก่อน Commit/Push ให้อัปเดต prompt.md ให้สะท้อนการตัดสินใจล่าสุดก่อนเสมอ
```

## 3. Project Scope and Product Truth

### Summary

- Accomp เป็นเว็บไซต์โปรโมตแนวคิดแอปมือถือสำหรับวางแผนทริปกลางแจ้งร่วมกัน
- เว็บไซต์ไม่ใช่ตัวแอป และไม่สร้าง feature native ที่ยังไม่ได้ยืนยัน
- Core feature หนึ่งเดียวคือ **Shared Trip Planning / วางแผนทริปร่วมกัน**
- Capabilities:
  1. **Plan the trip / วางแผน**
  2. **Prepare the gear / เตรียมอุปกรณ์**
  3. **Offline maps & trip data / แผนที่และข้อมูลออฟไลน์**
- Countdown และ Gear Checklist widgets เป็น companion surfaces
- ห้ามเพิ่ม Chat, live GPS, SOS, social feed, payment หรือ safety guarantee
  เป็น feature ที่ยืนยันแล้วโดยไม่มีคำตัดสินใหม่

### Reusable Prompt

```text
กำหนด Product hierarchy ให้มี Core feature เพียงหนึ่งเดียว และเล่า capability
ย่อยทั้งหมดภายใน feature นั้น ห้ามทำให้ capability ดูเป็นผลิตภัณฑ์คนละตัว
Widget ให้จัดเป็น companion surface ที่นำข้อมูลเดิมมาแสดง ไม่ใช่ feature ลำดับใหม่
แยกข้อมูลที่ยืนยันแล้วออกจาก concept และเขียนข้อจำกัดที่ยังต้อง validate ให้ชัดเจน
```

## 4. Brand Identity and Visual System

### Summary

- Personality: Friendly, collaborative, calm, modern, reliable, adventurous
- Brand idea: เพื่อนร่วมทางที่ช่วยให้ทุกคนเตรียมทริปร่วมกัน
- สี:
  - Trail Sage `#778873`
  - Meadow Sage `#A1BC98`
  - Trail Sand `#DCCFC0`
  - Warm Cream `#FDF6ED`
  - Brand Dark `#1F1F1F`
  - Background Dark `#171717`
- Visual motifs: shared paths, topographic lines, layered cards, shared
  checklists, offline map tiles และ phone mockups
- ใช้พื้นที่ว่างมาก มุมโค้ง เงาอ่อน border น้อย และ gradient เท่าที่จำเป็น
- อ้างอิง Phantom เฉพาะโครงสร้าง สัดส่วน และ interaction quality
- ห้ามใช้สีม่วง โลโก้ asset ข้อความ หรือ visual signature ของ Phantom

### Reusable Prompt

```text
สร้าง Brand system ที่ให้ความรู้สึกสงบ เป็นมิตร และเชื่อถือได้ ใช้ Warm Cream
เป็น canvas, สีหลักเป็นจุดโฟกัส, สีรองสร้างชั้นของ surface และ Dark section
สร้างจังหวะของหน้า ใช้ rounded geometry, soft shadow, minimal border
และ visual motif ที่เชื่อมกับผลิตภัณฑ์ ห้ามยืม proprietary asset จาก reference
```

## 5. Technical Foundation

### Summary

- Next.js 16 + React 19 + TypeScript
- Vinext/Vite และ Cloudflare-compatible Worker output
- CSS Modules และ design tokens ใน `app/globals.css`
- ข้อความแบบ typed file-based catalogs
- Static-first; ไม่มี database, authentication, analytics หรือ payment
- ไม่ใช้ Framer Motion/GSAP เมื่อ CSS และ `requestAnimationFrame` ทำงานได้
- Component หลัก: layout primitives, UI primitives, header, feature rails,
  FAQ, widgets, roadmap, support และ legal pages

### Reusable Prompt

```text
ใช้ Next.js + React + TypeScript แบบ static-first แยก server/client boundary
ให้ชัด ใช้ CSS Modules และ global design tokens สร้าง component ที่นำกลับมาใช้ได้
เก็บ content แยกจาก presentation และหลีกเลี่ยง dependency ที่ไม่จำเป็น
ผลลัพธ์ต้อง build เป็น Cloudflare-compatible ESM และไม่มี persistence binding
จนกว่าจะได้รับอนุมัติ
```

## 6. Information Architecture

### Summary

- Home: Hero → Core feature overview → Plan → Gear → Offline → Widgets →
  How it works → Story → FAQ → Waitlist → Footer
- Routes:
  - `/en`, `/th`
  - `/[locale]/roadmap`
  - `/[locale]/support`
  - `/[locale]/privacy`
  - `/[locale]/terms`
  - localized 404, sitemap, robots และ health endpoint
- Features ใช้ anchor `#features`
- How it works ใช้ `#how-it-works`
- FAQ ใช้ `#faq`
- Waitlist ใช้ `#waitlist`

### Reusable Prompt

```text
วางหน้า Landing page เป็นบทเล่าเรื่องต่อเนื่องจาก promise ไปสู่รายละเอียด
feature, วิธีใช้งาน, ความน่าเชื่อถือ และ CTA ส่วน Roadmap, Support และ Legal
ให้แยก route เพื่อแชร์ลิงก์และทำ localized metadata ได้ โดยทุก anchor ต้องมี
semantic section และ scroll destination ที่ถูกต้อง
```

## 7. Header and Navigation

### Summary

- Topbar กว้าง โปร่ง และมีสัดส่วนใกล้ reference
- เอาแถบดำบนสุดออก
- โลโก้เป็น SVG และชื่อ `Accomp` เป็นข้อความข้างโลโก้
- Logo mark และข้อความจัดกึ่งกลางแนวตั้ง พร้อม optical offset เล็กน้อย
- Desktop menu:
  - Product dropdown: Features + How it works
  - Roadmap: direct link
  - Support: direct link
  - FAQ: Footer เท่านั้น
- Language switcher เป็นปุ่มวงกลมรูปธง เปิดเมนูเลือก TH/EN เมื่อกด
- Language switcher ไม่ทำงานเมื่อ Hover
- Waitlist CTA อยู่ด้านขวา
- ขนาด nav items, language control และ CTA ต้องไม่ยืด/หดเมื่อสลับภาษา
- Dropdown เปิดด้วย Hover อย่างนุ่มนวล ส่วน direct links ไม่เปิด panel

### Reusable Prompt

```text
สร้าง responsive sticky header ที่มี logo SVG + brand text, grouped Product menu,
direct Roadmap/Support links, flag language menu และ primary CTA ล็อกความกว้าง
ของ control ตามข้อความภาษาที่ยาวกว่า ใช้ dropdown เฉพาะเมนูที่มีลูก และเก็บ FAQ
ไว้ Footer เท่านั้น รองรับ keyboard, Escape, focus management และ mobile menu
```

## 8. Hero

### Summary

- Hero artwork อยู่กลางหน้าและข้อความวางกึ่งกลางทับบนภาพ
- Container สูงสุด `91.5rem`
- Desktop stage สูงประมาณ `42–50rem`
- Border radius `1.5rem`
- ระยะห่างจาก Topbar และสัดส่วนอ้างอิง reference
- ลดช่องว่างรวมระหว่าง Hero กับ Core feature overview ลงครึ่งหนึ่งจากค่าเดิม
- มี CTA เดียวคือ Join the waitlist; เอาปุ่ม Explore ออก
- Hero TH/EN ใช้ความสูงและตำแหน่งข้อความเดียวกัน
- Current copy:

| Element | English | Thai |
| --- | --- | --- |
| Eyebrow | Your companion for every adventure | เพื่อนร่วมทางของทุกการผจญภัย |
| Headline | Better together. | ไปด้วยกัน สนุกกว่า |
| Body | Plan every outdoor trip together in one place—from routes, itineraries, and shared gear to maps and essential information you can access anytime, even without a signal. | วางแผนทุกทริปกลางแจ้งร่วมกันในที่เดียว ตั้งแต่เส้นทาง กำหนดการ และการแบ่งอุปกรณ์ ไปจนถึงแผนที่และข้อมูลสำคัญที่เปิดดูได้ทุกเวลา แม้ไม่มีสัญญาณ |

### Reusable Prompt

```text
สร้าง Hero แบบ full artwork stage ภายใน container 91.5rem วาง eyebrow, headline,
body และ CTA กึ่งกลางภาพ ให้ตำแหน่ง TH/EN ตรงกัน ใช้ overlay เพื่ออ่านง่าย
มี CTA หลักเพียงปุ่มเดียว ภาพและ UI ภายในต้องระบุว่าเป็น illustrative concept
เมื่อยังไม่ใช่ product screenshot จริง
```

## 9. Core Feature Card Stack

### Summary

- Marketing heading:
  `Get every trip ready together. / เตรียมทุกทริปไปด้วยกัน`
- ชื่อ Product feature ภายในยังคงเป็น
  `Shared Trip Planning / วางแผนทริปร่วมกัน`
- หัวข้อภาษาไทยต้องอยู่บรรทัดเดียวและลดขนาดอย่างยืดหยุ่นบนหน้าจอเล็ก
- Card labels ล่าสุด:
  - Plan the trip / วางแผน
  - Prepare the gear / เตรียมอุปกรณ์
  - Offline maps & trip data / แผนที่และข้อมูลออฟไลน์
- การ์ด 3 ใบ สัดส่วน `3:4`
- ที่ viewport 1920px: container 1464px, card ประมาณ 472 × 629px
- ก่อน Scroll ถึง section การ์ดซ้อนกลางและเหลื่อมกัน 18px
- Progress เริ่มเมื่อ card top ถึง `82vh` และกางครบที่ `28vh`
- ใช้ `requestAnimationFrame`
- Desktop จึงใช้ scroll stack; Mobile และ reduced motion แสดงกางครบ
- Hover ขยับเฉพาะการ์ดขึ้น `0.4rem`; element ภายในไม่ขยับ
- หัวข้อภาษาไทยอยู่บรรทัดเดียวด้วย responsive size และไม่ล้น container

### Reusable Prompt

```text
สร้างการ์ดสรุป 3 ใบสัดส่วน 3:4 ให้กว้างเท่า Hero บน Desktop
ใช้หัวข้อการตลาดว่า "Get every trip ready together. /
เตรียมทุกทริปไปด้วยกัน" โดยให้ภาษาไทยอยู่บรรทัดเดียวและไม่ล้นจอ
เริ่มจากซ้อนกลางพร้อม offset 18px แล้วค่อยกางตาม scroll progress จาก 82vh
ถึง 28vh ใช้ requestAnimationFrame และ CSS custom properties Hover ให้ยกเฉพาะ
ตัวการ์ด 0.4rem ห้ามทำ parallax กับ element ภายใน Mobile และ reduced-motion
ต้องแสดงการ์ดครบโดยไม่บังคับ animation
```

## 10. Capability 1 — Plan

### Summary

- Eyebrow:
  - EN: `01 · Plan`
  - TH: `01 · วางแผน`
- Heading:
  - EN: `Everyone. Every plan. All in one place.`
  - TH บังคับสองบรรทัด: `ทุกคน ทุกแผน` / `ในที่เดียว`
- TH body บังคับสามบรรทัด:
  1. `สร้างทริป ชวนเพื่อน และรวมกำหนดการ เส้นทาง จุดนัดพบ`
  2. `พร้อมรายละเอียดสำคัญทั้งหมดไว้ในพื้นที่เดียว`
  3. `เพื่อให้ทุกคนเห็นแผนเดียวกัน ตั้งแต่เริ่มวางแผนจนจบทริป`
- EN body สื่อความหมายเดียวกันตั้งแต่เริ่มวางแผนจนทริปเสร็จสมบูรณ์
- Cards:
  1. Start the trip / เริ่มทริป
  2. Invite friends / ชวนเพื่อน
  3. Plan each day / วางแผนรายวัน
- การ์ด Plan ใช้ขนาดและรูปแบบ scroll stack เดียวกับ Core feature cards
- เริ่มคลี่เร็วขึ้นที่ `96vh` และคลี่ครบที่ `42vh` โดยรักษาช่วง progress
  `54vh` เท่าเดิม เพื่อให้การ์ดครบสามใบขณะที่ยังเห็นหัวข้อ Section
- หลัง Scroll กางเป็น 3 ใบเต็มความกว้าง Hero
- ลดช่องว่างระหว่าง Core feature cards กับ Plan heading ลงครึ่งหนึ่ง
- TH heading ใช้ `line-height: 1.45` และรักษาจุดตัดบรรทัดที่กำหนด

### Reusable Prompt

```text
เล่า Capability การวางแผนด้วย eyebrow "01 · Plan / 01 · วางแผน" และหัวข้อ
"Everyone. Every plan. All in one place. / ทุกคน ทุกแผน / ในที่เดียว"
อธิบาย flow ตั้งแต่เริ่มวางแผนจนจบทริปด้วยข้อความที่กำหนดจุดตัดบรรทัดไทย
ใช้การ์ด 3 ใบสัดส่วน 3:4 เริ่มคลี่ที่ 96vh และครบที่ 42vh เพื่อให้ผู้ใช้ยังเห็น
หัวข้อ Section เมื่อการ์ดแสดงครบ โดยไม่เปลี่ยนช่วงระยะ Scroll 54vh
```

## 11. Capability 2 — Prepare Gear

### Summary

- รวม personal และ shared gear checklist ไว้ใน trip plan เดียว
- Cards:
  1. Share the checklist / แชร์รายการอุปกรณ์
  2. Split the load / แบ่งสัมภาระกัน
  3. See what is ready / ดูว่าพร้อมแค่ไหน
- แสดง owner, checked state และ readiness เป็น illustrative UI
- ไม่ทำให้ Gear กลายเป็น top-level product แยก

### Reusable Prompt

```text
สร้าง capability chapter สำหรับรายการอุปกรณ์ร่วม แสดงการแชร์ checklist,
การมอบหมาย owner และ readiness state ด้วย UI ตัวอย่างที่อ่านง่าย
ย้ำว่าอุปกรณ์อยู่ใน shared trip plan เดียว ไม่ใช่ feature แยก
```

## 12. Capability 3 — Offline Maps and Trip Data

### Summary

- ชื่อ approved: `Offline maps & trip data / แผนที่และข้อมูลออฟไลน์`
- เน้นแผนที่เป็นจุดขาย แต่ไม่ลดความสำคัญของ itinerary, meeting point,
  route และ essential trip data
- แสดง offline/sync status อย่างตรงไปตรงมา
- ระบุว่า map provider, download area, retention, conflict และ sync behavior
  ยังต้อง validate
- Offline map อยู่ใน Features ไม่ใช่ Topbar destination แยก

### Reusable Prompt

```text
นำเสนอ Offline maps เป็น product differentiator พร้อมอธิบายว่า itinerary,
route, meeting point และข้อมูลสำคัญสามารถเตรียมไว้ในเครื่องได้ ใช้คำว่า
"Offline maps & trip data / แผนที่และข้อมูลออฟไลน์" และระบุ behavior
ที่ยังไม่ยืนยันอย่างโปร่งใส ห้ามสร้าง safety guarantee
```

## 13. Home Screen Widgets

### Summary

- Widget เป็น companion surfaces ของ Shared Trip Planning
- Widget 1: Countdown Companion
  - แสดงจำนวนวันก่อนทริป
  - Mascot มีความสุข/ตื่นเต้นขึ้นเมื่อวันเดินทางใกล้เข้ามา
  - ปัจจุบันใช้ภาพมาสคอต provisional เดียวกันในทั้งห้าสถานะก่อน และยังต้อง
    สร้าง expression variants ให้ตรงกับแต่ละช่วงนับถอยหลังในรอบถัดไป
- Widget 2: Gear Checklist
  - แสดงความพร้อมและรายการที่ยังต้องเตรียม
- เป็น static concept preview บนเว็บ
- ห้ามกล่าวอ้าง platform availability, refresh schedule หรือ native interaction

### Reusable Prompt

```text
เพิ่ม Widget spotlight สองแบบ: countdown ที่เปลี่ยนอารมณ์ mascot ตามจำนวนวัน
และ compact gear checklist ที่แสดง progress ทั้งสองต้อง reuse ข้อมูลจาก trip plan
เดิม จัดเป็น concept preview และระบุข้อจำกัดของ platform/refresh/interaction
ที่ยังไม่ยืนยัน
```

## 14. Internationalization and Language Switching

### Summary

- Catalogs: `messages/en.json`, `messages/th.json`
- ทุกข้อความที่ผู้ใช้เห็นต้องมาจาก catalogs
- Locale routes: `/en` และ `/th`
- Switching ต้องเปลี่ยนภาษา client-side โดยไม่ reload
- Sync ค่า `lang`, route, metadata และข้อความหลังเปลี่ยนภาษา
- Flag assets เป็น SVG ของเจ้าของโปรเจกต์
- Control แสดงธงปัจจุบันและเปิดรายการธงเมื่อกด
- ปุ่มและเมนูล็อกขนาดเพื่อไม่ให้ layout shift ระหว่าง TH/EN

### Reusable Prompt

```text
ติดตั้ง file-based i18n สำหรับ TH/EN ย้าย user-visible copy ทั้งหมดเข้า message
catalogs ที่มี key parity ใช้ locale-prefixed routes และ language switcher
แบบ client-side ที่ไม่ reload อัปเดต document lang และ metadata ให้ถูกต้อง
พร้อมล็อกขนาด control เพื่อไม่เกิด layout shift
```

## 15. Typography

### Summary

- English body/UI: Nunito Variable 400, 500, 700, 800
- Thai body/UI: LINE Seed Sans TH 400, 700, 800
- Accent: `AccompThaiAccent-v5.ttf` ซึ่งพัฒนาจาก PG Miss Half
- Accent ใช้เฉพาะ:
  - ชื่อ `Accomp`
  - Hero headline
  - Section headings
  - Card titles
- Hero eyebrow/tagline ใช้ body font ไม่ใช้ accent font
- Tracking ของ accent: `0.02em`
- Thai ligatures เปิดใช้งาน
- Thai accent headings ที่หลายบรรทัดใช้ `line-height: 1.3`
- Plan heading ใช้ `line-height: 1.45` และ `white-space: pre-line`
- Core feature marketing heading ภาษาไทยใช้ `white-space: nowrap` พร้อม
  responsive font size เพื่ออยู่บรรทัดเดียวโดยไม่ล้นจอ
- Logo text มี optical alignment และ letter spacing เพิ่มเล็กน้อย

### Reusable Prompt

```text
กำหนด typography แยก body font ตามภาษาและใช้ accent font เฉพาะ headline,
section title, card title และ brand wordmark Self-host ทุกฟอนต์ เปิด Thai ligatures,
ใช้ tracking 0.02em และกำหนด Thai multiline accent heading line-height 1.3
เพื่อไม่ให้วรรณยุกต์ชนบรรทัดก่อนหน้า
```

## 16. Motion and Interaction

### Summary

- Motion ต้อง calm, purposeful, lightweight
- Scroll reveal เป็น progressive enhancement; server content ห้ามถูกซ่อนถาวร
- CTA Hover อ้างอิงความนุ่มของ Phantom Download:
  - transition ประมาณ 400ms
  - scale เล็กน้อย
- Header dropdown ใช้ smooth expand
- Card Hover ขยับเฉพาะ card
- Core feature overview คลี่จาก `82vh` ถึง `28vh`
- Plan card stack เริ่มเร็วกว่า โดยคลี่จาก `96vh` ถึง `42vh`; ทั้งสองใช้ช่วง
  Scroll `54vh` จึงรักษาความเร็วการคลี่เดิม
- Route line draw และ Hero motion ใช้ CSS
- รองรับ keyboard, touch และ `prefers-reduced-motion`
- ห้าม autoplay carousel หรือ motion ที่รบกวนการอ่าน

### Reusable Prompt

```text
สร้าง Motion system แบบสงบ ใช้ CSS transitions และ requestAnimationFrame
เฉพาะจุดที่ต้องผูกกับ Scroll ทำ reveal เป็น progressive enhancement
CTA scale เบา ๆ, dropdown expand อย่างนุ่มนวล และยกเฉพาะ card บน Hover
ทุก interaction ต้องมี reduced-motion, keyboard และ touch alternative
```

## 17. Roadmap

### Summary

- Roadmap เป็น Roadmap ของแอปมือถือ ไม่ใช่รายการ Phase ของเว็บไซต์
- เนื้อหาคร่าว ๆ:
  1. Product discovery
  2. Shared trip plan
  3. Gear coordination
  4. Offline trip use
  5. Learn from real trips
  6. Responsible launch preparation
- ไม่ใส่วันที่หรือ commitment ที่ยังไม่ยืนยัน
- แปล TH/EN และมี localized metadata

### Reusable Prompt

```text
สร้าง Roadmap ของตัวผลิตภัณฑ์มือถือเป็นลำดับ outcome โดยไม่เปิดเผย internal
website phases และไม่สัญญาวันเปิดตัว แสดงสถานะอย่างซื่อสัตย์ แปล TH/EN
พร้อม localized metadata และ semantic timeline
```

## 18. Support, Waitlist, FAQ, Footer, and Legal

### Summary

- Support page ต้องกระชับ ไม่บังคับผู้ใช้ Scroll ยาว
- ช่องทางสนับสนุนต้องเป็น inactive state จนมี destination ที่อนุมัติ
- Supporter wall แสดงเฉพาะชื่อ รูป ลำดับ และ consent ที่ได้รับอนุญาต
- FAQ อยู่ใน Footer และ Home FAQ section ไม่อยู่ใน Support dropdown
- Waitlist CTA ยังเป็น non-submitting preview
- ห้ามเก็บ email, payment หรือ personal data ก่อนมี backend, policy และ consent
- Footer รวม Product, Roadmap, Support, FAQ, Privacy และ Terms
- Privacy/Terms ต้องบอกสถานะ pre-launch และ no analytics/no optional cookies

### Reusable Prompt

```text
สร้าง Support page แบบกระชับพร้อม safe empty state และ supporter wall ที่
consent-driven เก็บ FAQ ไว้ Home/Footer เท่านั้น ทำ Waitlist เป็น disabled
preview จนกว่าจะมี backend และ privacy approval Footer ต้องรวม navigation
และ legal links ส่วน Privacy/Terms ต้องอธิบายสถานะ pre-launch ตามจริง
```

## 19. Assets, Logo, and Browser Identity

### Summary

- Header ใช้ logo SVG + `Accomp` text
- Logo ปัจจุบันยังเป็น provisional และเปลี่ยนได้เมื่อได้ final identity
- Artwork ล่าสุดเป็นมาสคอตต้นสนสีเขียวอ่อนผิวสัมผัสแบบปั้นและใบหน้ายิ้ม
- Favicon/browser tab ใช้ logo asset ที่ตรงกับ Header
- Apple touch icon และ favicon ใช้ artwork ชุดเดียวกันพร้อม cache version ใหม่
- Language flags ใช้ owner-provided SVG
- Decorative pine placements ใน Roadmap/Support ใช้ logo ปัจจุบันแทนไฟล์
  public pine symbol เก่า
- Mascot pine ใช้กับ Widget และ concept visuals ได้ แต่ห้ามเรียกว่า final;
  ภาพทั้งห้าสถานะปัจจุบันยังเป็น provisional asset เดียวกัน
- Asset ทุกชิ้นต้องเป็นของแบรนด์ สร้างใหม่ หรือมี license เชิงพาณิชย์
- ห้ามสร้าง inline SVG เลียนแบบ proprietary artwork ของ reference

### Reusable Prompt

```text
ใช้ logo mark แบบ SVG แยกจาก brand text และใช้ mark เดียวกันกับ favicon
จัดเก็บ flag/mascot/assets ใน public directory พร้อมสถานะ provisional/final
ที่ชัดเจน อัปเดต cache version เมื่อเปลี่ยน browser icon บีบอัด logo, Apple icon
และ mascot ให้เหมาะกับเว็บ ใช้เฉพาะ asset ที่มีสิทธิ์และห้ามนำ asset ของ
reference มาใช้
```

## 20. Responsive, Accessibility, and Performance

### Summary

- Mobile-first และตรวจอย่างน้อย phone, tablet, laptop, large desktop
- Touch targets อย่างน้อย 44 CSS pixels
- Semantic landmarks, heading hierarchy, skip link และ visible focus
- Dropdown, carousel/rail, FAQ และ language menu ใช้ keyboard ได้
- Text contrast และ CTA contrast ต้องผ่าน
- Mobile card stack แสดงเรียงเต็ม ไม่บังคับ scroll animation
- Reduced motion ต้องอ่านเนื้อหาได้ครบ
- หลีกเลี่ยง layout shift เมื่อโหลดฟอนต์หรือเปลี่ยนภาษา
- Production build และ rendered HTML ต้องผ่าน
- Logo SVG ไม่เกิน 100 KB, Apple touch icon ไม่เกิน 500 KB และมาสคอต WebP
  แต่ละไฟล์ไม่เกิน 60 KB ที่ขนาด 512×512

### Reusable Prompt

```text
ทำ Responsive QA ตั้งแต่มือถือถึงจอใหญ่ ตรวจ touch target >=44px,
semantic HTML, heading order, focus, keyboard, contrast และ reduced motion
ป้องกัน layout shift จาก font/i18n และยืนยันว่า content สำคัญ server-rendered
ครบแม้ JavaScript หรือ animation ไม่ทำงาน
```

## 21. SEO, Privacy, and Release Readiness

### Summary

- Localized title, description, canonical, hreflang, Open Graph และ X metadata
- Sitemap, robots, structured data และ branded 404
- Social preview ต้องเป็นงานต้นฉบับของแบรนด์
- No analytics, ad tracking หรือ optional cookies จนได้รับอนุมัติ
- Health endpoint และ production security headers
- CI quality gate, preflight, route smoke และ release archive
- Deployment ต้องรอ domain, legal, CTA, product และ analytics decisions

### Reusable Prompt

```text
เพิ่ม localized SEO metadata, canonical/hreflang, sitemap, robots,
structured data, social preview และ 404 แบบแบรนด์ ปิด analytics/cookies
จนกว่าจะมี consent decision เพิ่ม health endpoint, security headers,
CI quality gate และ smoke test โดยห้ามประกาศ production-ready หาก owner gate
ยังไม่ครบ
```

## 22. Suggested Implementation Phases

### Summary

1. Discovery and decision lock
2. Content strategy and visual concept
3. Wireframe and interaction prototype
4. High-fidelity design
5. Scaffold and design system
6. Core marketing page
7. Motion and visual storytelling
8. SEO, legal and performance
9. Cross-device QA
10. Production preparation and release automation
11. TH/EN i18n
12. Mobile app roadmap
13. Developer support and supporter wall
14. Home Screen widget spotlight

### Reusable Prompt

```text
ทำงานเป็น Phase และสร้าง/อัปเดต plan.md ก่อนเริ่ม Phase ใหม่ แต่ละ Phase
ต้องมี objective, scope, deliverables, acceptance criteria, out-of-scope
และ exit gate ห้ามนำงาน Phase ถัดไปเข้ามาก่อนเจ้าของอนุมัติ
หลังจบแต่ละ Phase ให้ validate ตามความเสี่ยงและสรุปสิ่งที่ยังรอ owner decision
```

## 23. Validation and Source-Control Workflow

### Summary

- Development command: `npm run dev`
- Local URL: `http://localhost:3000/`
- Quality suite:
  - `npm run format:check`
  - `npm run lint`
  - `npm run typecheck`
  - `npm test`
  - `git diff --check`
- Commit summary ต้องกระชับและอธิบาย outcome
- Push ไป branch ปัจจุบันเมื่อเจ้าของสั่งเท่านั้น
- ก่อน Commit/Push ต้องอัปเดต `prompt.md`

### Reusable Prompt

```text
ก่อนส่งงานให้ตรวจ format, lint, typecheck, source tests, production build,
render tests และ git diff --check ตรวจว่าไม่มีไฟล์ผู้ใช้อื่นถูกแก้โดยไม่ตั้งใจ
เมื่อได้รับคำสั่ง Commit/Push ให้ทบทวนและอัปเดต prompt.md ก่อน จากนั้น Commit
ไฟล์งานและ prompt.md พร้อมกันด้วย summary กระชับ แล้ว Push branch ปัจจุบัน
พร้อมรายงาน commit hash และสถานะ working tree
```

## 24. Daily Commands

### `เริ่มงาน`

```text
ตรวจว่า Accomp development server ตอบสนองที่ http://localhost:3000/
ถ้ายังไม่ทำงานให้รัน npm run dev จาก repository root ตรวจ HTTP response
แล้วปล่อย server ทำงานต่อเนื่องจนกว่าจะมีคำสั่งหยุด
```

### `commit and push`

```text
ตรวจ diff และไฟล์ค้างทั้งหมด สรุปการเปลี่ยนแปลงตั้งแต่ Commit ล่าสุด
อัปเดตหมวดเดิมหรือเพิ่มหมวดใหม่ใน prompt.md ให้กระชับแต่ครบถ้วน
รัน validation ที่เหมาะสม แล้ว Commit งานทั้งหมดรวม prompt.md ด้วย
commit summary กระชับ จากนั้น Push ไป Remote branch ปัจจุบันและรายงาน hash
ห้าม Commit/Push หากผู้ใช้ยังไม่ได้สั่ง
```

## 25. Current Accomp Values for Reuse

ใช้ส่วนนี้เมื่ออยากสร้าง Accomp ใหม่จากศูนย์โดยไม่เปลี่ยนแบรนด์:

| Token | Value |
| --- | --- |
| Brand | Accomp |
| Industry | Outdoor Technology / Adventure Planning |
| Core feature | Shared Trip Planning / วางแผนทริปร่วมกัน |
| Capability 1 | Plan the trip / วางแผน |
| Capability 2 | Prepare the gear / เตรียมอุปกรณ์ |
| Capability 3 | Offline maps & trip data / แผนที่และข้อมูลออฟไลน์ |
| English body font | Nunito Variable |
| Thai body font | LINE Seed Sans TH |
| Accent font | Accomp Thai Accent v5 |
| Primary color | `#778873` |
| Secondary color | `#A1BC98` |
| Sand | `#DCCFC0` |
| Cream | `#FDF6ED` |
| Dark | `#171717` |
| Local URL | `http://localhost:3000/` |

## 26. Maintenance Log

- **2026-07-30 — Initial consolidation:** รวม Product definition, Brand,
  layout, navigation, Hero, card stack, i18n, typography, widgets, Roadmap,
  Support, legal, QA และ Git workflow จากบทสนทนาและสถานะโปรเจกต์ล่าสุด
  พร้อมเพิ่มกติกาให้อัปเดตเอกสารนี้ก่อน Commit/Push ทุกครั้ง
- **2026-07-30 — Landing narrative and timing refinement:** ลดช่องว่างจาก Hero
  ถึง Core feature และจาก Core feature ถึง Plan ลงครึ่งหนึ่ง อัปเดตหัวข้อและ
  คำอธิบาย TH/EN กำหนดจุดตัดบรรทัดภาษาไทย และเลื่อนจุดเริ่มคลี่ Plan cards
  ให้เร็วขึ้นโดยรักษาระยะและความเร็วของ Motion เดิม
- **2026-08-01 — Provisional mascot identity refresh:** เปลี่ยน logo, favicon,
  Apple touch icon และ widget mascot เป็น artwork ต้นสนชุดล่าสุด ย้าย decorative
  pine placements ให้ใช้ logo ปัจจุบัน ลบ public asset เก่าที่ไม่ใช้งาน และ
  บีบอัดไฟล์ให้อยู่ใน performance budget โดยยังระบุสถานะ provisional ไว้ชัดเจน
