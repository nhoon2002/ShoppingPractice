import React, { Component } from 'react';
import {Link} from 'react-router';
import fire from '../firebase.js';


class MyStore extends Component {
	constructor(props) {
		super(props)

		this.state = {};
		this._handleInput = this._handleInput.bind(this);

	}

	componentDidMount() {
		// console.log();
	}

	_handleInput(event) {
	   console.log('Change detected!!!');
		 console.log(event.target.files[0]);
		 let storageRef = fire.storage().ref();
		 let file = event.target.files[0];
		 let fileName = file.name;
		 let metadata = {
			 contentType: 'image/jpeg'
		 };
		 console.log(storageRef);
		 let uploadTask = storageRef.child(`images/${fire.auth().currentUser.uid}/${fileName}`).put(file, metadata);
		 console.log('Uploading to server...');
		 this.props.firebaseUploadImg(file, metadata, fileName, uploadTask);
	}
	render() {



        return (
        <div>
           Hello, Welcome to MyStore.
					 <br/>

					 You have no items in your store yet.
					 <br/><br/>



					 <input id="inputImg1" type="file" accept="image/*" onChange={this._handleInput}/>
					 <div className="mainImg">
						 <img id="main_IMG1" src="" alt="" width='250' height='250' className='img-responsive img_main img-rounded' />
						 <span>Image Holder</span>
					 </div>

		  	</div>







    );
  }

};


export default MyStore;
