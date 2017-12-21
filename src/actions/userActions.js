import axios from 'axios';
import fetch from 'isomorphic-fetch'
import { browserHistory } from "react-router";
import * as firebase from 'firebase';
import promise from 'es6-promise'
promise.polyfill();

// const apiKey = require('../../controller/config.js').api

export function sampleAction() {
	return function(dispatch) {
		console.log('SampleAction triggered from userActions.js');

	}
}

export function checkSession() {
	return function(dispatch) {
		let firebaseUser = firebase.auth().currentUser;
		if (firebaseUser) {
			dispatch({ type: 'SESSION_EXISTS', payload: firebaseUser})
			console.log('browserhistory:', browserHistory);
			console.log('Auth status changed: logged in as: ' + firebaseUser.email);
			console.log('Current user: %s', firebaseUser.uid);
			fbUpdate();
			}
		else {
			dispatch({ type: 'SESSION_NULL', payload: ""})
			console.log('Auth status changed: not logged in.');
			browserHistory.push('/signin');
			}

 		}

 }
 export function fbUpdate(snap) {
 	return function(dispatch) {
 		dispatch({type: 'DB_UPDATE', payload: Object.values(snap)});
 	}
 }
 export function SigninFacebook() {
 	return function(dispatch) {
 		dispatch({ type: 'FACEBOOK_CREATE_ACCOUNT', payload: ""});
 		var provider = new firebase.auth.FacebookAuthProvider();
 		firebase.auth().signInWithPopup(provider).then(function(result) {
 		  // This gives you a Facebook Access Token. You can use it to access the FB API.
 		  var token = result.credential.accessToken;
 		  // The signed-in user info.
 		  var user = result.user;
 		  console.log("facebook auth details:", user);
 		  dispatch({ type: 'FACEBOOK_CREATE_ACCOUNT_SUCESSS', payload: user});
 			//INITIALIZE FIREBASE USER DATABASE
 			const dbRef = firebase.database().ref(`users/${user.uid}/`);

 			  dbRef.set({
 			    username: user.displayName,
 			    email: user.email,
 			    profilePic : user.photoURL
 			  })
 			  .then(
 				  function(success) {
 					console.log('DBREFSET SUCCESS');
 			  	  }
 		  	  )
 			  .catch(
 				  function(error) {
 					 console.log('Encounted error: dbRef');
 				  }
 			  )

 		  dispatch({ type: 'SESSION_EXISTS', payload: user});
 		  browserHistory.push('/');
 		  // ...
 		}).catch(function(error) {
 		  // Handle Errors here.
 		  var errorCode = error.code;
 		  var errorMessage = error.message;
 		  console.log(errorMessage);
 		  // The email of the user's account used.
 		  var email = error.email;
 		  // The firebase.auth.AuthCredential type that was used.
 		  var credential = error.credential;
 		  dispatch({ type: 'FACEBOOK_CREATE_ACCOUNT_ERROR', payload: errorMessage});
 		  // ...
 		});
 	}
 }

 export function signOut() {
 		return function(dispatch) {
 			firebase.auth().signOut(); //signs out current user
 			browserHistory.push('/');
 			dispatch({ type: 'SESSION_NULL', payload: ""});

 		}

  }
