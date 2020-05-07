const colors = require('./lib/colors');
const typography = require('./lib/typography');
const { breakpoints, mq } = require('./lib/breakpoints');

const spacingUnit = 8;

module.exports = {
  spacing: spacingUnit,
  breakpoints: { values: breakpoints },
  palette: {
    primary: { main: colors.grey_V900, light: colors.red_500 },
    secondary: { main: colors.red_500 },
    error: { main: colors.yellow_500 },
    text: {
      primary: colors.off_black,
      secondary: colors.grey_700,
    },
  },
  typography: {
    ...typography.body1,
    h1: typography.h1,
    h2: typography.h2,
    h3: typography.h3,
    h4: typography.h4,
    h5: typography.h3,
    h6: typography.h3,
    subtitle1: typography.h2,
    subtitle2: typography.h3,
    body1: typography.body1,
    body2: typography.body2,
    caption: typography.body2,
    button: {
      ...typography.button,
      textTransform: 'inherit',
    },
    overline: typography.body2,
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
    },
    MuiDialog: {
      paper: {
        marginLeft: 24,
        marginRight: 24,
        boxShadow: '0 2px 60px rgba(0, 0, 0, 0.4)',
        borderRadius: 8,
      },
      paperFullWidth: {
        width: `calc(100% - 48px)`,
      },
    },
    MuiDialogTitle: {
      root: {
        padding: `0 32px`,
        '&:first-child': { paddingTop: 32 },
        '&:last-child': { paddingBottom: 32 },
      },
    },
    MuiDialogContent: {
      root: {
        padding: `16px 32px 0`,
        '&:first-child': { paddingTop: 32 },
        '&:last-child': { paddingBottom: 32 },
      },
    },
    MuiDialogActions: {
      root: {
        padding: `24px 32px 0 32px`,
        '&:first-child': { paddingTop: 32 },
        '&:last-child': { paddingBottom: 32 },
        display: 'flex',
        flexDirection: 'column',
        [mq.xs]: {
          flexDirection: 'row',
        },
      },
      spacing: {
        '& > *': {
          width: '100%',
          flex: 1,
        },
        '& > * + *': {
          marginTop: 16,
          marginLeft: 0,
          [mq.xs]: {
            marginTop: 0,
            marginLeft: 16,
          },
        },
      },
    },
    MuiButton: {
      root: {
        borderRadius: 99,
        boxShadow: 'none',
        minHeight: 40,
        [mq.isHoverable]: {
          '&:hover': {
            backgroundColor: colors.grey_100,
          },
        },
      },
      sizeLarge: {
        minHeight: 50,
      },
      label: {
        textTransform: 'none',
      },
      outlined: {
        border: `1px solid ${colors.grey_500}`,
        padding: '8px 16px',
        backgroundColor: 'white',
      },
      outlinedSecondary: {
        borderColor: colors.red_500,
      },
      contained: {
        // no shadow for default buttons
        boxShadow: 'none',
      },
      containedSecondary: {
        backgroundColor: colors.red_500,
      },
    },
    MuiFab: {
      root: {
        height: 56,
        width: 56,
        boxShadow: 'none',
      },
      sizeSmall: {
        height: 40,
        width: 40,
      },
    },
    MuiFormControlLabel: {
      label: typography.body1,
    },
    MuiFormLabel: {
      root: typography.body1,
    },
    MuiInputBase: {
      // Beware, anything smaller than 16px (fontsize)
      // and iOS will zoom into the input field.
      input: typography.body1,
    },
    MuiFilledInput: {
      root: {
        backgroundColor: colors.grey_100,
        '&.Mui-focused': {
          backgroundColor: colors.grey_100,
        },
      },
    },
    MuiMenuItem: {
      root: typography.body1,
    },
    MuiTab: {
      textColorPrimary: {
        color: colors.off_black,
      },
    },
    MuiFormHelperText: {
      root: {
        color: colors.orange_500,
      },
    },
  },
};
