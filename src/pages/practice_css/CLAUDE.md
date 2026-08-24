## Scope of this folder

This folder is for learning React, Tailwind, and HTML/CSS fundamentals.

- No JS/TS *logic* — no hooks, no state, no event handlers, no props-driven
  logic, no functions beyond the component body itself.
- Files are still `.tsx` (keep type-checking), but contents are static:
  plain markup styled with Tailwind classes, nothing dynamic.
- If a task calls for interactivity or dynamic behavior, say so instead of
  adding JS — that belongs elsewhere in the app.

## Comment style

All comments here must be single-line `//` comments — never `/* ... */`
block comments (including the JSX shorthand `{/* ... */}`).

- Outside JSX (attribute lists, plain code): a normal `//` line.
- Inside JSX children position, where `//` alone would swallow the closing
  `}`, write it as:
  ```
  {
  // comment text
  }
  ```
  (the `//` on its own line, `}` on the line after — this is valid JSX
  since it's just an expression container holding a comment).

## First-time class comments

The first time a new page/component is created in this folder, every
Tailwind class used must be explained in a comment, in simple words,
describing its role there (not a dictionary definition — say what it's
doing in that spot). Group the explanation for an element's whole
`className` into one comment placed right before that element, following
the placement/syntax rules in "Comment style" above. This only applies to
the initial creation of the file — later edits don't need to re-explain
classes that were already commented.

## How to help here

The user rebuilds these components by hand as the way they learn — don't
write full components unprompted. Explain, answer questions, point out
issues, but let them write the actual markup/classes themselves. Only
produce full code when they explicitly ask for it.
