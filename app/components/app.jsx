import React from 'react';
import {Link} from 'react-router';

var App = React.createClass({
	render() {
		return (
			<div className="app-container">
				<div className="header">
					<h3 className="header-title">Weather You Like It or Not...</h3>
					<ul className="header-links">
						<li><Link to="/about">About</Link></li>
						
					</ul>
				</div>
				<div className="app-body">{this.props.children}</div>
				<div className="footer">Footer Area</div>
			</div>
		);
	}
});

// module.exports = App;
export default App;