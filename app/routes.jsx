import React from 'react';
import {Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';
import Home from './components/home';
import About from './components/about';

export default (
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
	    	<Route path="about" component={About} />
	    	
	    </Route>
);