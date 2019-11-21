import React from "react";

const Button = props => {
  let classList = "button";
  let label = "Join!";

  return (
    <button className={classList} onClick={props.onClick}>
      {label}
    </button>
  );
};

export default Button;
