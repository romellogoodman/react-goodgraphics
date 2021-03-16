# react-goodgraphics

[![npm version](https://badge.fury.io/js/react-goodgraphics.svg)](https://badge.fury.io/js/react-goodgraphics)

A set of components for working with SVGs in React. This library is a very thin-wrapper over native SVG functionality. This project is part of [goodgraphics.xyz](http://goodgraphics.xyz/)

## Usage

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
    <SVG
      height={400}
      width={400}
      style={{ background: "#1b1b1b", fill: "white" }}
    >
      <Circle x={200} y={200} radius={100} />
    </SVG>
  );
};

export default FooBar;
```

## API

NOTE: Detailed are props that we map to the native SVG markup. i.e. the `x` and `y` props on Circle get mapped to `cx` and `cy`. All valid html attributes are accepted and passed to the components.

### `SVG`

- `@prop {Number} height` Height of the svg. Defaults to 200.
- `@prop {Number} width` Width of the svg. Defaults to 200.

### `Circle`

- `@prop {String | Number} x` The x position for the shape.
- `@prop {String | Number} y` The y position for the shape.
- `@prop {String | Number} radius` The radius of the shape.

### `Ellipse`

- `@prop {String | Number} x` The x position for the shape.
- `@prop {String | Number} y` The y position for the shape.
- `@prop {String | Number} width` The width of the shape.
- `@prop {String | Number} height` The height of the shape.

### `Rect`

- `@prop {String | Number} x` The x position for the shape.
- `@prop {String | Number} y` The y position for the shape.
- `@prop {String | Number} width` The width of the shape.
- `@prop {String | Number} height` The height of the shape.

### `Square`

- `@prop {String | Number} x` The x position for the shape.
- `@prop {String | Number} y` The y position for the shape.
- `@prop {String | Number} size` The size of the square.

### `Line`

- `@prop {String | Number} x1` The x position of the start of the line.
- `@prop {String | Number} y1` The y position of the start of the line.
- `@prop {String | Number} x2` The x position of the end of the line.
- `@prop {String | Number} y2` The y position of the end of the line.

### `Times`

Runs the draw function x number of times.

- `@prop {Number} number` The number of times to run the loop.
- `@prop {Function} draw` The draw render prop function.

### `Grid`

Draw items across a grid.

- `@prop {Function} draw` The draw render prop function.
- `@prop {Number} columns` The number of columns.
- `@prop {Number} rows` The number of rows.
- `@prop {Number} height` Height of the svg. Defaults to svg's height.
- `@prop {Number} width` Width of the svg. Defaults to svg's width.
- `@prop {Number} margin` Margin between the edges and the grid. Defaults to 0.
