import { combineReducers } from 'redux';
import { usuariosDuck } from './usuariosDuck';

export const rootReducer = combineReducers({
    usuarios : usuariosDuck
});

