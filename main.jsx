import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorTest from './ErrorTest.jsx';

function App() {
  return <ErrorTest />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
