import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './redux/authReducer'; // Import the authReducer instead of reducers

const store = createStore(authReducer, applyMiddleware(thunk));

export default store;
