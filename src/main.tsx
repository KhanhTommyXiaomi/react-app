import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'

import './languages'
import store from './store.redux/store'

const rootContainerEl = document.getElementById('root') as HTMLElement
const ReactDOMRoot = ReactDOM.createRoot(rootContainerEl)

ReactDOMRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
)
