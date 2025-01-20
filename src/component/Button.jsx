import React from "react";
import "./Button.css";

export default function Button({ text, type, onCLick }) {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <button
      className={["Button", `Button_${btnType}`].join(" ")}
      onClick={onCLick}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  type: "default",
};
