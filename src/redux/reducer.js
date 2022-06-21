import cases from './cases';

export default function reducer(state, action) {
	switch (action.type) {
		case cases.STORE_API_DATA:
			return {...state, allUserData: action.payload};
		default:
			return state;
	}
}
