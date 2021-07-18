// React - Next Imports
import { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

// Styling
import GlobalStyle from "../styles/global";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    console.log("In here:", theme.title);

    setTheme(theme.title === "light" ? dark : light);

    console.log("In here:", theme.title);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
