import React from 'react';
import oboe from 'oboe';

// imported components
import Button from './shared/button';
import CurrentWeather from './weather/current';
import Forecast from './weather/forecast';

var refresher;

var Home = React.createClass({

	// initialize important values in state
	getInitialState() {
		return {
			dailyWeather: [],
			currentWeather: null,
			alerts: [],
			lastRequest: null
		};
	},

	componentDidMount() {
		// refresh results every 30 seconds
		refresher = setInterval( () => {
			if (this.state.currentWeather) {
				this.getWeather();
			} else if (this.state.dailyWeather) {
				this.getForecast();
			}
		}, 30000)
	},

	componentWillUnmount() {
		clearInterval(refresher);
	},

	// function for getting the current weather of location
	getWeather() {
		console.log(this.state.currentWeather);
		var address = document.getElementsByClassName('address-input')[0].value;
		oboe({
			url: "http://" + location.host + "/weather/current",
			method: "post",
			body: {
				"address": address,
			}
		}).done( (result, error) => {
			this.setState({ currentWeather: result.currently, dailyWeather: [] });
			if (result.alerts) {
				this.setState({ alerts: result.alerts });
			}
		});

	},

	// function for getting daily forecast of location
	getForecast() {
		var address = document.getElementsByClassName('address-input')[0].value;
		oboe({
			url: "http://" + location.host + "/weather/forecast",
			method: "post",
			body: {
				"address": address,
			}
		}).done( (results, error) => {
			this.setState({ currentWeather: null, dailyWeather: results.daily });
			if (result.alerts) {
				this.setState({ alerts: result.alerts });
			}
		});
	},

	render() {
		var output
		if (this.state.currentWeather) {
			output = this.state.currentWeather.temperature;
		} else {
			output = ""
		}

		return (
			<div>
				<p>Type your address into the box below and choose the current weather or a forecast to begin.</p>

				<input className="address-input" style={this.styles.input} type="text" placeholder="Type address here..." />
				<Button name="Get Current Weather!" action={this.getWeather} />
				<Button name="Get Forecast!" action={this.getForecast} />
				<div className="search-output">{output}</div>
			</div>
		);
	},

	styles: {
		input: {
			padding: "5px",
			margin: "10px",
			width: "50%",
			display: "block",
			height: "30px",
			borderRadius: "5px",
			border: "solid 3px",
			fontSize: "15px"
		}
	}
});

export default Home;