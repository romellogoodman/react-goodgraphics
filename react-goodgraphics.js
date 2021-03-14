import React from "react";

/**
 ********************
 * Utils
 ********************
 */

/**
 * Map a number from one range to another range
 * https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56
 */
const map = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

/**
 ********************
 * Components
 ********************
 */

export const SVG = (props) => {
  const { children, height, width, ...restProps } = props;

  return (
    <svg height={height} width={width} {...restProps}>
      {children}
    </svg>
  );
};

export const Circle = (props) => {
  const { x, y, radius, ...restProps } = props;

  return <circle cx={x} cy={y} r={radius} {...restProps} />;
};

export const Ellipse = (props) => {
  const { x, y, height, width, ...restProps } = props;

  return <ellipse cx={x} cy={y} rx={height} ry={width} {...restProps} />;
};

export const Rect = (props) => {
  const { x, y, height, width, ...restProps } = props;

  return <rect x={x} y={y} height={height} width={width} {...restProps} />;
};

export const Square = (props) => {
  const { x, y, size, ...restProps } = props;

  return <rect x={x} y={y} height={size} width={size} {...restProps} />;
};

export const Line = (props) => {
  const { x1, y1, x2, y2, ...restProps } = props;

  return <line x1={x1} y1={y1} x2={x2} y2={y2} {...restProps} />;
};

export const Times = (props) => {
  const { draw, number } = props;

  return new Array(number).fill(null).map((_, index) => draw({ index }));
};

export const Grid = (props) => {
  const { columns, rows, draw, height, width, margin } = props;

  return new Array(columns).fill(null).map((_, colIndex) => {
    return new Array(rows).fill(null).map((_, rowIndex) => {
      const halfMargin = margin / 2;
      const posX = map(colIndex, 0, columns, halfMargin, width - halfMargin);
      const posY = map(rowIndex, 0, rows, halfMargin, height - halfMargin);
      const cellHeight = (height - margin) / rows;
      const cellWidth = (width - margin) / columns;

      return draw({
        colIndex,
        rowIndex,
        posX,
        posY,
        cellHeight,
        cellWidth,
      });
    });
  });
};
