---
id: guide
title: Guide
description: How to use Cookify
sidebar_position: 4
tags:
  - Guide
---

## Query Names

The query names are necessary for using Cookify. There are different checkboxes for controlling the cookie activity and you can handle the cookies with a few different actions. Below are all usable query names and how to use them properly.

You can only use the `data-c-check` on input fields. As an example for type checkbox.

**data-c-check="{string}"**

```html
<input data-c-check="necessary" type="checkbox">
```

You are able to set a preset value of the field. When you don't set this default value it is false.
  
**data-c-check-default="{boolean}"** (default: false)

```html
<input data-c-check="necessary" data-c-check-default="true" type="checkbox">
```

You have 3 ways to for saving. Use `accept` when you want the user to save the selected fields, `all` will select all fields and save them and `necessary` is for selecting only the necessary field.
  
**data-c-action="{string}"**
  - necessary (Save only the required cookies)
```html
<div data-c-action="necessary">Necessary</div>
```
  - all (Save the selected cookies)
```html
<div data-c-action="all">All</div>
```
  - accept (Save all cookies)
```html
<div data-c-action="necessary">Necessary</div>
```
## Enabling or disabling content

### Scripts
That you are able to handle the scripts for the user selected types you need to set `data-c-script` where it is necessary. It is only possible to use the types that are used in the query names `data-c-check`. This will either work for scripts with import src or with inline scripts.

**data-c-script="{string}"**

```html
<script type="text/plain" src="example.js" data-c-script="necessary"></script>

<script type="text/plain" data-c-script="necessary">
  console.log(example)
</script>
```

### Iframes and Images
Instead of changing the type Cookify will switch the `src` element of iframe or img tags depending on the consent given. For that `data-c-fallback` (used if no consent was given) and `data-c-src` (used if consent was given) need to be set. The `data-c-script` attribute will be used to determine the category as for scripts. It is recommended to set the src already to the fallback to avoid connections before cookify is initialized.

```html
<img data-c-script="necessary" src="/path/to/fallback.jpg" data-c-fallback="/path/to/fallback.jpg" data-c-src="/example.jpg"/>

<iframe data-c-script="necessary" src="about:blank" data-c-fallback="about:blank" data-c-src="https://example.org"></iframe>
```

## Helpers

When you want to know the exact state of a type or if the user viewed and agreed the consent already then use the `getDataState()` function. The output is a boolean value (true or false).

```javascript
cookify.getDataState('type')

cookify.getDataState(cookify.viewedName)
```