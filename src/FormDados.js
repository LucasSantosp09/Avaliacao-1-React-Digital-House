// src/ColorForm.js
import React, { useState } from "react";

function FormDados({ onColorSubmit }) {
  const [name, setName] = useState("");
  const [hex, setHex] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onColorSubmit({ name, hex });
    setName("");
    setHex("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Cor:
        <input type="text" value={hex} onChange={(e) => setHex(e.target.value)} />
      </label>
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormDados;
