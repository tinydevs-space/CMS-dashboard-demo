import type { CommonColors } from '@mui/material/styles';

import type { ThemeCssVariables } from './types';
import type { PaletteColorNoChannels } from './core/palette';

// ----------------------------------------------------------------------

type ThemeConfig = {
  classesPrefix: string;
  cssVariables: ThemeCssVariables;
  fontFamily: Record<'primary' | 'secondary', string>;
  palette: Record<
    'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error',
    PaletteColorNoChannels
  > & {
    common: Pick<CommonColors, 'black' | 'white'>;
    grey: Record<
      '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
      string
    >;
  };
};

export const themeConfig: ThemeConfig = {
  /** **************************************
   * Base
   *************************************** */
  classesPrefix: 'minimal',
  /** **************************************
   * Typography
   *************************************** */
  fontFamily: {
    primary: 'Rajdhani, sans-serif', // Bold, modern font for rock aesthetic
    secondary: 'Inter, sans-serif', // Clean sans-serif for body text
  },
  /** **************************************
 * Palette
 *************************************** */
  palette: {
    // Electric Purple - Primary brand color
    primary: {
      lighter: '#d8b4fe', // Lighter for better hover contrast
      light: '#c084fc',
      main: '#9333ea', // Deep electric purple
      dark: '#7e22ce',
      darker: '#6b21a8',
      contrastText: '#FFFFFF',
    },
    // Neon Cyan - Secondary accent (Changed from Indigo for variety)
    secondary: {
      lighter: '#67e8f9',
      light: '#22d3ee',
      main: '#06b6d4', // Vibrant Cyan
      dark: '#0891b2',
      darker: '#0e7490',
      contrastText: '#000000',
    },
    // Neon Green - Success/accent color
    info: {
      lighter: '#6ee7b7',
      light: '#34d399',
      main: '#10b981', // Neon green
      dark: '#059669',
      darker: '#047857',
      contrastText: '#000000',
    },
    success: {
      lighter: '#6ee7b7',
      light: '#34d399',
      main: '#10b981',
      dark: '#059669',
      darker: '#047857',
      contrastText: '#000000',
    },
    // Electric Yellow - Warning
    warning: {
      lighter: '#fcd34d',
      light: '#fbbf24',
      main: '#f59e0b', // Electric yellow/amber
      dark: '#d97706',
      darker: '#b45309',
      contrastText: '#000000',
    },
    // Hot Pink - Error/danger
    error: {
      lighter: '#fda4af',
      light: '#fb7185',
      main: '#e11d48', // Hot pink/red
      dark: '#be123c',
      darker: '#9f1239',
      contrastText: '#FFFFFF',
    },
    // Dark greys for rock aesthetic (Refined for contrast)
    grey: {
      '50': '#09090b',  // Pitch black
      '100': '#18181b', // Very dark grey (background)
      '200': '#27272a', // Dark grey (cards)
      '300': '#3f3f46', // Borders
      '400': '#52525b', // Icons/Disabled
      '500': '#71717a', // Secondary text
      '600': '#a1a1aa', // Primary text (muted)
      '700': '#d4d4d8', // Primary text
      '800': '#e4e4e7', // Headings
      '900': '#fafafa', // Highlights
    },
    common: { black: '#000000', white: '#ffffff' },
  },
  /** **************************************
   * Css variables
   *************************************** */
  cssVariables: {
    cssVarPrefix: '',
    colorSchemeSelector: 'data-color-scheme',
  },
};
