import RemoveUser from './RemoveUser';

const User = ({ data }) => {
	return (
		<li className="User">
			<p className="wide">
				{data.firstName} {data.secondName}
			</p>
			<p className="wide">{data.phone}</p>
			<p>{data.gender ? 'G' : 'B'}</p>
			<p>{data.age}</p>
			<RemoveUser name={`${data.firstName} ${data.secondName}`} id={data._id} />
		</li>
	);
};

export default User;
