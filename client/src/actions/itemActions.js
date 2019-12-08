import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => {
	return {
		type: GET_ITEMS
	};
};

export const deleteItem = (id) => {
	return {
		type: DELETE_ITEM,
		payload: id
	};
};

export const addItem = item => {
	return {
		type: ADD_ITEM,
		payload: item
	}
};

export const setItemsLoading = () => {
	return: ITEMS_LOADING
}
