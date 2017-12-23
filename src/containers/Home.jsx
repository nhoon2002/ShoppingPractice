import React, { Component } from 'react';
import {Link} from 'react-router';
// import NavBootstrap from '../components/NavBootstrap.jsx';

class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {};

	}

	componentDidMount() {

	}

	render() {



        return (
        <div>
			  {/* <NavBootstrap /> */}
           Hello, Welcome to Home.
			  <button onClick={this.props.signOut}>Sign Out</button>
			  
			  <br/>
			  <Link to='/profile'>My Profile</Link>
			  <Link to='/marketplace'>Marketplace</Link>
			  <Link to='/mystore'>My Store</Link>

		  </div>






    );
  }

};


export default Home;
