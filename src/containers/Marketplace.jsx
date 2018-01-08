import React, { Component } from 'react';
import {Link} from 'react-router';
import fire from '../firebase.js';
import {Grid, Row, Col, Button, Thumbnail} from 'react-bootstrap';


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

			this.setState({
				items: itemsArray
			});
			console.log('From INNER CDM...', this.state.items);

		});



	}



	render() {




        return (
        <div>
           Hello, Welcome to Marketplace / Coupon Shop.

			<Grid>

				<Row>



				  {this.state.items.map((item,i) =>
					  <Col xs={6} md={4} lg={3} key={i}>
						  <Thumbnail bsClass='thumbnail sample' src={item.photoURL} alt='thumbnailimg'>
							  		<div className='thumbContent'>
						          <span className='thumbCaption'><strong>{item.name}</strong></span>
						          <p>Description.</p>
						          <p>
										 <Button bsStyle="primary">Details</Button>&nbsp;
										 <Button bsStyle="default">&#x2764;</Button>
									 </p>
								 	</div>
						  </Thumbnail>
					  </Col>



				  )}
			  </Row>

			</Grid>

		  </div>






    );
  }

};


export default Marketplace;
