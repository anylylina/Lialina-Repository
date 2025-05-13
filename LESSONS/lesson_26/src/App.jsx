import React from "react";
import Component from "./Components/Component";
import "./App.css";

const items = [
  { id: 1, name: "item 1", price: 100 },
  { id: 2, name: "item 2", price: 200 },
  { id: 3, name: "item 3", price: 300 },
];

const App = () => {
  <Component items={items} />;
};

export default App;
