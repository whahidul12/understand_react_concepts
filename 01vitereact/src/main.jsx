import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

function Ollyo() {
    return (
        <>
            <h1>ollyo.........................!!!!!!!!!!!</h1>
        </>
    );
}

const ReactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank",
    },
    children: "Click me to visit google",
};

const AnotherElement = React.createElement(
    "p",
    {
        title: "This is a tooltip",
        // style: "color: red",
    },
    `this is a div <br/>`
);

createRoot(document.getElementById("root")).render(AnotherElement);
