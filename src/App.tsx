import React from "react";
import Header from "./Header"
import { css } from "@emotion/css"
import Title from "./title";
import Footer from "./Footer";
import Introduction from "./Introduction";
import Rule from "./Rule";
import Prize from "./Prize";
import Finish from "./Finish";
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <Title />
      <hr className={css`
        border-top: 2px dotted;
      `} />
      <Introduction />
      <Rule />
      <Prize />
      <Finish />
      <Footer />
    </>
  )
}

export default App
