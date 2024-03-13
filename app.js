import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./src/components/header"
import Body from "./src/components/body";



const App = () => {
  return (
    <div className="main">
      <Header />
      <Body />
    </div>
  );
};





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
