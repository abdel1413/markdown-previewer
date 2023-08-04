import React, { useState } from "react";
import { FaArrowsAlt, FaCompressAlt, FaFreeCodeCamp } from "react-icons/fa";

import "../styles/editor.css";

export function Editor({ editText, handleTextearea }) {
  let [visibility, setVisibility] = useState("hidden");
  let [compress, setCompress] = useState("block");
  let [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    let compressClass = document.getElementsByClassName("compressor_")[0];
    let comp = document.getElementsByClassName("editor-arrow")[0];

    let textarea = document.getElementsByClassName("editor")[0];

    if (isOpen) {
      setVisibility("block");
      setCompress("hidden");

      comp.className.baseVal = "";
      compressClass.className.baseVal = " compressor_ compressor";
      textarea.style.height = "100vh";
      setIsOpen(false);
    } else {
      setVisibility("hidden");
      setCompress("block");
      comp.className.baseVal = "editor-arrow";
      compressClass.className.baseVal = "";
      textarea.style.height = "initial";
      setIsOpen(true);
    }
  };

  // const handleChange = (e) => {
  //   setText(e.target.value);
  //   editText = e.target.value;
  //   console.log("edit", editText);
  // };

  return (
    <div className="editor-wrapper">
      <div className="editor-preview">
        <div id="editor-toolbar">
          <FaFreeCodeCamp title="no-stack-dud-sack" id="editor-fafreecode" />
          Editor
          <FaArrowsAlt
            className="editor-arrow"
            onClick={handleClick}
            visibility={compress}
          />
          <FaCompressAlt
            className="compressor_"
            onClick={handleClick}
            visibility={visibility}
          />
        </div>
        <textarea
          type="text"
          id="editor"
          className="editor"
          value={editText}
          onChange={handleTextearea}
        ></textarea>
      </div>
    </div>
  );
}
