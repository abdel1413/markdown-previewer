import React, { useState } from "react";
import { FaArrowsAlt, FaFreeCodeCamp } from "react-icons/fa";

import "../styles/editor.css";

export function Editor() {
  let [text, setText] = useState("");

  const handleClick = () => {
    alert("arrow is clicked");
  };
  return (
    <div className="editor-wrapper">
      <div className="editor-preview">
        <div id="editor-toolbar">
          <FaFreeCodeCamp title="no-stack-dud-sack" id="editor-fafreecode" />
          Editor
          <FaArrowsAlt id="editor-arrow" onClick={handleClick} />
        </div>
        <textarea type="text" id="editor" className="editor"></textarea>
      </div>
    </div>
  );
}
