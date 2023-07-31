import React, { useRef, useState } from "react";
import { FaArrowsAlt, FaCompressAlt, FaFreeCodeCamp } from "react-icons/fa";

import "../styles/editor.css";

export function Editor(props) {
  let [text, setText] = useState("");
  let [visibility, setVisibility] = useState("hidden");
  let [compress, setCompress] = useState("block");
  let [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    let compressClass = document.getElementsByClassName("compressor_")[0];
    let comp = document.getElementsByClassName("editor-arrow")[0];
    let previewEd = document.getElementsByClassName("editor-preview")[0];

    if (isOpen) {
      setVisibility("block");
      setCompress("hidden");

      console.log("com", comp.classList);
      console.log("compresc", compressClass.classList);
      //comp.className.baseVal = "";
      comp.classList.remove();
      //compressClass.className.baseVal = "compressor";
      compressClass.classList.toggle("compressor");
      previewEd.classList.toggle("maximized");
      console.log(previewEd.classList);
      console.log(compressClass.classList);

      setIsOpen(false);
    } else {
      setVisibility("hidden");
      setCompress("block");
      //previewEd.className = "editor-preview";

      comp.className.baseVal = "editor-arrow";
      // compressClass.className.baseVal = "";
      comp.classList.toggle("editor-arrow");
      compressClass.classList.remove();
      console.log(previewEd.classList);
      setIsOpen(true);
    }
  };
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
        <textarea type="text" id="editor" className="editor"></textarea>
      </div>
    </div>
  );
}
