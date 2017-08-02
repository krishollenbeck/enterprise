
# Accordion  [Learn More](https://soho.infor.com/index.php?p=component/accordion)

## Configuration Options

1. Basic Accordion [View Example]( ../components/accordion/example-index)
2. Accordion Panels [View Example]( ../components/accordion/example-accordion-panels)

{{api-details}}

## Code Example

### Accordion

This example shows a simple accordion with a single accordion header that contains one pane and three sub-headers. All accordion contents should be wrapped by a div element with the "accordion" class.

Create accordion headers by using a block-level element with the "accordion-header" class. Place any number of these elements underneath the accordion element. Accordion headers require an a tag underneath with a blank href attribute. Optionally, use an icon svg tag with the "icon" CSS class, placed before the title element. Create accordion panes by using a block-level element with the "accordion-pane" CSS class. Place any number of these elements underneath and next to the "accordion-header" element that should open the pane. Place any number of block-level elements with the "accordion-header" CSS class underneath this "accordion-header". Optionally, place any number of block-level elements with the "accordion-content" CSS class underneath this "accordion-header". Inside this "accordion-content" element can be any HTML markup, including other controls.

```html
    <div class="accordion" data-demo-set-links="true">
      <div class="accordion-header">
        <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
          <use xlink:href="#icon-user"></use>
        </svg>
        <a href="#"><span>Personal</span></a>
      </div>
      <div class="accordion-pane">
        <div class="accordion-header">
          <a href="#"><span>Item 1</span></a>
        </div>
        <div class="accordion-header">
          <a href="#"><span>Item 2</span></a>
        </div>
      </div>

      <div class="accordion-header">
        <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
          <use xlink:href="#icon-roles"></use>
        </svg>
        <a href="#"><span>Position</span></a>
      </div>
      <div class="accordion-pane">
        <div class="accordion-header">
          <a href="#"><span>Item 1</span></a>
        </div>
        <div class="accordion-header">
          <a href="#"><span>Item 2</span></a>
        </div>
      </div>

      <div class="accordion-header">
        <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
          <use xlink:href="#icon-export-spreadsheet"></use>
        </svg>
        <a href="#"><span>Financials</span></a>
      </div>
      <div class="accordion-pane">
        <div class="accordion-header">
          <a href="#"><span>Item 1</span></a>
        </div>
        <div class="accordion-header">
          <a href="#"><span>Item 2</span></a>
        </div>
      </div>

      <div class="accordion-header">
        <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
          <use xlink:href="#icon-url"></use>
        </svg>
        <a href="#"><span>Learning</span></a>
      </div>
      <div class="accordion-pane">
        <div class="accordion-header">
          <a href="#"><span>Education</span></a>
        </div>
        <div class="accordion-pane">
          <div class="accordion-header">
            <a href="#"><span>Undergraduate</span></a>
          </div>
          <div class="accordion-header">
            <a href="#"><span>Graduate</span></a>
          </div>
        </div>

        <div class="accordion-header">
          <a href="#"><span>Skills</span></a>
        </div>
        <div class="accordion-pane">
          <div class="accordion-content">
            <p>Need some content here</p>
          </div>
        </div>

        <div class="accordion-header">
          <a href="#"><span>Certifications</span></a>
        </div>
        <div class="accordion-pane">
          <div class="accordion-content">
            <p>Need some content here</p>
          </div>
        </div>

        <div class="accordion-header">
          <a href="#"><span>Compliance Training</span></a>
        </div>
        <div class="accordion-pane">
          <div class="accordion-content">
            <p>Need some content here</p>
          </div>
        </div>
      </div>
    </div>

```

## Implementation Tips

On the SoHo Xi Components Accordion, top-level Accordion Headers have support for using SVG icons. However, Accordion sub-headers are only text-based.

## Accessibility

The SoHo Xi Components' Accordion Plugin will manage the accessibility of an Accordion automatically. However, if customization is necessary, accordions can make use of the following:

-   If multiple Accordion panes can be open at once, the main Accordion element should have **aria-multiselectable="true"**. If only one pane should be open at any given time, it should be set to **false**.
-   Accordion headers built similar to the SoHo Xi Components Accordion Plugin should have **role="presentation".** Each Accordion header has an \<a\> tag that acts as its trigger element for itself and its corresponding pane.
-   Accordion header \<a\> tags that currently have keyboard focus should have **aria-selected="true"**. All other accordion header \<a\> tags should have this attribute set to **false**.
-   Accordion panes that are collapsed should have **aria-expanded="false"**. Panes that are expanded should have **aria-expanded="true"**.
-   Collapsed Accordion panes should have a **"display: none;"** CSS property on them, to prevent any of the elements inside of the pane that are focusable from receiving keyboard focus.

## Keyboard Shortcuts

-   **Tab -** When focus is on an accordion header a TAB keystroke will move focus in the following manner:
    1.  When the corresponding Accordion pane is expanded (its aria-expanded state is 'true'), then focus moves to the first focusable element in the pane.
    2.  If the Accordion pane is collapsed (its aria-expanded state is 'false', or missing), OR, when the last interactive element of an expanded Tab or Accordion panel is reached, the next TAB keystroke will move focus as follows:

    -   If [aria-multiselectable] is true and a subsequent Accordion panel is already expanded, focus will move to the first focusable element in this subsequent panel.
    -   If [aria-multiselectable] is true and no subsequent Accordion panel is expanded, OR, if multi-select is disabled, focus will move to the first focusable element outside the Accordion or Tab Panel component.

**Shift+Tab -** works the same as Tab, but in the opposite direction.

**Down Arrow/Right Arrow**

-   When focus is on the tab or accordion header, a press of down/right will move focus to the next logical accordion Header or Tab page.
-   When focus reaches the last header/tab page, further key presses will have optionally wrap to the first header
-   In the case of a tab the corresponding tab panel will activate

**Up Arrow/Left Arrow**

-   When focus is on the tab or accordion header, a press of up/left will move focus to the previous logical accordion Header or Tab page.
-   When focus reaches the first header/tab page, further key presses will optionally wrap to the first header.
-   In the case of a tab the corresponding tab panel will activate.

**Enter/Space**

-   When focus is on an Accordion Header, this keystroke toggles the expansion of the corresponding panel.
    -   If collapsed, the panel is expanded, and its aria-expanded state is set to 'true'.
    -   If expanded, the panel is collapsed and its aria-expanded state is set to 'false'.
-   When focus is on a Tab in a Tab Panel, this keystroke has no effect.
    -   Note: Tab Panel panels are auto-expanded when their corresponding Tab receives focus, and auto-collapsed when focus moves to another Tab.
-   When focus is on any other interactive element, this keystroke activates, or selects, that element.
    -   In this case, the behaviour of depends on the role of the interactive element, and is defined elsewhere in this document (cf., Menu).

## States and Variations

The Accordion's headers support the following states:

-   Normal
-   Selected
-   Hover

When an Accordion header is "focused" (meaning the \<a\> tag inside the header is focused), the header will contain an .is-focused CSS class.

When an Accordion header is currently selected (meaning that keyboard focus was previously left on the atag inside the header, or that the control's keyboard focus is currently on this header's a tag), it will contain a .is-selected CSS class. If this accordion header is a child element of another accordion header, the parent accordion header will contain a .child-selected CSS Class.

## Responsive Guidelines

The Accordion container (the element with the .accordion CSS class) will size to fill its parent container.

## Upgrading from 3.X

-   The initial markup is changed considerably from the previous version. Sync the markup using [the new version](http://usmvvwdev53/component/accordion#code-example)
-   Initialize the accordion plugin with .accordion() as opposed to .inforAccordion() or by using the page initializer
-   onExpanded and onCollapsed option are done with events (expanded and collapsed)