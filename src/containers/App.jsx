import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionsCreators from '../actions/userActions';
import Main from './Main.jsx';

function mapStateToProps (state) {

	console.log("mapping STATE to PROPS", state)
	return {
		allData: state,
      sampleAction: state.sampleReducer.sampleAction,

		// createAccount: state.createAccReducer.creatingAccount,
		loginStatus: state.checkSessionReducer.loggedin,
		currentUser: state.checkSessionReducer.currentUser,
		firebaseDB: state.firebaseDBReducer.snapshot,
		storageUpload: state.storageUploadReducer.fileURL,
		itemList: state.storageUploadReducer.itemList,
		notificationContent: state.notificationReducer.content,
		notificationType: state.notificationReducer.type,
		notificationShow: state.notificationReducer.show,
		marketplaceItems: state.marketplaceUpdateReducer.itemsArray,
		couponsArray: state.couponsUploadReducer.couponsArray
		// loginAccount: state.loginReducer.signinginAccount,
		// queryData: state.tmdbReducer.dataReturned


	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators(actionsCreators, dispatch);
}


const App = connect(mapStateToProps, mapDispatchToProps)(Main);
/*******************/

export default App;
