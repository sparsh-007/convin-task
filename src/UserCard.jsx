import React from 'react';
import '../src/App.css';

function UserCard({id, avatar, email, fs, ls}) {
	return (
		<div className='user-card'>
			<br />
			<img src={avatar} alt='avatar' />
			<h3>
				{fs} {ls}
			</h3>
			<h4>{email}</h4>
		</div>
	);
}

export default UserCard;
