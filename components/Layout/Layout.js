import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <section className="header-main">
        <Header />
      </section>

      <div>{children}</div>
      
      <section className="footer-main">
        <Footer />
      </section>
    </>
  );
}
