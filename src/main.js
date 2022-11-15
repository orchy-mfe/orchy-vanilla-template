import './style.css'
import viteLogo from './assets/vite.svg?raw'
import javascriptLogo from './assets/javascript.svg?raw'
import {setupCounter} from './counter.js'

import OrchyMicroFrontend from '@orchy-mfe/spa-adapter'

export class VanillaMfe extends OrchyMicroFrontend {
  async mount() {
    this.getContainer().innerHTML = `
      <div>
        <a class="logo" href="https://vitejs.dev" target="_blank">
          ${viteLogo}
        </a>
        <a class="logo vanilla" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          ${javascriptLogo}
        </a>
        <h1>Hello Vite!</h1>
        <div class="card">
          <button id="counter" type="button"></button>
        </div>
        <p class="read-the-docs">
          Click on the Vite logo to learn more
        </p>
      </div>
    `

    setupCounter(document.querySelector('#counter'))
  }

  async unmount() {
    this.getContainer().innerHTML = ''
  }
}

customElements.define('vanilla-mfe', VanillaMfe)