import React from 'react';
import ReactDOM from 'react-dom/client'; // New API for React 18+
import './styles/App.css'; // Global styles
import App from './App'; // Main app component
import { Provider } from 'react-redux'; // Redux provider
import store from './redux/store'; // Redux store

// Create the root element for React to render
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app wrapped with Redux Provider to make the store accessible to components
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
