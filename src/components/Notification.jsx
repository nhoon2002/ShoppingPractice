import React, { Component } from 'react';
import {Alert, Button} from 'react-bootstrap';

class Notification extends Component {
	constructor(props) {
		super(props)

		this.state = {alertVisible: this.props.notificationShow, alertType: this.props.notificationType, alertContent: this.props.notificationContent};

		this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
		this.handleAlertShow = this.handleAlertShow.bind(this);
	}
	handleAlertDismiss() {
      this.props.hideNotification();
		this.setState({alertVisible: false, alertType: '', alertContent: ''});
	}
	handleAlertShow() {
		this.setState({alertVisible: true, alertType: this.props.notificationType, alertContent: this.props.notificationContent});

	}

	componentDidMount() {


	}

	render() {
      if(this.props.notificationShow || this.state.alertVisible) {


			return (
				<Alert bsStyle={this.props.notificationType} onDismiss={this.handleAlertDismiss}>
	           <h4>Alert</h4>
	           <p>{this.props.notificationContent}.</p>
	           <p>

	             <Button bsStyle={this.props.notificationType} onClick={this.handleAlertDismiss}>Hide Alert</Button>
	           </p>
	         </Alert>
			)
		}
      return null;

      }






};


export default Notification;
