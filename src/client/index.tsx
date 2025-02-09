import React from 'react';
import { Container, createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container: Container = initProjectRoot();
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Initialize the root element of the project
 */
export function initProjectRoot() {
    const root = document.createElement('div');
    root.id = 'app-root';

    document.body.appendChild(root);
    return root;
}