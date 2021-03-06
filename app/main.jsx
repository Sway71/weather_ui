"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import routes from './routes.jsx';



ReactDOM.render(
	<Router history={browserHistory} routes={routes} />, 
	document.getElementById('app'));