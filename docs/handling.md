---
id: handling
title: Handling
description: How to handle interaction
sidebar_position: 4
tags:
  - Handling
---

In the example Analytics from Vercel is used wich is just a JSX component.

First you need to import `useCookifyProvider`. After that use a different state to track the exact state. To handle a checkbox change use `useEffect` and listen to `consentTracking`. Inside the useEffect you can track your cookie type that you can get out of `consentObject.data['%type%']`.

```typescript
import React, { useEffect, useState } from 'react'
import { useCookifyProvider } from 'react-cookify'
import { Analytics } from '@vercel/analytics/react'

const AnalyticsHandler: React.FC = () => {
    const {consentObject, consentTracking} = useCookifyProvider()
    const [useAnalytics, setUseAnalytics] = useState(false)

    useEffect(() => {
        setUseAnalytics(consentObject.data['analytics'])
    }, [consentTracking])

    return (
        <>
            { useAnalytics && (
                <Analytics />
            )}
        </>
    )
}

export default AnalyticsHandler
```