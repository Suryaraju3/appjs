# app

* application refers to any software application built using the Node.js runtime environment.
### favicon.ico

* We can see the top on the webpage a small icon.

### globals.css

* a file where you can define CSS styles that are applied globally across your entire application. 

## node_modules

* We store all the installed packages. 
* Use packages in our Node.js code.
* Automatically generated, and we should not modify it manually.

## Public
* Static files like images, icons, fonts, or frontend assets.

## .gitignore

* .gitignore is a text file in our Git repository that tells Git which files to ignore in a project.

## eslint.config.mjs

* ESLint project configuration in a configuration file.
*  ESLint a tool that checks for JavaScript errors and enforces coding style.

## jsconfig.json

*  jsconfig.json file is a configuration file used in JavaScript projects and TypeScript is a optional.
## package-lock.jason and package.json

* package-lock.json locks down the specific versions of all packages. It is automatically created and maintained by npm. 
* we should not modify it manually.

NPM - Node Package Manager

* used for installing and publishing packages 

NPE - Node Package Execute

* NPX is a package executer without installing we can use dirctly.
==================================================

# Tailwindcss


### Styling with utility classes

* Tailwind classes are short and reusable CSS utility names used directly in HTML to style elements.

### Font-size:

* Controlling the font size of an element `text-base`.
* we can change line-height of an element at the same time `text-xl/6`.

### Color:

* Controlling the color of an element `text-red-700`.

### Font-weight:

* controlling the font weight of an element `font-[<value>]`.

### Gap:

* The utilities for controlling gutters between grid and flexbox items `gap-<number>`.

### Width and Height:

* utilites for setting the width and height of an element `w-<number>` `w-<number> ` `w-sm` `w-[<value>]` `h-<number>` `h-full` `h-dvh` `h-lvh` `h-svh`.
* we can use number,percentage,container scale. 

### Background-color:

* controlling an element's background color `bg-white` `bg-[<value>]`.

**Opacity**
* the color opacity modifier to control the opacity of one element's background color.

**hover**

* prefix a `background-color` utility with a variant like `hover:*` to only apply the utility in that state.

**custom value**

* To set the background color based on a completely custom value.`bg-[<value>]`

**Border-radius**

* We can apply different border radius sizes to an element.
`rounded-sm` `rounded-md` `rounded-xl` `rounded-lg`
* Only rounding one side of an element.`rounded-t-lg` `rounded-r-lg` `rounded-b-lg` `rounded-l-lg`
* only rounding one corner of an element.
`rounded-tl-lg` `rounded-tr-lg` `rounded-br-lg` `rounded-bl-lg`
* Create pill buttons `rounded-full`.
* Removing the border radius `rounded-none`.
* To set the border radius based on a completely custom value `rounded-[<value>]`.


### box-shadow

* To apply different sized outer box shadows to an element.  `shadow-md` `shadow-lg` `shadow-xl`

* We use opacity modifier to adjust the opacity of the box shadow.`shadow-xl/20` `shadow-xl/30`

#### shadow color

* To change the color of a box shadow.`shadow-indigo-500` `shadow-cyan-500/50` 
* By default colored shadows have an opacity of 100% but We can adjust this using the opacity modifier.

### inset shadow

* To apply an inset box shadow to an element. `inset-shadow-2xs` `inset-shadow-xs` `inset-shadow-sm`
* We can adjust the opacity of an inset shadow using the opacity modifier `inset-shadow-sm/50` and The default inset shadow opacities 5%, Increasing the opacity to like 50% will make the inset shadows more pronounced.

###  inset shadow color

* To change the color of an inset box shadow. `inset-shadow-indigo-500` `inset-shadow-cyan-500/50`
* By default colored shadows have an opacity of 100% but We can adjust this using the opacity modifier.

### Adding a ring

* To apply a solid box-shadow to an element.`ring-<number>`
* We can modifiy `ring-2` `ring-4` `ring`.
* By default rings match the currentColor of the element applied.

### ring color

* To change the color of a ring.`ring-2 ring-blue-500` `ring-2 ring-blue-500/50 `, By default rings have an opacity of 100% but We can adjust this using the opacity modifier.

###  inset ring

* To apply a solid inset box-shadow to an element.`inset-ring-<number>` `inset-ring-2`
* By default inset rings match the currentColor of the element they are applied.


### inset ring color

* To change the color of an inset ring.
`inset-ring-2 inset-ring-blue-500` `inset-ring-cyan-500/50`
* The default inset rings have an opacity of 100% but We can adjust this using the opacity modifier.

### box shadow

* To remove an existing box shadow from an element. `hadow-none` `inset-shadow-none` `inset-ring-0`

# max-width

* To set an element to a fixed maximum width based on the spacing scale. `max-w-<number>` `w-full max-w-24`

###  percentage

* To give an element a percentage-based maximum width.`max-w-full` `w-full max-w-9/10`

### container scale

* To set an element to a fixed maximum width based on the container scale. `max-w-sm` auto center->`mx-auto`

# margin

* To control the margin on all sides of an element.
`m-<number>` `m-4`

###  margin to a single side

* To control the margin on one side of an element. `mt-<number>` `mr-<number>` `mb-<number>` `ml-<number>`

### horizontal margin

* To control the horizontal margin of an element. `mx-<number>` `mx-4`

### vertical margin

* To control the vertical margin of an element. `my-<number>` `my-4`

### space between children

* To control the space between elements. `space-x-<number>` `space-y-<number>` `flex space-x-4 `

### children order

* To ensure the space is added to the correct side of each element. `space-x-reverse` `space-y-reverse` If your elements are in reverse order.`flex-row-reverse` or `flex-col-reverse`


# display

### Block and Inline

* To control the flow of text and elements. `inline` `inline-block` `block`
* `inline` Inline will cause the text inside the element to wrap normally.
* `inline-block` The element to prevent the text inside from extending beyond its parent.
* `block` The element on its own line and fill its parent.

### Flex

* To create a block-level flex container.`flex`

### inline-flex

* To create an inline flex container that flows with text.
`inline-flex`


### Grid

* To create a grid container.`grid`

### Inline Grid

* To create an inline grid container.`inline-grid`

### Contents

* To createcontainer whose children act like direct children of the parent.`contents`


### Table

* To create elements that behave like their respective table elements. `table`, `table-row`, `table-cell`, `table-caption`, `table-column`, `table-column-group`, `table-header-group`, `table-row-group`, `table-footer-group` 


### Hidden

* To remove an element from the document. To visually hide an element but keep it in the document. `hidden`

### Screen-reader only

* `sr-only` to hide an element visually without hiding it from screen readers.

* `not-sr-only` to undo `sr-only`, making an element visible to sighted users as well as screen readers.

* This can be useful when you want to visually hide something on small screens but show it on larger screens.


# Padding

* `p-<number>` To control the padding on all sides of an element.

### Adding padding to one side

* To control the padding on one side of an element.`pt-<number>`, `pr-<number>`, `pb-<number>`,`pl-<number>`

### horizontal padding

* To control the horizontal padding of an element.`px-<number>`

### vertical padding

* To control the vertical padding of an element.`py-<number>`

# Hover, focus, and other states

* Adding a variant to the beginning of the class name that describes the condition you want to target.

* To apply the `bg-sky-700` class on hover, use the `hover:bg-sky-700` class.

### :hover, :focus, :active

* The Style elements on hover, focus, and active using all the hover, focus, and active variants.

* Tailwind variants for other interactive states like `:visited`, `:focus-within`, `:focus-visible`, and more.

### :first, :last, :odd, :even

* We add Style an element when it is the first-child or last-child using the first and last variants.

* We use the nth-* and nth-last-* variants to style children based on their position in the list

* We use arbitrary values for more complex expressions like `nth-[2n+1_of_li]`.

* Tailwind also includes variants for other structural pseudo-classes like `:only-child`, `:first-of-type`, `:empty`, and more.

# Pseudo-class

* The examples for all the pseudo-class variants. 

### hover:

* The `hover:` variant is used to apply styles when the user hovers over an element.

### focus:

* We Style an element when it has focus using the `focus`
variant.

### focus-within:

* We Style an element when one of its descendants has focus using the `focus-within` variant.

### focus-visible:

* Element when it has been focused using the keyboard using the `focus-visible`.

### active:

* element when it is being pressed using the `active` variant.

### visited:

* A link when it has already been visited using the `visited` variant.

### target:

*  An element if its ID matches the current URL fragment using the target.

### first-child:

* An element if it's the first child using the `first` variant.

### last-child:

* An element if it's the last child using the `last` variant.

### only-child:

* An element if it's the only child using the `only` variant.

### nth-child(odd):

* An element if it's an oddly numbered child using the `odd` variant.

### nth-child(even):

* An element if it's an evenly numbered child using the `even` variant.

### first-of-type:

* An element if it's the first child of its type using the `first-of-type` variant.

### last-of-type:

* An element if it's the last child of its type using the `last-of-type` variant.

### only-of-type:

* An element if it's the only child of its type using the `only-of-type` variant.

### nth-child():

* We style an element at a specific position using the `nth` variant.

### nth-last-child():

* We style an element at a specific position from the end using the `nth-last` variant.

### nth-of-type():

* We style an element at a specific position, of the same type using the `nth-of-type` variant.

### nth-last-of-type():

* We style an element at a specific position from the end, of the same type using the `nth-last-of-type` variant.

### empty:

* An element if it has no content using the `empty` variant.

### disabled:

* We style an input when it's disabled using the `disabled` variant.

### enabled:

* We style an input when it's enabled using the `enabled` variant, most helpful when you only want to apply another style when an element is not disabled.

### checked:

* Checkbox or Radio button when it's checked using the `checked` variant.

### indeterminate:

* We style a checkbox or radio button in an indeterminate state using the `indeterminate` variant.

### default:

* Checkbox or radio button that was the default value when the page initially loaded using the `default` variant.

### optional:

* An input when it's optional using the `optional` variant.

### required:

* Input when it's required using the `required` variant.

### valid:

* We style an input when it's valid using the `valid` variant.

### invalid:

* We style an input when it's invalid using the `invalid` variant.

### user-valid:

* We style an input when it's valid and the user has interacted with it, using the `user-valid` variant.

### user-invalid:

* We style an input when it's invalid and the user has interacted with it, using the `user-invalid` variant.

### in-range:

* We style an input when its value is within a specified range limit using the `in-range` variant.

### out-of-range:

* We style an input when its value is outside of a specified range limit using the `out-of-range` variant.

### placeholder-shown:

* We style an input when the placeholder is shown using the `placeholder-shown` variant.

### details-content:

* We style the content of a `details` element using the `details-content` variant.

### autofill:

* An input when it has been autofilled by the browser using the `autofill` variant.

### read-only:

* Style an input when it is read-only using the `read-only` variant.

## has():

* We use the  `has-*` variant to style an element based on the state or content of its descendants.

## peer:

* If we need to style an element based on the descendants of a sibling element, We can mark the sibling with the `peer` class and use the `peer-has-*` variant to style the target.


## not():

* We use the `not-` variant to style an element when a condition is not true.

* When we combining `not-focus:` with `hover:` to only apply hover styles when an element is not focused.

* We combine the `not-` variant with media query variants like `forced-colors` or `supports`.

### We Styling based on parent state

* When you need to style an element based on the state of some parent element, mark the parent with the `group` class, and use `group-*` variants like `group-hover` to style the target element.

* This pattern works with every pseudo-class variant, for example `group-focus`, `group-active`, or even `group-odd`.

### Differentiating nested groups

* We can style something based on the state of a specific parent group by giving that parent a unique group name using a `group/{name}` class, and including that name in variants using classes like `group-hover/{name}`.

### Differentiating peers

* When using multiple peers, you can style something on the state of a specific peer by giving that peer a unique name using a `peer/{name}` class, and including that name in variants using classes like `peer-checked/{name}`.

## Pseudo-elements

#### ::before and ::after

* We style the `::before` and `::after` pseudo-elements using the before and after variants.

* The `::before` pseudo-element can be used to insert content before the content of an element. It is often used to add decorative content or icons.

* The `::after` pseudo-element can be used to insert content after the content of an element. It is often used to add decorative content or to clear floats. 

### ::placeholder

* The Style the placeholder text of any input or textarea using the `placeholder` variant.

### ::file

* We style the button in file inputs using the `file` variant.

### ::marker

* We style the counters or bullets in lists using the `marker` variant.

* It is used to style the marker box of a list item 
(i.e., the bullet points or numbers). 

### ::selection

* Style the active text selection using the `selection` variant.

### ::first-line and ::first-letter

* We style the first line in a block of content using the `first-line` variant, and the first letter using the `first-letter` variant.


### ::backdrop

* We style the backdrop of a native dialog element using the backdrop variant.

### forced-colors

* We use the `forced-colors` variant to conditionally add styles when the user has enabled a forced color mode.

### inverted-colors

* Use the `inverted-colors` variant to conditionally add styles when the user has enabled an inverted color scheme.

### pointer and any-pointer

* `pointer` media query tells you whether the user has a primary pointing device, like a mouse, and the accuracy of that pointing device.

* Use the `pointer-fine` variant to target an accurate pointing device, like a mouse or trackpad.

* We can use `pointer-none` and `any-pointer-none` to target the absence of a pointing device.

### orientation

* We use the `portrait` and `landscape` variants to conditionally add styles when the viewport is in a specific orientation.

### scripting

* Use the noscript variant to conditionally add styles based on whether the user has scripting.

## print

* `print` variant to conditionally add styles that only apply when the document is being printed.

## @supports

* Use the `supports-[...]` variant to style things based on whether a certain feature is supported in the user's browser.

## @starting-style

* Use the `starting` variant to set the appearance of an element when it is first rendered in the DOM.

## Dark mode

* it's becoming more common to design a dark version of our website to go along with the default design.

* `dark` variant that lets you style your site differently when dark mode is enabled.

## Theme variables

* Theme variables are special CSS variables defined using the `@theme` directive that influence which utility classes exist in our project.

* We can add a new color to our project by defining a theme variable like `--color-mint-500`. We can classes like bg-mint-500, text-mint-500, or fill-mint-500 in your HTML.

## color

* We can apply colors in Tailwind, which uses utility classes to handle colors.

#### color utilities

 * We use color utilities like `bg-white`, `border-pink-300`, and `text-gray-950` to set the different color properties of elements in our design color.

 
### Utility_________________ Description
   * bg-*	------------------Sets the background color of an element
   * text-* ------------------Sets the text color of an element
   * decoration-* ------------Sets the text decoration color of an element
   * border-*	--------------Sets the border color of an element
   * outline-*	--------------Sets the outline color of an element
   * shadow-*	--------------Sets the color of box shadows
   * inset-shadow-*	----------Sets the color of inset box shadows
   * ring-*	------------------Sets the color of ring shadows
   * inset-ring-*	----------Sets the color of inset ring shadows
   * accent-*	--------------Sets the accent color of form controls
   * caret-*	--------------Sets the caret color in form controls
   * fill-*	------------------Sets the fill color of SVG elements
   * stroke-*	--------------Sets the stroke color of SVG elements

   #### opacity

   * We can adjust the opacity of a color using syntax like `bg-black/75`, And This syntax also supports arbitrary values and the CSS variable.

   #### Targeting dark mode

   * We use the dark variant to write classes like `dark:bg-gray-800` that only apply a color when dark mode is active.

   # Adding custom styles

   * Tailwind has been designed from the ground up to be extensible and customizable.

   
#### theme

* If we want to change things like our color palette, spacing scale, typography scale, or breakpoints, add our customizations using the `@theme` directive in our CSS.

* We can add a new color to your project by defining a theme variable like `--color-mint-500`.

* We can use utility classes like `bg-mint-500`, `text-mint-500`, or `fill-mint-500` in your HTML.

# Functions and directives

* Reference for the custom functions and directives Tailwind exposes to our CSS.

#### @import

* `@import` directive to inline import CSS files.

#### @theme

* `@theme` directive to define our project's custom design tokens, like fonts, colors, and breakpoints.

#### @source

* `@source` directive to explicitly specify source files that aren't picked up by Tailwind's automatic content detection.

#### @utility

* `@utility` directive to add custom utilities to your project that work with variants like `hover`, `focus` and `lg`.

#### @variant

* `@variant` directive to apply a Tailwind variant to styles in our CSS.

#### @custom-variant

* `@custom-variant` directive to add a custom variant in our project.

* This are utilities theme-midnight:bg-black and theme-midnight:text-white.

#### @apply

*  `@apply` directive to inline any existing utility classes into our own custom CSS.

#### @reference

* We use the `@reference` directive to import your main stylesheet for reference without actually including the styles.

* If we are just using the default theme with no customizations, you can import `tailwindcss` directly.

### Functions

* Functions to make working with colors and the spacing scale easier.

#### --alpha()

* `--alpha()` function to adjust the opacity of a color.

#### --spacing()

* `--spacing()` function to generate a spacing value based on your theme.

### Compatibility

* The `@config` and `@plugin` directives may be used in conjunction with `@theme`, `@utility`, and other CSS-driven features.


## Preflight

* When we import tailwindcss into our project, Preflight is automatically injected into the base layer.

* Preflight removes all of the default margins from all elements including headings, blockquotes, paragraphs.

# aspect-ratio

* This Utilities for controlling the aspect ratio of an element.

* We use `aspect-<ratio>` utilities like `aspect-3/2` to give an element a specific aspect ratio.

#### Using a video aspect ratio

* We use the aspect-video utility to give a video element a 16/9 aspect ratio.

# columns

* To control the number of columns within an element.

###### example:
* We use `columns-<number>` utilities like `columns-4` to set the number of columns that should be created for the content within an element.

* The column width will automatically adjust to accommodate the specified number of columns.

### width

* Utilities like `columns-xs` and `columns-sm` to set the ideal column width for the content within an element.

* When setting the column width, the number of columns automatically adjusts to ensure they don't get too narrow.

### column gap

* We use the `gap-<width>` utilities to specify the width between columns.


### Responsive design

* We Prefix a columns utility with a breakpoint variant like `sm:` to only apply the utility at small screen sizes and above.

# break-after

* How a column or page should break after an element.

* ex: We use utilities like `break-after-column` and `break-after-page` to control how a column or page break should behave after an element

### Responsive design

* `break-after` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes.

# break-before

* We use utilities for controlling how a column or page should break before an element.

* ex: We use utilities like `break-before-column` and `break-before-page` to control how a column or page break should behave before an element.

### Responsive design

* We add prefix a `break-before` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above.

# break-inside

* Use utilities for controlling how a column or page should break within an element.

* ex: Use utilities like `break-inside-column` and `break-inside-avoid-page` to control how a column or page break should behave within an element.

### Responsive design

* Use prefix a `break-inside` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes.

# box-decoration-break

* How element fragments should be rendered across multiple lines, columns, or pages.

* ex: We use the `box-decoration-slice` and `box-decoration-clone` utilities to control whether properties like background, border, border-image, box-shadow, clip-path, margin, and padding should be rendered as if the element were one continuous fragment, or distinct blocks.

### Responsive design

* `box-decoration-break` utility with a breakpoint variant like md: to only apply the utility at medium screen sizes 

# box-sizing

* How the browser should calculate an element's total size.

#### Including borders and padding
* Use the box-border utility to set an element's `box-sizing` to `border-box`, telling the browser to include the element's borders and padding when we give it a height or width.

#### Excluding borders and padding
* We use the `box-content` utility to set an element's `box-sizing` to `content-box`, telling the browser to add borders and padding on top of the element's specified width or height.

#### Responsive design

* Prefix a `box-sizing` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes.


# Display

* Utilities for controlling the display box type of an element.

###### ex:
### Block and Inline

* We use the inline, inline-block, and block utilities to control the flow of text and elements.

### Flow Root

* We use the `flow-root` utility to create a block-level element with its own block formatting context.

### Flex

* Use the flex utility to create a block-level flex container.

### Inline Flex

* Use the `inline-flex` utility to create an inline flex container that flows with text.

### Grid

* Use the grid utility to create a grid container.

### Inline Grid

* `inline-grid` utility to create an inline grid container.

### Contents

* Use contents utility to create a "phantom" container whose children act like direct children of the parent.

### Table

* We use table elements like `table`, `table-row`, `table-cell`, `table-caption`, `table-column`, `table-column-group`, `table-header-group`, `table-row-group`, and `table-footer-group`.

### Hidden

* `hidden` utility to remove an element from the document.

* To visually hide an element but keep it in the document, use the visibility property instead.

### Screen-reader only

* `sr-only` to hide an element visually without hiding it from screen readers.
* Use `not-sr-only` to undo `sr-only`, making an element visible to sighted users as well as screen readers example:"sr-only sm:not-sr-only".
* This can be useful when you want to visually hide something on small screens but show it on larger screens

# float

* The wrapping of content around an element.

###### ex:

### Floating elements to the right

* `float-right` utility to float an element to the right of its container.

### Floating elements to the left

* `float-left` utility to float an element to the left of its container.

### Disabling a float

* `float-none` utility to reset any floats that are applied to an element.

# clear

* The wrapping of content around an element.

###### ex:
### Clearing left and right

* `clear-left` utility to position an element below any preceding left-floated elements.
* `clear-right` utility to position an element below any preceding right-floated elements.

### Clearing all

* `clear-both` utility to position an element below all preceding floated elements.

### logical properties

* `clear-start` and `clear-end` utilities, which use logical properties to map to either the left or right side based on the text direction.

### Disabling clears

* We use the `clear-none` utility to reset any clears that are applied to an element.

# isolation

* An element should explicitly create a new stacking context and `isolate`,`isolation-auto` utilities to control whether an element should explicitly create a new stacking contex.

# object-fit

* How a replaced element's content should be resized.

### Resizing to cover

* object-cover utility to resize an element's content to cover its container.

### Containing within

* `object-contain` utility to resize an element's content to stay contained within its container.

### Stretching to fit

* `object-fill` utility to stretch an element's content to fit its container.

### Scaling down

* `object-scale-down` utility to display an element's content at its original size but scale it down to fit its container.

### original size

* `object-none` utility to display an element's content at its original size ignoring the container size.

# object-position

* How a replaced element's content should be positioned within its container.

* `object-left` and `object-bottom-right` to specify how a replaced element's content should be positioned within its container.

*  `object-[<value>]` syntax to set the object position based on a completely custom value.

# overflow

* How an element handles content that is too large for the container

###### ex:
### Showing content

* `overflow-visible` utility to prevent content within an element from being clipped. any content that overflows the bounds of the element will then be visible.

### Hiding content

* `overflow-hidden` utility to clip any content within an element that overflows the bounds of that element

### Scrolling

* We use the `overflow-auto` utility to add scrollbars to an element in the event that its content overflows the bounds of that element.

### Scrolling horizontally

* `overflow-x-auto` utility to allow horizontal scrolling.

### Scrolling vertically 

* `overflow-y-auto` utility to allow vertical scrolling.

### Scrolling horizontally always

* `overflow-x-scroll` utility to allow horizontal scrolling and always show scrollbars unless always-visible scrollbars are disabled.

### Scrolling vertically always

* `overflow-y-scroll` utility to allow vertical scrolling and always show scrollbars unless always-visible scrollbars are disabled.

### Scrolling in all directions

* We use `overflow-scroll` utility to add scrollbars to an element.

# overscroll-behavior

* How the browser behaves when reaching the boundary of a scrolling area.

* `overscroll-contain` utility to prevent scrolling in the target area from triggering scrolling in the parent element.

* `overscroll-none` utility to prevent scrolling in the target area from triggering scrolling in the parent element.

* `overscroll-auto` utility to make it possible for the user to continue scrolling a parent scroll area when they reach the boundary of the primary scroll area.

# position

* How an element is positioned in the document.

###### ex:
### Static

* `static` utility to position an element according to the normal flow of the document.

### Relative

* `relative` utility to position an element according to the normal flow of the document.

### Absolute

* `absolute` utility to position an element outside of the normal flow of the document.

### Fixed

* `fixed` utility to position an element relative to the browser window.

### Sticky

* `sticky` utility to position an element as `relative` until it crosses a specified threshold, then treat it as `fixed` until its parent is off screen.

# top / right / bottom / left

* The placement of positioned elements.

* `top-<number>`, `right-<number>`, `bottom-<number>`, `left-<number>`, and `inset-<number>` utilities like `top-0` and `bottom-4` to set the horizontal or vertical position of a positioned element.

* We can to use a negative top/right/bottom/left value, prefix the class name with a dash to convert it to a negative value.

* `inset-[<value>]` and `top-[<value>]` to set the position based on a completely custom value.

# visibility

* The visibility of an element.

* `invisible` utility to hide an element, but still maintain its place in the document, affecting the layout of other elements, To completely remove an element from the document.

* `collapse` utility to hide table rows, row groups, columns, and column groups as if they were set to `display: none`, but without impacting the size of other rows and columns.

* `visible` utility to make an element visible. 

# z-index

* The stack order of an element.

* `z-<number>` utilities like `z-10` to control the stack order or three-dimensional positioning of an element.

* To use a negative z-index value, prefix the class name with a dash to convert it to a negative value.



-----------------------------------
# Hooks

* We use different React features from our components.
* We Use built-in hooks or to build own.

## State Hooks 

* useState allows us to track state in a function component.
* We use the useState Hook, we first need to import import {useState} from "react".
* first value, count, is our current state.
* setCount is to update the value.
* Usestate set initial value is zero.



