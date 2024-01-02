import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";
import "./i18n/index";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { getMoviesService } from "./service/api";
import GlobalStyles from "./styles/global-styles";
import { dark, light } from "./theme";
import { Header, TestColors } from "./components";
import { Home } from "./pages";
import { Routes } from "./routes";

export default function App() {
  useEffect(() => {
    list();
  }, []);

  const list = () => {
    const params = {
      page: 1,
    };

    getMoviesService("popular", params).then((data) => {
      console.log(data);
    });
  };

  return (
    <ThemeProvider theme={light}>
      <HashRouter>
        <GlobalStyles />
        <Header />
        {/* <TestColors /> */}
        <Routes />
      </HashRouter>
    </ThemeProvider>
  );
}
