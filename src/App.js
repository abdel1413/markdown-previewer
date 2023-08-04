import { marked } from "marked";
import { useState } from "react";
import "./App.css";
import { Editor } from "./Components/Editor";
import { Preview } from "./Components/Preview";
import { string } from "./Components/String";

function App() {
  const [text, setText] = useState(string);

  //header (H1 size), a sub header (H2 size), a link,
  //inline code, a code block, a list item, a blockquote,
  //an image, and bolded text

  // set carriage to return and renders as line break <br>
  marked.setOptions({
    breaks: true,
  });

  const handleTextearea = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <Editor editText={text} handleTextearea={handleTextearea} />
      <Preview previewText={text} />
    </div>
  );
}

export default App;
