import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useAtom } from "jotai";
import { isDarkThemeAtom } from "@/atoms";
import { lightTheme, darkTheme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode] = useAtom(isDarkThemeAtom);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
