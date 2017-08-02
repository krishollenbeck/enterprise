<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Personalize](#personalize)
    -   [setColors](#setcolors)
    -   [getLuminousColorShade](#getluminouscolorshade)
    -   [setTheme](#settheme)

## Personalize

The personalization routines for setting custom company colors.

**Parameters**

-   `colors` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  -  The list of colors
-   `theme` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  -  The theme name (light, dark or high-contrast)
-   `element`  

### setColors

Sets the personalization color(s)

**Parameters**

-   `colors` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**  -  The original hex color as a string or an object with all the Colors

### getLuminousColorShade

Takes a color and performs a change in luminosity of that color programatically.

**Parameters**

-   `hex` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  -  The original Hexadecimal base color.
-   `lum` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  -  A percentage used to set luminosity change on the base color:  -0.1 would be 10% darker, 0.2 would be 20% brighter

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** hexadecimal color.

### setTheme

Sets the current theme, blocking the ui during the change.

**Parameters**

-   `theme` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  -  Represents the file name of a color scheme (can be dark, light or high-contrast)