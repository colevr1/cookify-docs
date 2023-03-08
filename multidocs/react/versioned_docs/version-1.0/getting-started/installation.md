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
npm install react-cookify@v1.0.0
```

## Add CookifyProvider

Now you need to add `CookifyProvider` to your App.

```javascript
import '../styles/globals.css'
import { CookifyProvider } from 'react-cookify'

export default function App({ Component, pageProps }) {
    return (
        <CookifyProvider options={/*options*/}>
            <Component {...pageProps} />
        </CookifyProvider>
    )
}
```

## Add Logic

Now add the logic to your Home page.

```javascript
import { useEffect, useState } from 'react'
import { useCookifyProvider, CookifyInput } from 'react-cookify'

export default function Home() {
    const {consentObject, consentDisplayed, handleConsentDisplayedChange, consentTracking, actionAccept, actionNecessary, actionAll} = useCookifyProvider()
    const [displayedClass, setDisplayedClass] = useState('')

    /* CSS not provided in example */
    const handleToggle = () => {
        if (consentDisplayed) {
            setDisplayedClass('block') // block => display: block
        } else {
            setDisplayedClass('hidden') // hidden => display: none
        }
    }

    /* Display the consent management */
    useEffect(() => {
        handleToggle()
    }, [consentDisplayed])

    /* Track the data if needed */
    useEffect(() => {
        if (consentTracking !== 0) { // Only track after initialization
            console.log('Track data here', consentObject)
        }
    }, [consentTracking])

    return (
        <>
            <button onClick={() => handleConsentDisplayedChange(true)}>
                Open Modal
            </button>

            <div className={displayedClass}>
                <div>
                    <CookifyInput type="checkbox" name="necessary" id="necessary" disabled />
                    <label htmlFor="necessary">Necessary</label>

                    <CookifyInput type="checkbox" name="marketing" id="marketing" />
                    <label htmlFor="marketing">Marketing</label>

                    <CookifyInput type="checkbox" name="performance" id="performance" />
                    <label htmlFor="performance">Performance</label>
                </div>

                <div>
                    <button onClick={actionAll}>All</button>
                    <button onClick={actionAccept}>Accept</button>
                    <button onClick={actionNecessary}>Necessary</button>
                </div>
            </div>
        </>
    )
}
```