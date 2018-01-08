import React, { Component } from 'react';
import {Link} from 'react-router';
import fire from '../firebase.js';
import {Button, ButtonToolbar} from 'react-bootstrap';


class MakeCoupon extends Component {
	constructor(props) {
		super(props)

		this.state = {};
		this.handleForm = this.handleForm.bind(this);

	}

   componentDidMount() {


	}

   handleForm(e){
		// console.log("NAAAAAAAAAME", this.refs.name.value)
		var inputs = {
			title: this.refs.title.value,
			description: this.refs.description.value,
			price: this.refs.price.value
		}

		console.log("Form inputs: ", inputs);
		// TODO: send to store.
		// this.props.SOMETHING(fieldInputs);
		this.props.registerCoupon(inputs);

	}
	render() {



        return (
        <div className = 'container'>
			 <div className='row welcome rowhome'>
			  <div className='col-md-4 col-lg-4 col-sm-1'></div>
			  <div className='col-md-4 col-lg-4 col-sm-10 welcome homeslate'>

            <div className="welcomeDiv signupJumbo">

                <h3>Please enter details for new coupon...</h3>
                <br/>
					 <div>
						 <form>
							 <div className="input-group">
								 <span className="input-group-addon">Title</span>

								  <input type="text" className='form-control' ref="title" placeholder="Enter coupon title" />
							 </div>
                      <br/>

							 <div className="input-group">
								 <span className="input-group-addon">Description</span>

								  <input type="text" className='form-control' ref="description" placeholder="Brief description" />
							 </div>
                      <br/>


							 <div className="input-group">
								  <span className="input-group-addon">Price</span>
								  <input type="text" ref="price" className="form-control" placeholder="Enter price of coupon" />
							 </div>


						 </form>
					 </div>

					 {/* Buttons */}
               <br/>
               <br/>

					 <ButtonToolbar>
						 <Button bsStyle='danger' onClick={this.handleForm}>
							 Register Coupon!
						 </Button>

						 {/* <button bsStyle='btn btn-warning' onClick={this.sample}>
							 Sample Action!
						 </button>
						 <br />
						 <button bsStyle='btn btn-warning' onClick={this.sampleD}>
							 Sample Action Dispatch!
						 </button>
						 <br /> */}
						 <Button bsStyle='warning' onClick={() => this.props.router.push('/')}>
							 Back to Home
						 </Button>
					 </ButtonToolbar>
					 <br/>



            </div>
			</div>
			<div className='col-md-4 col-lg-4 col-sm-1'></div>
		</div>



        </div>

    )
}
}





export default MakeCoupon;
