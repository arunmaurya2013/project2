import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navigation from './components/Navigation.jsx';
import Hero_section from './components/Hero_section.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navigation />
    <Hero_section/>
  </React.StrictMode>,
)
