import React from "react";
import "../styles/previewWrapper.css";
import { FaArrowsAlt, FaFreeCodeCamp } from "react-icons/fa";
export function Preview() {
  return (
    <div className="preview-wrapper">
      <div id="toolbar">
        <FaFreeCodeCamp title="no-stack-dud-sack" id="fafreecode" />
        Preview
        <FaArrowsAlt className="arrow" />
      </div>
      <div className="preview">
        <h1>Welcome to my React Markdown Previewer!</h1>
        <h2>This is a sub-heading...</h2>
        <h3>And here is some other cool stuff:</h3>
        <p>
          Here's some code,
          <code>{"<div></div>"}</code>
          ,between 2 backticks.
        </p>
        <pre>
          <code>
            <span className="comment">//this is multi-line code:</span>
            <br />
            <span className="keyword"> function </span>
            <span className="function"> anotherExample</span>
            <span className="punctuation">(</span>
            <span className="parameter">
              firstLine <span className="punctuation">,</span>
              lastLine
            </span>
            <span className="punctuation">)</span>
            <span className="punctuation">{"{"}</span>
            <br />
            <span className="keyword if "> if</span>
            <span className="puntuation">(</span>
            firstLine
            <span className="operator">{"=="}</span>
            <span className=" string">'```'</span>
            <span className="operator">&&</span>
            lastLine
            <span className="operator">{"=="}</span>
            <span className=" string">'```'</span>
            <span className="punctuation">)</span>
            <span className="punctuation">{"{"}</span>
            <br />
            <span className="keyword return">return </span>
            MultiLineCode
            <span className="punctuation">;</span>
            <br />
            <span className="punctuation close">{"}"}</span>
            <br />
            <span className="punctuation close-end ">{"}"}</span>
          </code>
        </pre>
        <p>
          You can also make text <strong>bold </strong>
          ...whoa!
          <br />
          Or <em>italic</em>
          .
          <br />
          Or... wait for it...
          <strong>
            <em>both!</em>
          </strong>
          <br />
          And fell free to go crazy
          <del> crossing stuff out</del>.
        </p>
        <p>
          {" "}
          There's also{" "}
          <a href="" target="_blank">
            links{" "}
          </a>
          and
          <blockquote>
            <p> Block Quotes! </p>
          </blockquote>
        </p>
        <p> And if you want to get really crazy, even tables: </p>
        <table>
          <thead>
            <tr>
              <th> Wild Header </th>
              <th> Crazy Header </th>
              <th> Another Header </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Your content can </td>
              <td> be here, and it </td>
              <td> can be here... </td>
            </tr>
            <tr>
              <td> And here </td>
              <td> Okay </td>
              <td> I think we get it </td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>
            And of course there are lists.
            <ul>
              <li>
                Some are bulleted
                <ul>
                  <li>
                    {" "}
                    With different identations levels
                    <ul>
                      <li> That look like this.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ol>
          <li> And there are number list too </li>
          <li>Use just 1s if you want!</li>
          <li> And last but not least let's not forget embedded images: </li>
        </ol>
        <p>
          <img
            src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg"
            alt="freeCodeCamp Logo"
          />
        </p>
      </div>
    </div>
  );
}
