import React, { Component } from 'react';
import {Link} from 'react-router';
import fire from '../firebase.js';


class Marketplace extends Component {
	constructor(props) {
		super(props)

		this.state = {
			items: []
		};

	}

	componentDidMount() {
		fire.database().ref('items/').orderByKey().on('value', snapshot => {
			console.log('items list returned from Marketplace.jsx');
			this.props.marketplaceUpdate(snapshot); //Updates the props to reflect new items
			console.log(this.props);

			var itemsArray = Object.values(snapshot.val())
			var newArray = [{name: 'Add an item.', photoURL: 'https://placehold.it/100x100'}, ...itemsArray];
			console.log(newArray);
			this.setState({
				items: newArray
			});
			console.log('From INNER CDM...', this.state.items);

		});



	}
	// componentWillReceiveProps(nextProps) {
	// 	if(nextProps.databaseUpdate.length > 1) {
	// 		console.log('the database update:',nextProps.databaseUpdate);
	// 		this.setState({propsLoaded: true, items: nextProps.databaseUpdate});
	// 	}
   //
	// }


	render() {



        return (
        <div>
           Hello, Welcome to Marketplace.

				  {this.state.items.map((item,i) =>
					  <div className='singleItem' key={i}>
						  <img className='itemImg' src={item.photoURL} alt='hi'/>
						  <span>{item.name}</span>
					  </div>

				  )}


		  </div>






    );
  }

};


export default Marketplace;
