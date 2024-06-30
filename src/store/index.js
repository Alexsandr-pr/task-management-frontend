import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk";
import { mentorReducer } from "./reducers/mentorReducer";
import { chatReducer } from "./reducers/chatReducer";


const rootReducer = combineReducers({
    mentor: mentorReducer,
    chat: chatReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))