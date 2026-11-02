import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return (
        <div>
            <h1>REACT PIPELINE PROJECT</h1>
            <h2>Jenkins Build Successful</h2>
            <p>This website is deployed using Jenkins Pipeline.</p>
            <p>GitHub → Jenkins → Build → Test → Deploy</p>
        </div>
    );
}

createRoot(document.getElementById("root")).render(<App />);
