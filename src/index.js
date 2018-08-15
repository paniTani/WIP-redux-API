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
import { BrowserRouter, Route } from 'react-router-dom'

import BooksList from './containers/BooksList'
import BookInfo from './containers/BookInfo'

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)
//
// store.subscribe(()=>{
//     console.log("store: "+ store.getState());
// })

// console.log("store.getState()" + store.getState())

ReactDOM.render(
    <Provider store={store}>

        {/*<BrowserRouter>*/}
            {/*<Route path="/" component={App} />*/}
        {/*</BrowserRouter>*/}

        {/*<App/>*/}
        <BrowserRouter>
            <div>
                <Route exact path="/" component={ BooksList } />
                <Route path="/bookinfo" component={ BookInfo } />

            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
