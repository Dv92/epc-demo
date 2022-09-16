import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

class MfeExample extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    const element = document.createElement('div')

    const root = ReactDOM.createRoot(element);

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    this.appendChild(element)
  }
}

customElements.define('mfe-example', MfeExample);