import { useState } from "react";
import Contact from "./Pages/contact_form";
import Home from "./Pages/homescreen";
import Services from "./Pages/services";
import AboutUs from "./Pages/aboutus";
import NDTGoPaperless from "./Pages/ndt-go-paperless";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme.model";
import Layout from "./Pages/app_layout";

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setCurrentTheme(prev =>
      prev === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <BrowserRouter>
      
    <ThemeProvider theme={currentTheme}>
    <Layout toggleTheme={toggleTheme} />
      <Routes>

        <Route path="/" element={<NDTGoPaperless/>} />
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
