# Accomp Product Definition

> Status: Current source of truth
> Owner decision: 2026-07-28
> Scope: Accomp mobile app concept and all product-facing website copy

This document is the canonical feature definition for future Accomp work. When
older phase documents, prototypes, or copy imply a different hierarchy, this
definition takes precedence.

## Product Summary

### Thai

Accomp คือแนวคิดแอปมือถือสำหรับวางแผนทริปกลางแจ้งร่วมกัน โดยมีฟีเจอร์หลัก
หนึ่งเดียวคือ **วางแผนทริปร่วมกัน** ซึ่งครอบคลุมการวางแผน เตรียมอุปกรณ์
และเตรียมข้อมูลให้พร้อมใช้งานออฟไลน์ในพื้นที่ทริปเดียวกัน

### English

Accomp is a mobile app concept for planning outdoor trips together. Its single
core feature is **Shared Trip Planning**, which brings planning, gear
preparation, and offline-ready trip information into one shared trip space.

## Feature Hierarchy

### Core feature

**Shared Trip Planning / วางแผนทริปร่วมกัน**

One shared space that helps a group prepare the same trip from the first idea
to the trailhead.

### Capability 1 — Plan the trip / วางแผน

- Create a trip with a place and dates.
- Invite companions into the shared trip.
- Let invited companions view and contribute to trip details.
- Build a day-by-day itinerary.
- Keep the route, meeting point, and essential details together.

### Capability 2 — Prepare the gear / เตรียมอุปกรณ์

- Create personal and group gear lists.
- Share the checklist with the trip group.
- Assign responsibility for each item.
- Mark prepared items.
- See what is ready and what still needs attention.

### Capability 3 — Ready offline / พร้อมใช้งานออฟไลน์

- Download maps and routes before leaving coverage.
- Keep the itinerary, meeting point, and essential trip details on the device.
- Open prepared trip information without an internet connection.
- Show clear download, offline, and sync status.

## Planned Companion Surfaces

Home Screen Widgets are planned presentation surfaces for the same shared trip
plan. They are not a new core feature and do not add a fourth capability.

### Countdown Companion Widget

Reuses the trip start date and readiness context to show a day countdown with
the Accomp mascot becoming happier and more excited as the trip approaches.

### Gear Checklist Widget

Reuses the shared gear plan to show compact progress and the items that still
need attention.

Platform availability, native interaction, refresh behavior, and sync are not
confirmed. The promotional website may present these widgets only as an
illustrative concept until the mobile implementation is validated.

Phase 2.4 implements that promotional preview inside the website's Features
story. The native widgets themselves remain planned and unvalidated.

## Presentation Rules

- Accomp has one core user-facing feature, not three separate products.
- Gear preparation and offline readiness always belong to the shared trip plan.
- Home Screen Widgets are companion surfaces, not a fourth capability.
- The website may give each capability a dedicated visual chapter so the story
  is easy to scan.
- The Offline chapter is a product differentiator, but it is not a separate
  top-level navigation destination.
- Roadmap stages may sequence the three capabilities for delivery, but must not
  imply they are unrelated top-level features.
- Use `Features / ฟีเจอร์` as the website section label; within that section,
  describe the one core feature and its three capabilities.

## Canonical Product Line

### Thai

Accomp ช่วยให้ทุกคนวางแผน เตรียมอุปกรณ์ และเข้าถึงข้อมูลทริปได้จากพื้นที่
เดียวกัน แม้อยู่ในพื้นที่ไม่มีสัญญาณ

### English

Accomp helps everyone plan, prepare gear, and access essential trip information
from one shared space—even when there is no signal.

## Validation Boundaries

The feature hierarchy is approved, but these implementation details remain
unconfirmed:

- exact collaboration permissions and editing controls;
- exact map provider, downloadable area, and supported map data;
- offline data retention, conflict handling, and sync behavior;
- iOS and Android availability;
- pricing, launch date, and public release plan.

Do not introduce chat, live GPS tracking, emergency SOS, a public social feed,
payments, or safety guarantees as confirmed Accomp features without a new owner
decision.
