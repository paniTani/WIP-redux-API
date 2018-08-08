import {createStore, applyMiddleware} from 'redux';
import index from '../reducers/index';
import thunk from 'redux-thunk';

export default function configureStore() {
    return createStore(
        index,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
    );
}