import React from 'react';

var Button = React.createClass({

	render() {
		return (
			<div className="action-button" style={styles.button} onClick={this.props.action}>
				{this.props.name}
			</div>
		);
	}
});

var styles = {
	button: {
		margin: "10px",
		padding: "10px",
		width: "150px",

		background: "#cdcdcd",
		border: "2px",
		borderRadius: "5px",
		display: "inline-block",
		textAlign: "center"
	}
}

export default Button;