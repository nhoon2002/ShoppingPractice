import React, { Component } from 'react';
import {Link} from 'react-router';
import fire from '../firebase.js';
import {Button} from 'react-bootstrap';


class MyStore extends Component {
	constructor(props) {
		super(props)

		this.state = {items: []};
		this._handleInput = this._handleInput.bind(this);

	}

	componentDidMount() {
		if(fire.auth().currentUser) {

			fire.database().ref(`users/${fire.auth().currentUser.uid}/items`).orderByKey().on('value', snapshot => {
				console.log('items list returned from MyStore.jsx');

				var itemsArray = Object.values(snapshot.val())
				this.props.itemListAdded(itemsArray); //Updates the props to reflect new items
				this.setState({items: itemsArray})



			});
		}



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
		 let user = fire.auth().currentUser;
		 console.log(storageRef);
		 let uploadTask = storageRef.child(`images/${fire.auth().currentUser.uid}/${fileName}`).put(file, metadata);
		 console.log('Uploading to server...');
		 this.props.firebaseUploadImg(file, metadata, user, fileName, uploadTask);
	}
	render() {
		if(this.props.itemList) {
			return (
				<div>
					Hello, Welcome to MyStore.
						  <br/>
						  <div className='fileUploader'>
						  	<input id="inputImg1" type="file" accept="image/*" onChange={this._handleInput}/>
					  	  </div>


						  <div className='wrapper'>

									 {this.state.items.map((item,i) =>
										 <div className='thumbnails' key={i}>
											 <div className='thumbImage'>
										 		<img src={item.photoURL} alt='thumbnailimg' className='center-cropped' />
											 </div>
											 <div className='thumbContent'>
												<span className='thumbCaption'>
													<strong>{item.name}</strong>
												</span>
														<p>Description. Lorem Ipsum alescription. Lorem Ipsum alescription. Lorem Ipsum alescription. Lorem Ipsum alescription. Lorem Ipsum aldjflad;jfl;kjasf</p>

															<div className='thumbButtons'>
																<Button bsStyle="primary">Details</Button>&nbsp;
																<Button bsStyle="default">&#x2764;</Button>
															</div>
														
										    </div>
									    </div>




									 )}
								 </div>


						  </div>



			)

		}


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
