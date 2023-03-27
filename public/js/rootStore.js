import {createStore, compose} from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const rootStore =  createStore(rootReducer, composeWithDevTools())

export default rootStore;
