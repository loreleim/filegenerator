# File Generator

a file generator for code snippets

<img align="center" alt="redesign of thumbnails" width="500px" src="https://github.com/loreleim/filegenerator/blob/master/src/images/thumbnail.png?raw=true" />

1. [Overview](#overview)
1. [Installing for Development](#installing)
1. [Running](#running)
1. [Syntax Standards](#syntax-standards)

## Overview

This web app takes advantage of the following React.js features

- [ ] [Blob API](https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob)
- [ ] [JSZIP Maybe?](https://stackoverflow.com/questions/43097159 import-jszip-in-angular-2-project)

## Installing for Development

Make sure to create a new branch if developing. Do all atomic pushes in here.

```
github desktop > new branch > name it [firstname-develop]
```

Go to folder directory

```
cd filegenerator
```

& install all dependencies

```
npm install
```

## Running

```
npm run start
```

## Syntax Standards

The following repo utilizes the following syntax standards in development. When implementing bugs or fixes, continue to use these standards. All scss, variables and functions are to follow [camelCase](https://medium.com/better-programming/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841) standards. Example below.

```
.firstwordSecondword
thisIsAFunction()
```

For css styling and measurements. Always & only use the following:

```
rem
px
vh
vw
%
```

## Component Structure

As of Feb 2021. The following project utilizes a component structure over a page one. In this structure, performance.now() tests are intended to be easily ran on components instead of having to go to separate urls. This decreases resources needed instead of a browser-router dependency.

## Blob Research

Syntax for making a blob

```
var newBlob = new Blob(array, options);
```

Syntax example

```
var newBlob = new Blob(array, options);
```

[Available MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

```
{type : 'application/json'}
```

## How do you get line breaks and spaces?

1. [This is promising](https://dev.to/blacksonic/the-secret-power-of-json-stringify-393b)

Maybe something like this, needs to be tested.
syntax is (array, null (for spaces), tabs desired)

```
console.log(JSON.stringify(secondItem, null, 8));
```

```
const secondItem = {
  title: 'Transformers',
  year: 2007,
}
```

## JSZip Research

1. [Utilizing JSZIP with Angular + Blob API](https://www.youtube.com/watch?v=LKcF2K6kLU0&ab_channel=TheSwagCoder)
1. [Debugging](https://stackoverflow.com/questions/43097159/import-jszip-in-angular-2-project)

[Back to Top](#file-generator)
