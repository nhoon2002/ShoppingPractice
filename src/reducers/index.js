import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";



import { sampleReducer } from "./sampleReducer.jsx";
// import { createAccReducer } from "./createAccReducer";
import { firebaseDBReducer } from "./firebaseDBReducer.jsx";
import { checkSessionReducer } from "./checkSessionReducer.jsx";
import { loginReducer } from "./loginReducer.jsx";




const rootReducer = combineReducers({
	sampleReducer,
	loginReducer,
	checkSessionReducer,
	firebaseDBReducer,
	routing: routerReducer
});
export default rootReducer;
