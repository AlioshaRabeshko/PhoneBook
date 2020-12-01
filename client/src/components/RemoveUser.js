import Popup from 'reactjs-popup';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../actions/userActions';

const Remove = ({ name, id }) => {
	const dispatch = useDispatch();
	const remove = (cb) => {
		dispatch(deleteUser(id));
		cb();
	};
	return (
		<Popup trigger={<p className="remove">Remove</p>} modal className="new">
			{(close) => (
				<div className="remove">
					<h2>Are you sure you want to remove user</h2>
					<h3>{name}</h3>
					<button onClick={() => remove(close)}>Remove</button>
				</div>
			)}
		</Popup>
	);
};

export default Remove;
