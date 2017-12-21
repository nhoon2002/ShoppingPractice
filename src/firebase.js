import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyCE7CyWRFUULYIT8lzUOIECSYbaTfdK63o",
   authDomain: "shoppingpractice-3b2c4.firebaseapp.com",
   databaseURL: "https://shoppingpractice-3b2c4.firebaseio.com",
   projectId: "shoppingpractice-3b2c4",
   storageBucket: "shoppingpractice-3b2c4.appspot.com",
   messagingSenderId: "620028277242"
};

var fire = firebase.initializeApp(config);

export default fire;
