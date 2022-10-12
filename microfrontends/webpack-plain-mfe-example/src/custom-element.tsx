import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import * as styles from 'index.css';
import { App } from './App';

class WebpackPlainMfeExample extends HTMLElement {
  #rootID: string = 'mfe-root'
  #styleID: string = 'mfe-style'
  #appInstance: ReactDOM.Root | null = null
  shadowRoot: ShadowRoot

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render()
  }

  cleanTree() {
    const currentElement = this.shadowRoot.getElementById(this.#rootID);

    if (currentElement) {
      this.shadowRoot.removeChild(currentElement);
    }

    const currentStyleElement = this.shadowRoot.getElementById(this.#styleID);

    if (currentStyleElement) {
      this.shadowRoot.removeChild(currentStyleElement);
    }

    this.#appInstance?.unmount();
  }

  render() {
    const element = document.createElement('div');
    const styleElement = document.createElement('style');

    styleElement.innerHTML = styles.toString();

    styleElement.id = this.#styleID;
    element.id = this.#rootID;

    this.cleanTree();

    this.#appInstance = ReactDOM.createRoot(element);

    this.#appInstance.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    this.shadowRoot.appendChild(styleElement);
    this.shadowRoot.appendChild(element);
  }
}

customElements.define('webpack-plain-mfe-example', WebpackPlainMfeExample);