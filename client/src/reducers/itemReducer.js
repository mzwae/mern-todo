import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
	items: [
			{id: uuid(), name: 'Have breakfast'},
			{id: uuid(), name: 'Go to school'},
			{id: uuid(), name: 'Meet maths professor'},
			{id: uuid(), name: 'Do grocery'},
			{id: uuid(), name: 'Go to Yoga class'},
			{id: uuid(), name: 'Complete car insurance'}
		]
};

export default function(state = initialState, action){
	switch(action.type) {
		return {
			...state
		}
	}
}