# React e-commerce app overview (Rajshopnil)

<!-- For the Background gray same to code-->
<!-- ------------------------------------------- -->
 ## Install
```shell
npm i --save react-router-appName-id
```
or
```shell
yarn add react-router-appName-id
``` 


<!-- For the any short code displaing  -->
<!-- --------------------------------------- -->
 ### Code here
Verify's that app is supported.
Returns a `Promise` that resolves to a `String` of `Number` or `Bollean` . 


<!-- For the any code displaing -->
<!-- --------------------------------- -->
 __Examples__
```js
TouchID.isSupported()
  .then(biometryType => {
    // Success code
    if (biometryType === 'FaceID') {
        console.log('FaceID is supported.');
    } else {
        console.log('TouchID is supported.');
    }
  })
  .catch(error => {
    // Failure code
    console.log(error);
  });
``` 


# React router Team builder app overview


## What is included here:

1.ES2015 Fundamentals
2.React Fundamentals
3.React-router (Switch, Link, Route)
4.useState, useEffect and useParams
5.FontAwesome and manual (jpg,png,gif)
6.Showing conditional image
7.React-router dynamic url
8.Data access (props, destructure)
9.Working with section list
10.How to implement platform specific code
11.Importing, linking and using external libraries
12.Understanding and working efficiently with the current open source React-router
13.Interacting with external APIs over the network (fetch and axios)
15.Testing

### `npm install react-router`


<!-- For Table Structure -->
<!-- -------------------------- -->
## Errors
There are various reasons why biomentric authentication may fail.  When it does fails, `appId.authenticate` will return an error code representing the reason.

Below is a list of error codes that can be returned **on iOS**:

| Code | Description |
|---|---|
| `useState()` | Authentication was not successful because the user failed to provide valid credentials. |
| `useEffect()` | Authentication was canceled by the user—for example, the user tapped Cancel in the dialog. |
| `useParams()` | Authentication was canceled because the user tapped the fallback button (Enter Password). |
| `useHistory()` | Authentication was canceled by system—for example, if another application came to foreground while the authentication dialog was up. |
| `fetch()` | Authentication could not start because the passcode is not set on the device. |
| `axios()` | Authentication could not start because Touch ID is not available on the device |
| `props, destructure` | Authentication could not start because Touch ID has no enrolled fingers. |
| `Show conditional img` | Could not authenticate for an unknown reason. |
| `Dynamic url` | Device does not support Touch ID. |
