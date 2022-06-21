import React, {useState, useEffect} from 'react';
import UserCard from './UserCard';
import '../src/App.css';
import {useSelector, useDispatch} from 'react-redux';
import {Button, CircularProgress} from '@mui/material';
import cases from './redux/cases';

const url = 'https://reqres.in/api/users/';

const getAllUsers = () =>
	fetch(url)
		.then((response) => response.json())
		.then((data) => data)
		.catch((err) => undefined);

const getSingleUserData = (id) =>
	fetch(`${url}${id}`)
		.then((response) => response.json())
		.then((data) => data)
		.catch((error) => undefined);

function App() {
	const dispatch = useDispatch();
	const users = useSelector((store) => store.allUserData);

	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const {data} = await getAllUsers();
			if (data) dispatch({type: cases.STORE_API_DATA, payload: data});
			setIsLoading(false);
		})();
	}, [dispatch]);

	const setSingleUserData = async (id) => {
		setIsLoading(true);
		const {data} = await getSingleUserData(id);
		if (data) setUser(data);
		setIsLoading(false);
	};

	return (
		<div className='App'>
			{isLoading ? (
				<>
					<br />
					<CircularProgress />
					<div>
						<h4>LOADING...</h4>
					</div>
				</>
			) : (
				<>
					<div className='card'>
						{user ? (
							<UserCard
								id={user.id}
								fs={user.first_name}
								ls={user.last_name}
								email={user.email}
								avatar={user.avatar}
							/>
						) : (
							<h1>click on the button to load data</h1>
						)}
					</div>
					<div className="btn">
					{users.map((u, ind) => (
						<div key={u.id}>
							<Button
								style={{marginBottom: '.2rem'}}
								variant='outlined'
								size='large'
								onClick={() => setSingleUserData(u.id)}
							>
								<b>{ind + 1}</b>
							</Button>
						</div>
					))}</div>
				</>
			)}
		</div>
	);
}

export default App;
