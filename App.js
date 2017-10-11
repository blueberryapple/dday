import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DDayContainer from './DDayContainer';
import reducer from './reducers';

export default function App() {
    let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    console.log(store.getState())
    return (
        <Provider store={store}>
            <DDayContainer />
        </Provider>
    )
}
