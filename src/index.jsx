import React from "react";
import { createRoot } from "react-dom/client";
import './index-optimized.css';
import App from './app';

const root = createRoot(document.getElementById("root"));
root.render(<App />);