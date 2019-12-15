import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import uuid from 'uuid';

const initialState = {};

// const initialState = {
// 	items: [
// 			{id: uuid(), name: 'Have breakfast'},
// 			{id: uuid(), name: 'Go to school'},
// 			{id: uuid(), name: 'Meet maths professor'},
// 			{id: uuid(), name: 'Do grocery'},
// 			{id: uuid(), name: 'Go to Yoga class'},
// 			{id: uuid(), name: 'Complete car insurance'}
// 		]
// };
/*const initialState = {
	items: [
			{id: 'uuid123', name: 'Have breakfast'},
			{id: 'uuid1234', name: 'Go to school'},
			{id: 'uuid1235', name: 'Meet maths professor'},
			{id: 'uuid1237', name: 'Do grocery'},
			{id: 'uuid1238', name: 'Go to Yoga class'},
			{id: 'uuid1239', name: 'Complete car insurance'}
		]
};*/

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
				rootReducer,
				initialState,
				composeEnhancers(
					applyMiddleware(...middleware)
				));

export default store;
