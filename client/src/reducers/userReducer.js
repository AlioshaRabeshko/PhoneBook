import { GET_USERS, ADD_USER, DELETE_USER, SORT } from '../actions/types';

const initialState = {
	users: [],
	sorted: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: action.payload,
			};
		case ADD_USER: {
			return {
				...state,
				users: [action.payload, ...state.users],
			};
		}
		case DELETE_USER:
			return {
				...state,
				users: action.payload,
			};
		case SORT:
			return {
				...state,
				users: action.payload,
				sorted: action.sort,
			};
		default:
			return state;
	}
}
