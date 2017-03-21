
# Using these SCSS files

This file system is organized using a variation of Atomic Design, styles are organized from small parts (atoms), to full pages (templates).

In addition, there are helper functions and mixins that are defined first. If this is done properly, there will be no repeat styles, and little to no overriding.

As a style guide, keep nesting to a maximum of 3 levels (not including pseudo selectors), limit use of advanced selectors (>, +, ~, etc), and avoid use of IDs if possible.

## Definitions

- Atoms: helpers, element styles, small building blocks (buttons, inputs, images)
- Molecules: combination of atoms (forms, widgets)
- Organisms: multiple molecules (header, sidebar, footer)
- Templates: multiple organisms (posts, archives)
- Pages: page specific overrides of templates

## Usage with this Project

Files within this directory are importable from every other file in the project as the base path is a require root. What that means is that you can simply do the following in any scss file to import a file:

```scss
@import "atoms/variables";
```

This is the recommended way to get theme colors, responsive breakpoints, common utilites and anything else that could be shared between components. Following the rules above will make these styles really reusable and help keep specifity low so overriding is easy.
