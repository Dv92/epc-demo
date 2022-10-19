import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import styles from "./index.css";
import { App } from './App';

type StyleLoader = {
  use: (options: { target: HTMLElement }) => { target: HTMLElement }
}

const loader: StyleLoader = styles

class WebpackPlainMfeExample extends HTMLElement {
  #rootID: string = 'mfe-root'
  #appInstance: any = null
  shadowRoot: any

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

    this.#appInstance?.unmount();
  }

  render() {
    loader.use({ target: this.shadowRoot })

    const element = document.createElement('div');

    element.id = this.#rootID;

    this.cleanTree();

    this.#appInstance = ReactDOM.createRoot(element);

    this.#appInstance.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    this.shadowRoot.appendChild(element);
  }
}

customElements.define('webpack-plain-mfe-example', WebpackPlainMfeExample);
