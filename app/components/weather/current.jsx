import React from 'react';

var CurrentWeather = React.createClass({

	render() {
		if (this.props.weather) {
			return (
				<div style={this.styles.currentWeatherContainer}>
					<ul>
						<li style={this.styles.attribute}>Forecast: {this.props.weather.summary}</li>
						<li style={this.styles.attribute}>Current Temperature: {this.props.weather.temperature}</li>
						<li style={this.styles.attribute}>Humidity: {this.props.weather.humidity}</li>
						<li style={this.styles.attribute}>Wind Speed: {this.props.weather.windSpeed}</li>
					</ul>
				</div>
			);
		} else { return <div></div>};
	},

	styles: {
		currentWeatherContainer: {
			display: "inline-block",
			width: "200px",
			padding: "5px",

			background: "#dedede",
			border: "solid #fcfcfc",
			borderRadius: "10px"
		},
		
		attribute: {
			display: "block",
			listStyleType: "none",
			margin: "8px"
		}
	}
});

export default CurrentWeather;