# react-goodgraphics

[![npm version](https://badge.fury.io/js/react-goodgraphics.svg)](https://badge.fury.io/js/react-goodgraphics)

A set of components for working with SVGs in React.

### Install

```
npm i react-goodgraphics
```

### Use

```js
import React from "react";
import { SVG, Circle } from "react-goodgraphics";

const FooBar = () => {
  return (
    <SVG height={400} width={400}>
      <Circle x={200} y={200} radius={100} />
    </SVG>
  );
};

export default FooBar;
```
