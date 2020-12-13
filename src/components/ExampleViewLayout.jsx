import { useState } from "react";
import Link from "next/link";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { jsx } from "react-syntax-highlighter/dist/cjs/languages/prism";
import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import vs from "react-syntax-highlighter/dist/cjs/styles/prism/vs";

import Brand from "./Brand";
import FeatherIconCode from "./FeatherIconCode";
import FeatherIconMoon from "./FeatherIconMoon";
import FeatherIconMenu from "./FeatherIconMenu";
import FeatherIconClose from "./FeatherIconClose";

SyntaxHighlighter.registerLanguage("jsx", jsx);

const condClass = (value, classStyle) => (value ? ` ${classStyle}` : "");

const ExampleViewLayout = ({ children, title, example, codeString }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [showCodeSample, setShowCodeSample] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState("COPIAR");

  const toggleShowSideBar = () => setShowSideBar((prev) => !prev);

  const mainClass = `example__root${condClass(showSideBar, "show")}${condClass(
    darkMode,
    "dark"
  )}`;

  const CodeExampleModal = () => (
    <div className={`example-modal${condClass(showCodeSample, "show-modal")}`}>
      <div className="example-card">
        <div className="example-card__options">
          <button className="btn-copy" onClick={handleCopyCode}>
            {copyButtonText}
          </button>
          <button
            className="btn-close"
            onClick={() => setShowCodeSample((prev) => !prev)}
          >
            SALIR
          </button>
        </div>
        <div className="example-card_code">
          <SyntaxHighlighter
            language="jsx"
            showLineNumbers
            style={darkMode ? vscDarkPlus : vs}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );

  const CloseMenu = () => (
    <span onClick={toggleShowSideBar} className="menu-close-label">
      MENU
      <FeatherIconClose onClick={toggleShowSideBar} />
    </span>
  );

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopyButtonText("COPIADO!");
    setTimeout(() => setCopyButtonText("COPIAR"), 1000);
  };

  return (
    <main className={mainClass}>
      <div className="example__sidebar">
        {/* CONTENT */}
        <div className="example__sidebar__content">
          <div className="brand__wrapper">
            <Brand />
            <CloseMenu />
          </div>
          <Link href="/ejemplos">
            <a className="back-link">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 4L17 6L11 12L17 18L15 20L7 12L15 4Z"
                  fill="#399CF7"
                />
              </svg>
              Ver más ejemplos
            </a>
          </Link>

          <h1>{title}</h1>
          <div className="example__sidebar__children">{children}</div>
        </div>
      </div>
      <div className="example__content">
        {/* EXAMPLE RENDER */}
        {example}
        {/* MAPS OPTIONS */}
        <div className="example__content__options">
          <FeatherIconMenu onClick={toggleShowSideBar} />
          <FeatherIconMoon onClick={() => setDarkMode((prev) => !prev)} />
          <FeatherIconCode onClick={() => setShowCodeSample((prev) => !prev)} />
        </div>
        {/* CODE EXAMPLE MODAL */}
        <CodeExampleModal />
      </div>
    </main>
  );
};

export default ExampleViewLayout;
