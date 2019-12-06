import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from '../actions/types';

const initialState = {
// 	items: [
// 			{id: uuid(), name: 'Have breakfast'},
// 			{id: uuid(), name: 'Go to school'},
// 			{id: uuid(), name: 'Meet maths professor'},
// 			{id: uuid(), name: 'Do grocery'},
// 			{id: uuid(), name: 'Go to Yoga class'},
// 			{id: uuid(), name: 'Complete car insurance'}
// 		]
// };
const initialState = {
	items: [],
	loading: false
};

export default function(state = initialState, action){
	switch(action.type) {
		case GET_ITEMS:
		return {
			...state
		};

		case DELETE_ITEM:
		return {
			...state,
			items: state.items.filter(item => item.id !== action.payload)
		};

		case ADD_ITEM:
			return {
				...state,
				items: [action.payload, ...state.items]
			};

			case ITEMS_LOADING:
				return {
					...state,
					laoding: true
				};



		default:
			return state;

	}
}
