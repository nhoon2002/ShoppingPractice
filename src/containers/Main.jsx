import React, { Component } from 'react';
import NavBootstrap from '../components/NavBootstrap.jsx';


// function getNiceName(routes) {
// 	let path = (routes[routes.length - 1] || {}).path || 'Home';
// 	return path.replace('/', '')
// 			.toUpperCase() || 'Unknown Page';
// }

class Main extends Component {

  render() {

     const showNav = (
        <div>
           <NavBootstrap firebaseDB={this.props.firebaseDB}/>
           <div className='container'>
            {React.cloneElement(this.props.children, this.props)}
           </div>
        </div>

     );

     const hideNav = (


           <div className='container'>
            {React.cloneElement(this.props.children, this.props)}
           </div>

     )

     const renderType = this.props.loginStatus ? showNav : hideNav;

    return (
      <div className="Main">
         {renderType}
      </div>


    );

  }
}


export default Main;
