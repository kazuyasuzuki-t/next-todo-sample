import { useContext } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  ThemeModeProvider,
  ThemeModeContext,
} from "@/context/ThemeModeContext";
import { lightTheme, darkTheme } from "@/styles/theme";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeModeProvider>
      <AppContent Component={Component} pageProps={pageProps} router={router} />
    </ThemeModeProvider>
  );
}

function AppContent({ Component, pageProps }: AppProps) {
  const { isDarkMode } = useContext(ThemeModeContext);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
