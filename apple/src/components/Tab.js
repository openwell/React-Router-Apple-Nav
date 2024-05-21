import React from "react";
import uuid from "uuid/v1";
import "../App.css";

function tab(props) {
  return (
    <div className="navImageWrapper">
      {props.data.map(elem => (
        <div key={uuid()}>
          <img className="navImage" src={elem.img} alt="" /> <br />
          <span>{elem.name}</span>
        </div>
      ))}
    </div>
  );
}

export default tab;
