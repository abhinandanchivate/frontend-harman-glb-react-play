import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createGlobalStyle } from "styled-components";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import "./i18n/config";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif, 'Arial', 'Noto Sans Arabic', 'Microsoft YaHei';
    direction: ${(props) => props.dir};
  }
`;

function App() {
  const { t, i18n } = useTranslation();
  const direction = i18n.dir();

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = i18n.language;
  }, [i18n.language, direction]);

  return (
    <Router>
      <GlobalStyle dir={direction} />
      <header
        style={{
          background: "#2d3748",
          color: "white",
          padding: "16px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{ fontSize: "24px", fontWeight: "bold" }}
            data-testid="logo"
          >
            GlobalMart 🛒
          </div>
          <nav
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <Link to="/" style={{ color: "white" }} data-testid="nav-home">
              {t("nav.home")}
            </Link>
            <Link
              to="/product"
              style={{ color: "white" }}
              data-testid="nav-products"
            >
              {t("nav.products")}
            </Link>
            <Link
              to="/checkout"
              style={{ color: "white" }}
              data-testid="nav-cart"
            >
              {t("nav.cart")}
            </Link>
            <Link
              to="/account"
              style={{ color: "white" }}
              data-testid="nav-account"
            >
              {t("nav.account")}
            </Link>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>
      <main style={{ minHeight: "calc(100vh - 200px)" }}>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </main>
      <footer
        style={{
          background: "#1a202c",
          color: "white",
          padding: "32px",
          textAlign: "center",
          marginTop: "64px",
        }}
      >
        <p>© 2024 GlobalMart. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
