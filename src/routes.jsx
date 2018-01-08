import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from './containers/App.jsx';
import { Provider } from 'react-redux';
import store, { history } from './store.js';


import Home from './containers/Home.jsx';
import Signin from './containers/Signin.jsx';
import Marketplace from './containers/Marketplace.jsx';
import MyStore from './containers/MyStore.jsx';
import Profile from './containers/Profile.jsx';
import MakeCoupon from './containers/MakeCoupon.jsx';
import CouponShop from './containers/CouponShop.jsx';


import fire from './firebase.js';
import { checkSession } from './actions/userActions';
import { fbUpdate } from './actions/userActions';



fire.auth().onAuthStateChanged(firebaseUser => {

	store.dispatch(checkSession());
	if(firebaseUser) console.log('User: %s', firebaseUser.uid);
	else console.log('User: %s', null);


})
fire.database().ref(`users/`).on('value', function(snapshot) {
	console.log('Dispatched from routes.jsx');
	var snap = snapshot.val();
	store.dispatch(fbUpdate(snap));
});





const theRoutes = (
	<Provider store={store}>
	  	<Router history={history}>
		    <Route path="/" component={App} >

		      <IndexRoute component={Home}/>

				<Route path="/signin" component={Signin} />
				<Route path="/marketplace" component={Marketplace} />
				<Route path="/mystore" component={MyStore} />
				<Route path="/profile" component={Profile} />
				<Route path="/makecoupon" component={MakeCoupon} />
				<Route path="/couponshop" component={CouponShop} />


		    </Route>
		</Router>
	</Provider>

  );

export default theRoutes;
