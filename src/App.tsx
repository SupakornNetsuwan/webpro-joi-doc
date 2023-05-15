import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import md from "./core/resources/markdown.md";

const App = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(md)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="prose max-w-[50em] mx-auto my-24">
      <ReactMarkdown children={markdown} />
    </div>
  );
};

export default App;
