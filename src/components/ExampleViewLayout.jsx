import { useState } from "react";
import Link from "next/link";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { jsx } from "react-syntax-highlighter/dist/cjs/languages/prism";
import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import vs from "react-syntax-highlighter/dist/cjs/styles/prism/vs";

import Brand from "./Brand";

SyntaxHighlighter.registerLanguage("jsx", jsx);

const condClass = (value, classStyle) => (value ? ` ${classStyle}` : "");

const ExampleViewLayout = ({ children, title, description, codeString }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [showCodeSample, setShowCodeSample] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState("COPIAR");

  const toggleShowSideBar = () => setShowSideBar((prev) => !prev);

  const mainClass = `example__root${condClass(showSideBar, "show")}${condClass(
    darkMode,
    "dark"
  )}`;

  const FeatherIconCode = () => (
    <svg
      onClick={() => setShowCodeSample((prev) => !prev)}
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="icon"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.6308 16.9998L22.381 25.2496L20.319 23.186L26.5052 16.9998L20.319 10.8121L22.381 8.75L30.6308 16.9998ZM8.49917 16.9998L14.6869 23.186L12.6248 25.2496L4.375 16.9998L12.6248 8.75L14.6869 10.8121L8.49917 16.9998Z"
        fill="#333333"
      />
    </svg>
  );

  const FeatherIconMoon = () => (
    <svg
      onClick={() => setDarkMode((prev) => !prev)}
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="icon"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.9146 4.375C17.113 5.40003 15.6161 6.88546 14.5773 8.67919C13.5384 10.4729 12.995 12.5105 13.0025 14.5833C13.0025 21.0263 18.1388 26.25 24.4738 26.25C26.145 26.25 27.7346 25.8854 29.1667 25.2321C26.8188 28.5017 23.0227 30.625 18.7382 30.625C11.6113 30.625 5.83337 24.7479 5.83337 17.5C5.83337 10.2521 11.6113 4.375 18.7382 4.375H18.9132H18.9146Z"
        fill="#333333"
      />
    </svg>
  );

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopyButtonText("COPIADO!");
    setTimeout(() => setCopyButtonText("COPIAR"), 1000);
  };

  return (
    <main className={mainClass}>
      <div className="example__sidebar">
        {/* BUTTON MENU */}
        <button
          onClick={toggleShowSideBar}
          className={`menu-togle${condClass(showSideBar, "active")}`}
        >
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
              className="svg"
              d="M3 16H21V18H3V16ZM3 11H21V13H3V11ZM3 6H21V8H3V6Z"
              fill="black"
            />
          </svg>
        </button>
        {/* CONTENT */}
        <div className="example__sidebar__content">
          <div className="brand__wrapper">
            <Brand />
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
          <p>{description}</p>
        </div>
      </div>
      <div className="example__content">
        {/* EXAMPLE RENDER */}
        {children}
        {/* MAPS OPTIONS */}
        <div className="example__content__options">
          <FeatherIconMoon />
          <FeatherIconCode />
        </div>
        {/* CODE EXAMPLE MODAL */}
        <div
          className={`example-modal${condClass(showCodeSample, "show-modal")}`}
        >
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
      </div>
    </main>
  );
};

export default ExampleViewLayout;
