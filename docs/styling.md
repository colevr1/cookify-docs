---
id: styling
title: Styling
description: How to style
sidebar_position: 3
tags:
  - Styling
---

## Configuration

Add the setting theme inside of consent and choose between `light`, `dark`, `high-contrast` & `custom`. The first three has default values. With `custom`.

```typescript
<CookifyConsent settings={{
    options: {
        /* ... */
    },
    consent: {
        theme: 'custom',
    }
}}>
```

## CSS Variables

```css
.cookify-theme-custom {
  /* General */
  --c-text-color: rgb(218, 218, 218);
  --c-text-title-color: rgb(255, 255, 255);
  --c-text-by-color: rgba(255, 255, 255, 0.6);
  --c-border-color: #83110F;
  --c-border-radius: 0.8rem;
  --c-bg-primary-color: rgb(16, 16, 16);
  --c-bg-secondary-color: rgb(23, 23, 23);
  --c-bg-overlay-color: rgba(0,0,0,.5);
  /* Collapse */
  --c-c-bar-bg-color: rgb(7, 7, 7);
  --c-c-bar-bg-hover-color: rgb(29, 29, 29);
  --c-c-bar-text-color: rgb(131, 131, 131);
  --c-c-bar-border-radius: 0.8rem;
  --c-c-bar-badge-bg-color: #83110F;
  --c-c-bar-badge-text-color: rgb(255, 255, 255);
  --c-c-bar-badge-border-radius: 0.8rem;
  --c-c-bar-toggle-off-color: rgb(55, 65, 81);
  --c-c-bar-toggle-on-color: #83110F;
  --c-c-bar-toggle-knob-color: rgb(255, 255, 255);
  --c-c-bar-toggle-ring-color: rgba(131, 17, 15, 0.5);
  --c-c-extend-bg-color: rgb(23, 23, 23);
  --c-c-extend-text-color: rgb(218, 218, 218);
  --c-c-extend-border-color: transparent;
  --c-c-extend-border-radius: 0.8rem;
  --c-c-extend-padding: 1.2rem;
  --c-c-extend-table-bg-header-color: rgb(31, 31, 31);
  --c-c-extend-table-bg-hover-color: rgb(31, 31, 31);
  /* Refferenze */
  --c-ref-border-color: rgb(31, 31, 31);
  --c-ref-border-radius: 0.8rem;
  /* Button */
  --c-btn-strong-bg-color: #83110F;
  --c-btn-strong-bg-hover-color: rgb(206, 9, 8);
  --c-btn-strong-text-color: rgb(255, 255, 255);
  --c-btn-week-bg-color: rgb(0, 0, 0);
  --c-btn-week-bg-hover-color: rgb(39, 39, 39);
  --c-btn-week-text-color: rgb(255, 255, 255);
  --c-btn-border-radius: 2rem;
  /* Scrollbar */
  --c-sb-width: 16px;
  --c-sb-track-color: transparent;
  --c-sb-thumb-color: #83110F;
  --c-sb-thumb-hover-color: rgb(206, 9, 8);
  --c-sb-thumb-border-width: 4px;
  --c-sb-thumb-border-radius: 8px;
  /* Opener */
  --c-open-bg-color: #83110F;
  --c-open-bg-hover-color: #a11412;
  --c-open-text-color: rgb(255, 255, 255);
  --c-open-border-radius: 9999px;
}
```