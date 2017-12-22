import React, { Component } from 'react';
import {Link} from 'react-router';
import fire from '../firebase.js';


class Marketplace extends Component {
	constructor(props) {
		super(props)

		this.state = {propsLoaded: false, items: [{name: 'Add an item.', photoURL: 'https://placehold.it/100x100'}]};

	}

	componentDidMount() {

		// var itemsArray = fire.database().ref('items/').orderByKey().once('value', snapshot => {
		// 	const itemsArray = Object.values(snapshot.val());
		// 	this.setState({items: itemsArray});
		// })
		console.log(this.state.items);



	}
	componentWillReceiveProps(nextProps) {
		console.log('the database update:',nextProps.databaseUpdate);
		if(nextProps.databaseUpdate.length > 1) {
			this.setState({propsLoaded: true, items: nextProps.databaseUpdate});
		}
		// console.log(this.state);
		// this.setState({ items: this.props.databaseUpdate})
		// console.log(this.state);
		// console.log('props Received...');
	}


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
