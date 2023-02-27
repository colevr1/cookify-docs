---
id: configuration
title: Configuration
description: How to configure Cookify
sidebar_position: 3
tags:
  - Configuration
---

For customization you can inicialize Cookify with the following variables or functions described below. Every variable and function has a default value that you don't need to set it. But you need to watch on the described sheme in order to inicialize correctly.

```javascript
var cookify = new Cookify(
    dataName,
    actionCallback,
    trackingCallback,
    saveWithChange,
    saveByDefault,
    cookieDefault,
    initCallback
)
```

dataName -> string (default: cookify) \
actionCallback -> function (default: () => {})\
trackingCallback -> function (default: () => {})\
saveWithChange -> boolean (default: false)\
saveByDefault -> boolean (default: false)\
cookieDefault -> string (default: necessary)\
initCallback -> function (default: () => {})

To explain the initialization better i will give a simple example with all variables and functions and how to use them. `dataName` is for the name that will show in the data storage for Cookify. The `actionCallback` is called after the user clicked on the following `data-c-action` fields. With that function you can close the cookie consent field as an example. Then you have the function `trackingCallback` for tracking user activity. This function needs a data variable where the data[0] stores all types and the viewed state and data[1] stores the actual date. `saveWithChange` can be set if you want to change the user selection when clicking on the input fields. The `saveByDefault` variable is for saving the selection when loading the first time. Then we have the `cookieDefault` variable where you can set the default cookie type name. At last we have the `initCallback` function that can for example be used to determine if the consent dialog should be shown after Cookify did its initialization.

```javascript
var cookify = new Cookify('cookie_consent', function () {
    document.getElementById('element').style.display = 'none'
  }, function (data) {
    console.log(data)
  }, false, false, 'necessary',
    function(cookify) {
        //show the cookie popup as long as the user has not seen it
        if (cookify.getDataState(cookify.viewedName)) {
            document.getElementById('element').style.display = 'none';
        } else {
            document.getElementById('element').style.display = 'block';
        }
    }
)
```