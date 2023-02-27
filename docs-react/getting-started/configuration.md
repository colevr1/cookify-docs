---
id: configuration
title: Configuration
description: How to configure Cookify
sidebar_position: 2
tags:
  - Getting started
  - Configuration
---

## Available Settings

All configuration settings with its default values. The options are part of the Core functions of Cookify and need to be checked out in [Advanced Guide (Core)](../advanced-guide/configuration).

```typescript
/* Options for CookifyProvider inside CookifyConsent */
options: {
    // Advanced Guide (Core) -> Configuration
},

/* Consent for CookifyConsent */
consent: {
    /* Powered by will be shown in info or details */
    support: true,
    /* Auswahl zwischen 3 Themes und custom */
    theme: 'light',
    /* first will decide if we display info or detail first */
    first: 'info', // 'info' or 'detail'
    /* Force consent to be viewed and choosen */
    force: false,
    /* Choose between cookie or fingerprint icon or text */
    icon: 'cookie',
    /* Display the button to reopen the settings */
    reopen: true,
    /* when set the consent manager get paused on the url */
    paused: {
        title: 'Consent Manger Notice',
        desc: 'The consent manager is paused on this side to read the privacy policy.',
        icon: '⚠️',
        url: 'undefined'
    },
    /* Info */
    info: {
        title: 'We use cookies!',
        desc: (
            <>
                Welcome! To enhance your experience, we use cookies and comply with
                GDPR. For more information feel free to check out our{' '}
                <a href="#" style={{ textDecoration: 'underline', fontWeight: 500 }}>
                    privacy policy
                </a>
                .
            </>
        ),
        /* Available are Necessary, accept, all & manage */
        buttons: [
            {
                action: 'manage',
                label: 'Manage settings',
                schema: 'week'
            },
            {
                action: 'all',
                label: 'Accept all',
                schema: 'strong'
            }
        ]
    },
    /* Details */
    detail: {
        title: 'Manage your consent settings',
        desc: (
            <>
                We want your visit to our website to be awesome, so we use cookies to
                give you the best expirience and for remembering preferences. You can
                manage your cookie preferences at any time. To learn more about our
                use of cookies feel free to check out our{' '}
                <a href="#" style={{ textDecoration: 'underline', fontWeight: 500 }}>
                    privacy policy
                </a>
                .
            </>
        ),
        /* UUID, Accped & Updated will be provided in details */
        reference: {
            desc: 'Please provide the below information when you hand in a request about cookies.',
            uuid: 'UUID',
            accepted: 'Accepted',
            updated: 'Updated'
        },
        /* Only necessary, accept & all */
        buttons: [
            {
                action: 'necessary',
                label: 'Only necessary',
                schema: 'week'
            },
            {
                action: 'accept',
                label: 'Accept selected',
                schema: 'week'
            },
            {
                action: 'all',
                label: 'Accept all',
                schema: 'strong'
            }
        ]
    },
    /* Table */
    table: {
        headers: [
            // put string values in here 'col1', 'col2', etc.
        ],
        types: [
            /*{
                for: 'necessary',
                title: 'Strict Necessary',
                desc: 'Necessary Beschreibung',
                // The body is not necessary and can be scipped
                body: [
                    [
                        'cookie',
                        'url',
                        'time',
                        'lorem'
                    ]
                ]
            }*/

        ]
    },
}
```

## Example settings

```javascript
import '../styles/globals.css'
import { CookifyConsent } from 'react-cookify'

export default function App({ Component, pageProps }) {
    return (
        <CookifyConsent settings={{
            options: {
                name: 'cookie-consent',
                store: 'storagee',
                saveByDefault: false,
                saveWithChange: false,
                types: {
                    marketing: false,
                    statistics: false,
                    performance: false,
                },
                jscookie: {
                    expires: 365,
                    path: '/',
                    secure: true,
                },
                revision: 1
            },
            consent: {
                theme: 'dark',
                paused: {
                    title: 'Consent Manger Notice',
                    desc: 'The consent manager is paused on this side to read the privacy policy.',
                    icon: 'ℹ️',
                    url: '/privacy'
                },
                info: {
                    title: 'We use cookies!',
                    desc: (
                        <>
                            Welcome! To enhance your experience, we use cookies and comply with
                            GDPR. For more information feel free to check out our{' '}
                            <a href="#" style={{ textDecoration: 'underline', fontWeight: 500 }}>
                                privacy policy
                            </a>
                            .
                        </>
                    ),
                    buttons: [
                        {
                            action: 'manage',
                            label: 'Manage settings',
                            schema: 'week'
                        },
                        {
                            action: 'all',
                            label: 'Accept all cookies',
                            schema: 'strong'
                        }
                    ]
                },
                detail: {
                    title: 'Manage your consent settings',
                    desc: (
                        <>
                            We want your visit to our website to be awesome, so we use cookies to
                            give you the best expirience and for remembering preferences. You can
                            manage your cookie preferences at any time. To learn more about our
                            use of cookies feel free to check out our{' '}
                            <a href="#" style={{ textDecoration: 'underline', fontWeight: 500 }}>
                                privacy policy
                            </a>
                            .
                        </>
                    ),
                    reference: {
                        desc: 'Please provide the below information when you hand in a request about cookies.',
                        uuid: 'UUID',
                        accepted: 'Accepted',
                        updated: 'Updated'
                    },
                    buttons: [
                        {
                            action: 'necessary',
                            label: 'Only necessary',
                            schema: 'week'
                        },
                        {
                            action: 'accept',
                            label: 'Accept selected',
                            schema: 'week'
                        },
                        {
                            action: 'all',
                            label: 'Accept all',
                            schema: 'strong'
                        }
                    ]
                },
                table: {
                    headers: [
                        'Name',
                        'Domain',
                        'Expiration',
                        'Description'
                    ],
                    types: [
                        {
                            for: 'necessary',
                            title: 'Strict Necessary',
                            desc: 'Necessary Beschreibung'
                        },
                        {
                            for: 'marketing',
                            title: 'Marketing',
                            desc: 'Marketing Beschreibung',
                            body: [
                                [
                                    'cookie1',
                                    'url1',
                                    '2 years',
                                    'lorem'
                                ],
                                [
                                    'cookie2',
                                    'url2',
                                    '1 day',
                                    'lorem'
                                ]
                            ]
                        },
                        {
                            for: 'performance',
                            title: 'Performance',
                            desc: 'Performance Beschreibung'
                        }
                    ]
                },
            }
        }}>
            <CookifyContainer>
                <Component {...pageProps} />
            </CookifyContainer>
        </CookifyConsent>
    )
}
```