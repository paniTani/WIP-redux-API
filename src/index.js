import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore , applyMiddleware} from 'redux'
import reducer from './reducers'
// import reducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App'

// console.log(store.getState()) // logs 0

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
