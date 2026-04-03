import React, { useState } from "react";

import { IconProps } from "../../interfaces";
import { IconList } from "./list";

export default function Icon({
  name,
  data,
  onClose,
  onClick,
  dark = false,
  showLabel = true,
  copySuccessText = "Copied!",
}: IconProps) {
  const { path, viewBox = "0 0 24 24", color, e, label } = IconList[name];
  const [copied, setCopied] = useState(false);

  const handleOnButtonClicked = async () => {
    onClick && onClick(name); // callback

    if (name === "copy") {
      await e(encodeURIComponent(data.url), data.text, data.title);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 1000);
    } else {
      e(encodeURIComponent(data.url), data.text, data.title);
      onClose();
    }
  };

  return (
    <div className="rws-icon-wrapper">
      <button
        onClick={handleOnButtonClicked}
        aria-label={label || name}
        className="rws-icon"
        style={{
          background: dark ? "#FFFFFF" : color,
          opacity: copied ? 0.7 : 1,
        }}
      >
        <svg fill={`${dark ? "#000000" : "white"}`} viewBox={viewBox}>
          {path}
        </svg>
      </button>
      {showLabel && <span className="rws-label">{label || name}</span>}
      {copied && (
        <div className="rws-toast">
          {copySuccessText}
        </div>
      )}
    </div>
  );
}
