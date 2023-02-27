---
id: interaction
title: Interaction
description: All provider interactions are described here
sidebar_position: 3
tags:
  - Advanced Guide
  - Interaction
---

## States

### consentObject
**Type:** consentObject: ConsentObjectType
**Syntax:** consentObject
```bash
console.log(consentObject)

> Object: {
    viewed: false,
    data: {
      'necessary': true,
      'marketing': false,
      'performance': false,
    },
    uuid: '062ebdf9-f24e-4c94-89fb-224c8e8f2e53'
    created_at: Date
    updated_at: Date
    revision: 1
  }
```

### consentDisplayed
**Type:** consentDisplayed: boolean
**Syntax:** consentDisplayed
```bash
console.log(consentDisplayed)

> false
```

### handleConsentDisplayedChange
**Type:** handleConsentDisplayedChange: (newConsentDisplayed: boolean) => void
**Syntax:** handleConsentDisplayedChange(false)
```javascript
<button onClick={() => handleConsentDisplayedChange(true)}>
    Open Modal
</button>
```

### consentTracking
**Type:** consentTracking: number
**Syntax:** consentTracking
```bash
console.log(consentTracking)

> 0
```

## Actions

### actionCheckbox
**Type:** actionCheckbox: (type: string) => void
**Syntax:** actionCheckbox('type')
```javascript
<input
    type="checkbox"
    name="marketing"
    id="marketing"
    checked={consentObject.data['marketing']}
    onChange={() => actionCheckbox('marketing')}
/>
```

### actionAccept
**Type:** actionAccept: () => void
**Syntax:** actionAccept
```javascript
<button onClick={actionAccept}>Accept</button>
```

### actionNecessary
**Type:** actionNecessary: () => void
**Syntax:** actionNecessary
```javascript
<button onClick={actionNecessary}>Necessary</button>
```

### actionAll
**Type:** actionAll: () => void
**Syntax:** actionAll
```javascript
<button onClick={actionAll}>All</button>
```