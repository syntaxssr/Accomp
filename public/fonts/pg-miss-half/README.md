# PG Miss Half

Accomp uses the owner-provided `PG Miss Half.ttf` as a Thai accent typeface for
hero headlines, section headings, card titles, and the Accomp wordmark.

- Family: PG Miss Half
- Style: Regular
- Version: 1.000
- Copyright metadata: Copyright (C) 2022 by Pungfont. All rights reserved.
- Source: Project owner-provided font file

## Local adjusted derivative

`AccompThaiAccent-v5.ttf` is a reversible, locally generated derivative used by
the website under the CSS family name `Accomp Thai Accent`.

- Source glyphs: `uniF70A`–`uniF70D`, the contextual alternates for
  `่`, `้`, `๊`, and `๋` above standard consonants, plus `uniF705`–`uniF708`,
  the alternates selected after `ป`, `ฝ`, and `ฟ`
- Adjustment: moved all eight contextual tone-mark glyphs down by 20 font
  units from the original while preserving their relative proportions and
  horizontal placement
- Vertical reference: the lower edge of `uniF70B` is 767 font units above the
  baseline, aligned to the 766-unit lower edge of `uni0E31` (ไม้หันอากาศ)
- Web rendering: across the 58–112 px headline range, the gap above `ด` stays
  within 2 pixels of the gap above `ก` when paired with `uni0E31`
- Preserved behavior: the primary `uni0E48`–`uni0E4B` glyphs used when tone
  marks stack above an upper vowel or mark, such as in `ที่` and `ขั้น`, are
  unchanged
- OpenType behavior: the original `liga`, GSUB, and GPOS tables are preserved
- Internal version: `1.005-accomp`

The original file remains unchanged as the rollback source. The right to
modify, embed, and redistribute either the original or adjusted font must be
confirmed with the font owner before a production release or public commit.
