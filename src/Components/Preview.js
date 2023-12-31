import React, { useState } from "react";
import "../styles/previewWrapper.css";
import { marked } from "marked";

import { FaArrowsAlt, FaCompressAlt, FaFreeCodeCamp } from "react-icons/fa";
export function Preview({ previewText }) {
  const [isVisible, setIsVisible] = useState("hidden");
  const [arrow, setArrow] = useState("block");
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    let prev = document.getElementsByClassName("preview-wrapper")[0];
    let compressor = document.getElementsByClassName("compressor")[0];
    if (isOpen) {
      setIsVisible("block");
      setArrow("hidden");

      setIsOpen(!isOpen);

      prev.classList.add("max");
      console.log("compress", compressor);
    } else {
      setIsVisible("hidden");
      setArrow("block");
      setIsOpen(true);
      prev.classList.remove("max");
    }
  };
  return (
    <div className="preview-wrapper">
      <div id="toolbar">
        <FaFreeCodeCamp title="no-stack-dud-sack" id="fafreecode" />
        Preview
        <FaArrowsAlt
          className="arrow"
          onClick={handleClick}
          visibility={arrow}
        />
        <FaCompressAlt
          className="compress"
          visibility={isVisible}
          onClick={handleClick}
        />
      </div>
      <div
        className="preview"
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(previewText) }}
      ></div>
    </div>
  );
}

// note: instead of parsing {marked.parse(previewText)} we'd
// preferred to use dangerouslySetInnerHTML= {{_html:marked(the html text to convert)}}
// into litteral
