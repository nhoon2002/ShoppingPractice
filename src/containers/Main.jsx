import React, { Component } from 'react';


// function getNiceName(routes) {
// 	let path = (routes[routes.length - 1] || {}).path || 'Home';
// 	return path.replace('/', '')
// 			.toUpperCase() || 'Unknown Page';
// }

class Main extends Component {

  render() {
    return (

      <div className="Main">

          {React.cloneElement(this.props.children, this.props)}

      </div>

    );

  }
}


export default Main;
