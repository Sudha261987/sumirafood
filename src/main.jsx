import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import {AuthProvider} from "./AuthContext";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Route path="/" element={<App />} />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
);