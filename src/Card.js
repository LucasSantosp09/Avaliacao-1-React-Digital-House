import React from "react";
import "./Estilo.css";

function Card({ color }) {
  return (
    <div className="color-card">
      <div className="color-box" style={{ backgroundColor: color.hex }}>
        <p className="text-name">{color.name}</p>
        <p className="text-cor">{color.hex}</p>
      </div>
      
    </div>
  );
}

export default Card;
