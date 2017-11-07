# Markdown Widget Challenge

## Learning Competencies

* Use basic JavaScript - functions, control structures, scope
* Build a pure JavaScript application
* Build a pure JavaScript class
* Write OO JavaScript

## Summary

The goal will be to create a "live" markdown preview widget in JavaScript.
When a user enters Markdown *text* inside a text area, the _rendered_ version
is displayed elsewhere on the page.

The goal is to use object-oriented JavaScript to construct a widget.  Ideally
you should be able to issue the command:

    MarkdownWidget("#source-id", "#preview-div")

Your goal in this challenge **is not** to write a Markdown parser (although that is certainly worth a stretch!) the goal is to produce an MVC architecture in a language _that has no inherent patterns on how to build one_!

## Releases

### Release -1

Your instructor may want you to try a simple implementation that _does not_ adhere to MVC principles.  It may be the instructors design built on the techniques you already know.  See if you should follow this path or if you should move directly to the MVC-based implementation.

### Release 0

Set up an object-oriented architecture (possibly [Model View Controller][MVC]
or [Model View Presenter][MVP]). As a first step, we won't do any actual markdown parsing. Instead, your code should watch the `keyup` event on a `textarea`, and pass the user's input through a function that replaces the content of the `<div id="preview">` with the contents of the textarea as they type.

We might call this "pass through function" a "transform function" because it will eventually transform the user's input into formatted HTML. For now this function shouldn't transform anything, we'll get to that part later:

```
function transform(input) {
  return input;
}
```

Later, we'll be implementing the actual transformation, but for now we're using it as a place holder to establish the flow of data through our UI and front-end code. A transform function that just passes data straight through is sometimes called an [identity transformation][identity] function.

### Release 1

Introduce the Markdown converter.  You need not implement the _full_
specification, but you should support `*`, `_`, and `**` for italics, italics,
and bold, respectively.

### Release 2

Swap out the transformation logic from *your* implementation to one provided by
a third party e.g. [markdown-js]

## Optimize your learning

Notice that sometimes it's helpful to delay the building of the algorithm until
later. Sometimes it's useful to confirm that the flow of information through your program works before you fill in every detail, preventing you from getting bogged down in the specifics.

## Resources

* [MVC][]
* [MVP][]
* [markdown-js][]

[identity]: http://en.wikipedia.org/wiki/Identity_transform
[MVC]: http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
[MVP]: http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter
[markdown-js]: https://github.com/evilstreak/markdown-js
