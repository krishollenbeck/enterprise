<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [BusyIndicator](#busyindicator)
    -   [activate](#activate)
    -   [close](#close)
    -   [destroy](#destroy)
    -   [handleEvents](#handleevents)

## BusyIndicator

A Busy Indicator notifies the user that the system is processing a request, and that they must wait for that request to be processed before continuing with the current task.

**Parameters**

-   `blockUI` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  -  makes the element that Busy Indicator is invoked on unusable while it's displayed.
-   `text` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  -  Custom Text To Show or Will Show Localized Loading....
-   `displayDelay` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  -  umber in miliseconds to pass before the markup is displayed.  If 0, displays immediately.
-   `timeToComplete` **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**  -  fires the 'complete' trigger at a certain timing interval.  If 0, goes indefinitely.
-   `transparentOverlay` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  -  If true, allows the "blockUI" setting to display an overlay that prevents interaction, but appears transparent instead of gray.
-   `element`  

### activate

Builds and starts the indicator

### close

Removes the appended markup and hides any trace of the indicator

### destroy

Teardown and remove any added markup and events.

### handleEvents

This component listens to the following events.

**Parameters**

-   `start` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**  -  Starts / shows the indictor.
-   `complete` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**  -  Hides / Ends the indictaor
-   `updated` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**  -  Sync the UI/Settings. Fx chnaging the text in the DOM.