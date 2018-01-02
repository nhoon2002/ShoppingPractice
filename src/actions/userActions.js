import axios from 'axios';
import fetch from 'isomorphic-fetch'
import { browserHistory } from "react-router";
import * as firebase from 'firebase';
import promise from 'es6-promise'
promise.polyfill();

// const apiKey = require('../../controller/config.js').api
export function marketplaceUpdate(snapshot) {

	return function(dispatch) {

		dispatch({type: 'MARKETPLACE_UPDATED', payload: snapshot.val()})
	}

}

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
			console.log('WOOOOOOO');
			dbRef.once('value').then(function(snapshot) {
				console.log(snapshot.val());
				if(!snapshot.val()) {
					console.log('User database info does not exist yet. Setting the initial object...');
					dbRef.set({
						username: user.displayName,
						email: user.email,
						profilePic : user.photoURL,
						items: ''
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
				}
			});


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

 export function showNotification(content, type) {
	 return function(dispatch) {
		 dispatch({type: 'NOTIFYING', payload: {type: type, content: content}})

	 }
 }

 export function hideNotification(content, type) {
	 return function(dispatch) {
		 dispatch({type: 'DISMISSING', payload: false})

	 }
 }


 export function firebaseUploadImg(file, metadata, user, fileName, uploadTask) {
	 return function(dispatch) {


		 // Upload file and metadata to the object

			uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
			  function(snapshot) {
			    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
			    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			    console.log('Upload is ' + progress + '% done');
			    switch (snapshot.state) {
			      case firebase.storage.TaskState.PAUSED: // or 'paused'
			        console.log('Upload is paused');
			        break;
			      case firebase.storage.TaskState.RUNNING: // or 'running'
			        console.log('Upload is running');
			        break;
			    }
			  }, function(error) {
				  			showNotification(error.code, 'warning')
							dispatch({type: 'STORAGE_UPLOAD_ERROR', payload: error.code});

						  // A full list of error codes is available at
						  // https://firebase.google.com/docs/storage/web/handle-errors
						  switch (error.code) {
						    case 'storage/unauthorized':
						      // User doesn't have permission to access the object
						      break;

						    case 'storage/canceled':
						      // User canceled the upload
						      break;



						    case 'storage/unknown':
						      // Unknown error occurred, inspect error.serverResponse
						      break;
						  }
						}, function() {
						  // Upload completed successfully, now we can get the download URL and prepare to populate the realtime database.
						  var database = firebase.database();
						  var downloadSnap = uploadTask.snapshot;
						  var downloadURL = uploadTask.snapshot.downloadURL;
						  var itemInfo = {
							  name: fileName,
							  user: user.displayName,
							  photoURL: downloadURL
						  };
						  var itemsRef = database.ref(`items/${Date.now()}`).set(itemInfo);
						  database.ref(`users/${user.uid}/items`).push(itemInfo);
						  dispatch({type: 'NOTIFYING', payload: {type: 'success', content: 'Upload Successful!'}})
						  dispatch({type: 'STORAGE_UPLOAD_SUCCESS', payload: downloadURL})




						});
						};
				}







	//RETRIEVING IMAGE FROM STORAGE BUCKET

	// var file;
	// // Create a root reference
	// var storageRef = firebase.storage().ref();
	// // updateImg1();
	// // updateImg2();
	// function updateImg1() {
	//   storageRef.child('images/items/main1.JPG').getDownloadURL().then(function(url) {
	//   // `url` is the download URL for 'images/stars.jpg'
  //
	//   // This can be downloaded directly:
	//   var xhr = new XMLHttpRequest();
	//   xhr.responseType = 'blob';
	//   xhr.onload = function(event) {
	//     var blob = xhr.response;
	//   };
	//   xhr.open('GET', url);
	//   xhr.send();
  //
	//   // Or inserted into an <img> element:
	//   var img = document.getElementById("main_IMG1");
	//   img.src = url;
	// }).catch(function(error) {
	//   console.log(error);
	// });
	// }
