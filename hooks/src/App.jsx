import "./App.css"
import React, { useState} from "react";
import Context from "./components/Context.jsx";
import Content from "./components/Content.jsx";

function App(){
  return (
    <>
    <Context>
      <Content />
    </Context>
    </>
  )
}

export default App;