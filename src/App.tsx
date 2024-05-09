import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Overlay from "./pages/Overlay";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Customizer from "./pages/Customizer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Overlay />} />
            <Route path="/customizer" element={<Customizer />} />

            <Route path="/customiser" element={<Navigate to={"/customizer"} />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
