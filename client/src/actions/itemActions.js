import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
	dispatch(setItemsLoading());
	axios
	.get('/api/items')
	.then({
		type: GET_ITEMS,
		payload: res.data
	});
};

export const addItem = item => dispatch => {
	axios
	.post('/api/items', item)
	.then(res =>
		dispatch({
			type: ADD_ITEM,
			payload: res.data
		})
	);
};
export const deleteItem = (id) => {
	return {
		type: DELETE_ITEM,
		payload: id
	};
};


export const setItemsLoading = () => {
	return: ITEMS_LOADING
}
