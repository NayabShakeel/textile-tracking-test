// frontend/src/Dashboard.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Ensure there's an element with id="root" in public/index.html
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found. Make sure <div id='root'></div> exists in index.html");
}
