import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk";
import { mentorReducer } from "./reducers/mentorReducer";


const rootReducer = combineReducers({
    mentor: mentorReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))