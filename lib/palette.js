const colors = require('./colors');

module.exports = {
  type: 'light',
  common: {
    black: colors.black,
    white: colors.white,

    blue: colors.blue_100, // coach marks,
    green: colors.green_500, // success, start video,
    yellow: colors.yellow_500, // error, warning
    orange: colors.orange_500, // error, warning
  },
  primary: {
    main: colors.off_black, // "off_black"
    contrastText: colors.white,
    text: colors.white,
  },
  secondary: {
    main: colors.red_500, // logo, CTA
    text: colors.white, // logo, CTA
    contrastText: colors.white,
    100: colors.red_100, // disabled?
    400: colors.red_400, // a:hover, primary CTAs
    500: colors.red_500, // logo, CTA
    V500: colors.red_v500, // A500? Pictogram highlight, Links on “black” background
  },
  error: {
    main: colors.yellow_500,
    text: colors.black,
    contrastText: colors.black,
  },
  grey: {
    100: colors.grey_100,
    200: colors.grey_200, // disabled | background
    300: colors.grey_300, // avatar | background
    400: colors.grey_400, // textfield hints
    500: colors.grey_500,
    600: colors.grey_600, // textfield labels
    // 700: '#7D7D82', // secondary text
    700: colors.grey_700, // secondary text
    800: colors.grey_800, // secondary text
    900: colors.grey_900, // 800? // Btn, notifications
    V900: colors.grey_V900, // Btn :hover :active
  },

  background: {
    default: colors.white,
  },
};
