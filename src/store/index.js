import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import digimonReducer from "./modules/digimons/reducer";


const reducers = combineReducers({ digimons: digimonReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
