import {combineReducers} from 'redux';
import user from './user';
import post from './post';
import reply from './reply';
import image from './image';
import file from './file';
import navigator from './manager/navigator.js';
import toolbar from './manager/toolbar.js';

const rootReducer = combineReducers({
    user,
    post, 
    reply,
    image,
    file,
    navigator,
    toolbar,
}) 
export default rootReducer; 
