---
id: configuration
title: Configuration
description: How to configure Cookify
sidebar_position: 2
tags:
  - Advanced Guide
  - Configuration
---

## Available Options

All configuration options with its default values.

```typescript
name: 'cookie-consent',
store: 'storage', // 'cookies' or 'storage'
saveByDefault: false, // true -> opt-out, false -> opt-in
saveWithChange: false,
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
},
revision: 1 // when client revision not equal storage will get cleared once
```

## Example options

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