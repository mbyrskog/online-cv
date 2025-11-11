import { createTheme, Theme } from "@mui/material/styles";

const sharedConfig = {
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 700 },
    h3: { fontSize: "1.75rem", fontWeight: 700 },
    h4: { fontSize: "1.5rem", fontWeight: 700 },
    h5: { fontSize: "1.25rem", fontWeight: 700 },
    h6: { fontSize: "1rem", fontWeight: 700 },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          lineHeight: 1.6,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          textDecoration: "none",
          color: theme.palette.secondary.dark,
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          color: "#fff",
        },
      },
    },
  },
};

// Dark theme
export const darkTheme = createTheme({
  ...sharedConfig,
  palette: {
    mode: "dark",
    primary: {
      light: "#FFB74D",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#FFB74D",
      main: "#FF9800",
      dark: "#F57C00",
      contrastText: "#000",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#fff",
      secondary: "#808080",
    },
  },
  components: {
    ...sharedConfig.components,
    MuiTypography: {
      styleOverrides: {
        ...sharedConfig.components.MuiTypography.styleOverrides,
        body1: {
          ...sharedConfig.components.MuiTypography.styleOverrides.body1,
          color: "#808080",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        ...sharedConfig.components.MuiDrawer.styleOverrides,
        paper: {
          backgroundColor: "#1e1e1e",
        },
      },
    },
  },
});

// Light theme
export const lightTheme = createTheme({
  ...sharedConfig,
  palette: {
    mode: "light",
    primary: {
      light: "#f4f4f4",
      main: "#3f50b5",
      dark: "#303f9f",
      contrastText: "#fff",
    },
    secondary: {
      light: "#FFCC80",
      main: "#FFB74D",
      dark: "#000066",
      contrastText: "#000",
    },
    background: {
      default: "#f4f4f4",
      paper: "#ffffff",
    },
    text: {
      primary: "#000",
      secondary: "#4f4f4f",
    },
  },
  components: {
    ...sharedConfig.components,
    MuiTypography: {
      styleOverrides: {
        ...sharedConfig.components.MuiTypography.styleOverrides,
        body1: {
          ...sharedConfig.components.MuiTypography.styleOverrides.body1,
          color: "#5e5e5e",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        ...sharedConfig.components.MuiDrawer.styleOverrides,
        paper: {
          backgroundColor: "#ffffff",
          color: "#000",
        },
      },
    },
  },
});
