<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [getHiddenSize](#gethiddensize)
-   [smoothScroll](#smoothscroll)
-   [isElement](#iselement)
-   [getDimensions](#getdimensions)
-   [splice](#splice)
-   [fixSVGIcons](#fixsvgicons)
-   [getViewportSize](#getviewportsize)
-   [getContainerScrollDistance](#getcontainerscrolldistance)
-   [getHiddenSize](#gethiddensize-1)
-   [smoothScrollTo](#smoothscrollto)
-   [isAbove](#isabove)
-   [isBelow](#isbelow)

## getHiddenSize

Binds the Soho Util _getHiddenSize()_ to a jQuery selector

**Parameters**

-   `options` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** incoming options

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## smoothScroll

Binds the Soho Behavior _smoothScrollTo()_ to a jQuery selector

**Parameters**

-   `target` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** target distance to scroll the element
-   `duration` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the time that will be needed for the scrolling to complete.

Returns **$.Deferred** 

## isElement

Checks if an element is valid

**Parameters**

-   `el` **([HTMLElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) \| [SVGElement](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate) \| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;jQuery>)** The element being checked

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** represents all values normally contained by a DOMRect or ClientRect

## getDimensions

Runs the generic _getBoundingClientRect()_ method on an element, but returns its results
as a plain object instead of a ClientRect

**Parameters**

-   `el` **([HTMLElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) \| [SVGElement](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate) \| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;jQuery>)** The element being manipulated

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** represents all values normally contained by a DOMRect or ClientRect

## splice

The splice() method changes the content of a string by removing a range of
characters and/or adding new characters.

**Parameters**

-   `str` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The string that will be manipulated.
-   `start` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Index at which to start changing the string.
-   `delCount` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** An integer indicating the number of old chars to remove.
-   `newSubStr` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The String that is spliced in.

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** A new string with the spliced substring.

## fixSVGIcons

Hack for IE11 and SVGs that get moved around/appended at inconvenient times.
The action of changing the xlink:href attribute to something else and back will fix the problem.

**Parameters**

-   `rootElement`  

Returns **[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)** 

## getViewportSize

Gets the current size of the viewport

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## getContainerScrollDistance

Gets the various scrollable containers that an element is nested inside of, and returns their scrollHeight and scrollLeft values.

**Parameters**

-   `element`  

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>** 

## getHiddenSize

Takes an element that is currently hidden by some means (FX: "display: none;") and gets its potential dimensions by checking a clone of the element that is NOT hidden.

**Parameters**

-   `el` **([HTMLElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) \| [SVGElement](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate) \| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;jQuery>)** The element being manipulated.
-   `options` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** incoming options.
-   `parentElement` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;jQuery>?** the parent element where a clone of this hidden element will be attached. (optional, default `undefined`)

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## smoothScrollTo

Allows for the smooth scrolling of an element's content area.

**Parameters**

-   `el` **([HTMLElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) \| [SVGElement](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate) \| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;jQuery>)** The element being manipulated.
-   `target` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** target distance.
-   `duration` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the time that will be needed for the scrolling to complete.

Returns **$.Deferred** 

## isAbove

**Parameters**

-   `breakpoint` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** matches one of the entries in the "Soho.breakpoints" object.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isBelow

**Parameters**

-   `breakpoint` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** matches one of the entries in the "Soho.breakpoints" object.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 