import { useState } from "react";
import Contact from "./Pages/contact_form";
import Home from "./Pages/homescreen";
import Services from "./Pages/services";
import AboutUs from "./Pages/aboutus";
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
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
