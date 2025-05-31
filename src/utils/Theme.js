// theme.ts
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-inter)', // Default for all text

    // h1 uses Inter Tight
    h1: {
      fontFamily: 'var(--font-inter-tight)',
    },

    // Paragraphs and other variants use Inter Regular
    body1: {
      fontFamily: 'var(--font-inter)',
    },
    body2: {
      fontFamily: 'var(--font-inter)',
    },
    subtitle1: {
      fontFamily: 'var(--font-inter)',
    },
    subtitle2: {
      fontFamily: 'var(--font-inter)',
    },
  },
})

export default theme
