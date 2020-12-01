import { Provider } from 'react-redux';
import store from './store';
import List from './components/List';
import AddUser from './components/AddUser';

const App = () => {
	return (
		<Provider store={store}>
			<div className="App">
				<AddUser />
				<List />
			</div>
		</Provider>
	);
};

export default App;
