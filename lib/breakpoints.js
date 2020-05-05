const breakpoints = {
  xs: 370,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1680,
};

const mq = {
  xs: `@media(min-width: ${breakpoints.xs}px)`,
  sm: `@media(min-width: ${breakpoints.sm}px)`,
  md: `@media(min-width: ${breakpoints.md}px)`,
  lg: `@media(min-width: ${breakpoints.lg}px)`,
  xl: `@media(min-width: ${breakpoints.xl}px)`,
};

const maxPageWidth = 1024;
const maxContentWidth = 850;

module.exports = { breakpoints, mq, maxPageWidth, maxContentWidth };
