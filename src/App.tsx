import React from "react";
import GlobalStyle from "./ui/styles/global";
import Header from "./ui/Layout/Header/Header";
import Content from "./ui/Layout/Content/Content";
import Footer from "./ui/Layout/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
