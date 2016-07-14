import React from 'react';
import {Link} from 'react-router';

var App = React.createClass({
	render() {
		return (
			<div className="app-container">
				<div className="header" style={this.styles.header}>
					<h2 className="header-title">Weather You Like It or Not...</h2>
					<ul className="header-links">
						<li style={this.styles.link}><Link to="/about">About</Link></li>
						
					</ul>
				</div>
				<div className="app-body">{this.props.children}</div>
				
			</div>
		);
	},

	styles: {
		header: {

		},

		link: {
			display: "inline-block",
			listStyletype: "none"
		},

	}
});

// module.exports = App;
export default App;