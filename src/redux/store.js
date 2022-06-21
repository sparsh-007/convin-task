import {createStore} from 'redux';
import reducer from './reducer';

const intitialState = {allUserData: []};

const store = createStore(reducer, intitialState);

export default store;
