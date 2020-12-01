import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from './User';
import { getUsers, sort } from '../actions/userActions';

const List = () => {
	const { users, sorted } = useSelector((state) => state.users);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return users.length > 0 ? (
		<ul className="List">
			<li className="User columns">
				<p className="wide">
					<span onClick={() => dispatch(sort(users, 'firstName', sorted))}>
						Name
					</span>
					<span onClick={() => dispatch(sort(users, 'secondName', sorted))}>
						{` Surname`}
					</span>
				</p>
				<p className="wide">
					<span onClick={() => dispatch(sort(users, 'phone', sorted))}>
						Phone number
					</span>
				</p>
				<p>
					<span onClick={() => dispatch(sort(users, 'gender', sorted))}>
						Gender
					</span>
				</p>
				<p>
					<span onClick={() => dispatch(sort(users, 'age', sorted))}>Age</span>
				</p>
				<p></p>
			</li>
			{users.map((user, id) => (
				<User data={user} key={id} />
			))}
		</ul>
	) : null;
};

export default List;
