import React from 'react';
import moment from 'moment';

var Forecast = React.createClass({

	render() {
		
		if (this.props.weather) {
			let day = moment(this.props.weather.time * 1000).format("dddd");

			return (
				<div style={this.styles.forecastContainer}>
					<strong>{day}</strong>
					<ul>
						<li style={this.styles.attribute}>Forecast: {this.props.weather.summary}</li>
						<li style={this.styles.attribute}>Day's Low: {this.props.weather.temperatureMin}</li>
						<li style={this.styles.attribute}>Day's High: {this.props.weather.temperatureMax}</li>
						<li style={this.styles.attribute}>Humidity: {this.props.weather.humidity}</li>
						<li style={this.styles.attribute}>Wind Speed: {this.props.weather.windSpeed}</li>
					</ul>
				</div>
			);
		} else { return <div></div>};
	},

	styles: {
		attribute: {
			display: "block",
			listStyleType: "none",
			margin: "0px"
		},

		forecastContainer: {
			display: "inline-block",
			width: "200px",
			padding: "5px",

			background: "#dedede",
			border: "solid #fcfcfc",
			borderRadius: "10px"
		}
	}
});

export default Forecast;