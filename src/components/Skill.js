import React from "react";

const activeStyle = {
  color: "steelblue"
};

export default function Skill({
  skillClass,
  isActive,
  onMouseOver,
  onMouseOut
}) {
  const style = isActive ? activeStyle : null;
  return (
    <li onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <i className={skillClass} style={style} />
    </li>
  );
}
