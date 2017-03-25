import React, { Component } from 'react';
import Navigation from './navigation';
import Home from './home';
import Services from './services';

export default class App extends Component {
 render() {
		return (
			<div>
				<Navigation />
				<Home />
				<Services />
			</div>
		)
	}
};
