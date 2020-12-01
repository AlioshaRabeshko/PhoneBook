import Popup from 'reactjs-popup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../actions/userActions';

const AddUser = () => {
	const [firstName, setFirstName] = useState({ err: true });
	const [secondName, setSecondName] = useState({ err: true });
	const [phone, setPhone] = useState({ err: true });
	const [gender, setGender] = useState(false);
	const [age, setAge] = useState({ err: true });
	const dispatch = useDispatch();

	const add = (close) => {
		if (firstName.err || secondName.err || phone.err || age.err) return;
		dispatch(
			addUser({
				firstName: firstName.value,
				secondName: secondName.value,
				phone: phone.value,
				age: age.value,
				gender,
			})
		);
		return close();
	};

	const setFN = (e) =>
		e.target.value.match(/^[a-z ,.'-]+$/i)
			? setFirstName({ value: e.target.value, err: false })
			: setFirstName({ err: true });
	const setSN = (e) =>
		e.target.value.match(/^[a-z ,.'-]+$/i)
			? setSecondName({ value: e.target.value, err: false })
			: setSecondName({ err: true });
	const setPN = (e) =>
		e.target.value.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)
			? setPhone({ value: e.target.value, err: false })
			: setPhone({ err: true });
	const setA = (e) => {
		const age = parseInt(e.target.value);
		if (age > 6 && age < 120) setAge({ value: e.target.value, err: false });
		else setAge({ err: true });
	};

	return (
		<Popup
			trigger={<button>Add user</button>}
			modal
			className="new"
			onClose={() => {
				setFirstName({ err: true });
				setSecondName({ err: true });
				setPhone({ err: true });
				setAge({ err: true });
			}}>
			{(close) => (
				<div className="new">
					<h2>Add new user</h2>
					<input
						type="text"
						className={firstName.err ? 'invalid' : ''}
						placeholder="First name"
						onChange={setFN}
					/>
					<input
						type="text"
						className={secondName.err ? 'invalid' : ''}
						placeholder="Second name"
						onChange={setSN}
					/>
					<input
						type="text"
						className={phone.err ? 'invalid' : ''}
						placeholder="Phone number"
						onChange={setPN}
					/>
					<select onChange={(e) => setGender(e.target.value)}>
						<option value={false}>Boy</option>
						<option value={true}>Girl</option>
					</select>
					<input
						type="number"
						className={age.err ? 'invalid' : ''}
						placeholder="Age"
						onChange={setA}
					/>
					<button onClick={() => add(close)}>Add</button>
				</div>
			)}
		</Popup>
	);
};

export default AddUser;
