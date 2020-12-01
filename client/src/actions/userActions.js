import { GET_USERS, ADD_USER, DELETE_USER, SORT } from '../actions/types';
import axios from 'axios';

export const getUsers = () => (dispatch) => {
	axios.get('/api/users').then((res) =>
		dispatch({
			type: GET_USERS,
			payload: res.data,
		})
	);
};

export const addUser = (data) => (dispatch) => {
	axios.post('/api/users', data).then((res) =>
		dispatch({
			type: ADD_USER,
			payload: res.data,
		})
	);
};

export const deleteUser = (id) => (dispatch) => {
	axios.delete(`/api/users/${id}`).then((res) =>
		dispatch({
			type: DELETE_USER,
			payload: res.data,
		})
	);
};

export const sort = (users, by, sorted) => (dispatch) => {
	const arr = users.slice();
	if (by === 'gender' || by === 'age')
		arr.sort((a, b) => (sorted ? a[by] - b[by] : b[by] - a[by]));
	else
		arr.sort((a, b) => {
			if (sorted) return a[by].toUpperCase() < b[by].toUpperCase() ? 1 : -1;
			else return a[by].toUpperCase() > b[by].toUpperCase() ? 1 : -1;
		});
	dispatch({
		type: SORT,
		payload: arr,
		sort: !sorted,
	});
};
