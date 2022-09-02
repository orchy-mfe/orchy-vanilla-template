import './style.css'
import {renderWithQiankun, qiankunWindow} from 'vite-plugin-qiankun/dist/helper'
import viteLogo from './assets/vite.svg?raw'
import javascriptLogo from './assets/javascript.svg?raw'
import {setupCounter} from './counter.js'

const retrieveContainer = props => props.container ?? document

const render = (props) => {
  const container = retrieveContainer(props)
  container.querySelector('#app').innerHTML = `
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

renderWithQiankun({
  mount(props) {
    render(props)
  },
  bootstrap() { },
  unmount(props) {
    retrieveContainer(props).innerHTML = ''
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}