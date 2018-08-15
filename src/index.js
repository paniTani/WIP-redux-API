import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore , applyMiddleware} from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Router} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './App'

const customHistory = createBrowserHistory()

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={customHistory}>
            <div>
                <App/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
