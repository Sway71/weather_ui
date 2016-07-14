import React from 'react';

var CurrentWeather = React.createClass({

	render() {
		return (
			<div>
				<ul>
					<li>{this.props.summary}</li>
					<li>{this.props.temperature}</li>
					<li>{this.props.humidity}</li>
					<li>{this.props.windSpeed}</li>
				</ul>
			</div>
		);
	}
});

export default CurrentWeather;