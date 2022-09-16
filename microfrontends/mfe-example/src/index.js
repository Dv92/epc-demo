import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.css';
import App from './App';

class MfeExample extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render()
  }

  render() {
    const element = document.createElement('div');
    const styleElement = document.createElement('style');

    styleElement.innerHTML = styles.toString();

    const root = ReactDOM.createRoot(element);

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    this.shadowRoot.appendChild(styleElement);
    this.shadowRoot.appendChild(element);
  }
}

customElements.define('mfe-example', MfeExample);