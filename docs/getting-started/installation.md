---
id: installation
title: Installation
description: How to install Cookify
sidebar_position: 1
tags:
  - Getting started
  - Installation
---

react-cookify is essentially a set of npm packages.

## Install in your Project

For that install `react-cookify` via npm.

```bash
npm install react-cookify
```

## Add CookifyConsent

Now you need to add `CookifyConsent` to your App.

```javascript
import '../styles/globals.css'
import { CookifyProvider } from 'react-cookify'

export default function App({ Component, pageProps }) {
    return (
        <CookifyConsent options={/*options*/}>
            <Component {...pageProps} />
        </CookifyProvider>
    )
}
```