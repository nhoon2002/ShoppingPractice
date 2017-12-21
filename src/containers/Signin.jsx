import React, { Component } from 'react';

class Signin extends Component {
	constructor(props) {
		super(props)

		this.state = {};

	}

	componentDidMount() {

	}

	render() {



        return (
        <div>
           Please sign in to use.
           <button onClick={this.props.SigninFacebook}>Facebook</button>
		  </div>






    );
  }

};


export default Signin;
