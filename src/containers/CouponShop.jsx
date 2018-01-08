import React, { Component } from 'react';
import {Link} from 'react-router';
import fire from '../firebase.js';
import {Grid, Row, Col, Button, Thumbnail} from 'react-bootstrap';


class CouponShop extends Component {
	constructor(props) {
		super(props)

		this.state = {
			coupons: []
		};

	}

	componentDidMount() {
		fire.database().ref('coupons/').orderByKey().on('value', snapshot => {
			console.log('couponlist returned from Marketplace.jsx');
			this.props.couponsUpdate(snapshot); //Updates the props to reflect new items
			console.log(this.props);

			var couponsArray = Object.values(snapshot.val())

			this.setState({
				coupons: couponsArray
			});
			console.log('From INNER CDM...', this.state.coupons);

		});



	}



	render() {




        return (
        <div>
           Hello, Welcome to Coupon Shop.
           <br/>

			<Grid>

				<Row>



				  {this.state.coupons.map((coupon,i) =>
					  <Col xs={6} md={4} lg={3} key={i}>
						  <Thumbnail bsClass='thumbnail sample' src="https://placehold.it/150?text=Coupon" alt='thumbnailimg'>
							  		<div className='thumbContent'>
						          <span className='thumbCaption'><strong>{coupon.description}</strong></span>

						          <p>
										 <Button bsStyle="primary">{coupon.price}</Button>&nbsp;
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


export default CouponShop;
