import React from 'react'
import { useStateContext } from "../contexts/ContextProvider";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  text,
  size,
  borderRadius,
  width,
}) => {
  const { setIsClicked, initialState } = useStateContext();
  return (
    <button
      type="button"
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor} w-${width}`}
      onClick={() => setIsClicked(initialState)}
    >
      {icon} {text}
    </button>
  );
};

export default Button