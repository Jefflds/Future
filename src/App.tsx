import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./Layout/Header/Header";
import Content from "./Layout/Content/Content";
import Footer from "./Layout/Footer/Footer";

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
