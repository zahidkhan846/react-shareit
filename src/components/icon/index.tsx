import React from "react";

import { IconProps } from "../../interfaces";
import { IconList } from "./list";

export default function Icon({
  name,
  data,
  onClose,
  onClick,
  dark = false,
}: IconProps) {
  const { path, viewBox = "0 0 24 24", color, e } = IconList[name];

  const handleOnButtonClicked = () => {
    onClick && onClick(name); // callback
    e(encodeURIComponent(data.url), data.text, data.title);
    onClose();
  };

  return (
    <button
      onClick={handleOnButtonClicked}
      aria-label={name}
      className="rws-icon"
      style={{ background: dark ? "#FFFFFF" : color }}
    >
      <svg fill={`${dark ? "#000000" : "white"}`} viewBox={viewBox}>
        {path}
      </svg>
    </button>
  );
}
