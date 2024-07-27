import React from "react";
import "../css/Header.css";

function ActionComp({ type }) {
  const { id, title, description, icon } = type;
  return (
    <div id={id} className="actions">
      <img src={icon} width={250} height={150}></img>
      <h4>{title}</h4>
      <h5>{description}</h5>
    </div>
  );
}

export default ActionComp;
