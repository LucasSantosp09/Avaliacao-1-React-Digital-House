// src/App.js
import React, { useState } from "react";
import "./App.css";
import FormDados from "./FormDados";
import Card from "./Card";

function App() {
  const [colors, setColors] = useState([]);

  const addColor = (color) => {
    setColors([...colors, color]);
  };

  return (
    <div className="App">
      <h1>Adicionar Nova Cor</h1>
      <FormDados onColorSubmit={addColor} />
      <h2>Cores Favoritas</h2>
      <div className="color-cards">
        {colors.map((color, index) => (
          <Card key={index} color={color} />
        ))}
      </div>
    </div>
  );
}

export default App;
