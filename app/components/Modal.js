import React, { Component } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Modal extends Component {
	render() {
		if(this.props.isOpen) {
			return (
				<ReactCSSTransitionGroup 
					transitionName={this.props.transitionName}
					transitionEnterTimeout={500} 
					transitionLeaveTimeout={300}
				>

					<div class="modal">
						{this.props.children}
					</div>
				</ReactCSSTransitionGroup>
			)
		} else {
			return (
				<ReactCSSTransitionGroup 
					transitionName={this.props.transitionName} 
					transitionEnterTimeout={500} 
					transitionLeaveTimeout={300}
				>
				</ReactCSSTransitionGroup>
			)
		}
	}
}

export default Modal;