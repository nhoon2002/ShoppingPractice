import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";



import { sampleReducer } from "./sampleReducer.jsx";
// import { createAccReducer } from "./createAccReducer";
import { firebaseDBReducer } from "./firebaseDBReducer.jsx";
import { checkSessionReducer } from "./checkSessionReducer.jsx";
import { loginReducer } from "./loginReducer.jsx";
import { storageUploadReducer } from "./storageUploadReducer.jsx";
import { databaseUpdateReducer } from "./databaseUpdateReducer.jsx";



const rootReducer = combineReducers({
	sampleReducer,
	loginReducer,
	checkSessionReducer,
	firebaseDBReducer,
	storageUploadReducer,
	databaseUpdateReducer,
	routing: routerReducer
});
export default rootReducer;
