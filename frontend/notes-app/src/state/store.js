import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 

import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

export const store = createStore(
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)