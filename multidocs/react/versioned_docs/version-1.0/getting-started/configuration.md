---
id: configuration
title: Configuration
description: How to configure Cookify
sidebar_position: 2
tags:
  - Getting started
  - Configuration
---

## Available Options

All configuration options with its default values.

```typescript
name: 'cookify-consent',
storage: 'cookies', // ['cookies' and 'storage']
saveWithChange: false,
saveByDefault: false,
typeDefault: 'necessary',
types: {
    // `necessary: true` will be set automatically
    // if `typeDefault` is empty, otherwise it will use the customized `typeDefault` instead of `necessary`
},
// js-cookie attributes
// Only needed when using `storage: 'cookies'`
// More information on https://github.com/js-cookie/js-cookie
jscookie: {
    expires: 365,
    path: '/',
}
```

## Inset options

```javascript
import '../styles/globals.css'
import { CookifyProvider } from 'react-cookify'

export default function App({ Component, pageProps }) {
    return (
        <CookifyProvider options={{
            name: 'own-cookify-consent',
            types: {
                marketing: false,
                performance: false,
            },
            jscookie: {
                expires: 365,
                path: '/',
                secure: true,
            }
        }}>
            <Component {...pageProps} />
        </CookifyProvider>
    )
}
```