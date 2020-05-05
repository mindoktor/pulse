const fontFamily = [
  'Graphik',
  // debug webfonts, the evil way =)
  // "'Comic Sans MS'",
  // fallback fonts
  '-apple-system',
  'BlinkMacSystemFont',
  "'Segoe UI'",
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  '"Open Sans"',
  '"Helvetica Neue"',
  'sans-serif',
].join(',');

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

module.exports = {
  h1: {
    fontFamily,
    fontSize: 36,
    fontWeight: fontWeights.bold,
    lineHeight: 1.1,
  },
  h2: {
    fontFamily,
    fontSize: 26,
    fontWeight: fontWeights.semiBold,
    lineHeight: 1.2,
  },
  h3: {
    fontFamily,
    fontSize: 18,
    fontWeight: fontWeights.medium,
    lineHeight: 1.2,
  },
  h4: {
    fontFamily,
    fontSize: 16,
    fontWeight: fontWeights.medium,
    lineHeight: 1.2,
  },
  body1: {
    fontFamily,
    fontSize: 16,
    fontWeight: fontWeights.regular,
    lineHeight: 1.5,
  },
  body2: {
    fontFamily,
    fontSize: 14,
    fontWeight: fontWeights.regular,
    lineHeight: 1.5,
  },
  button: {
    fontFamily,
    fontSize: 18,
    fontWeight: fontWeights.medium,
    lineHeight: 1.1,
  },
  buttonHero: {
    fontFamily,
    fontSize: 20,
    fontWeight: fontWeights.medium,
    lineHeight: 1.1,
  },
};
