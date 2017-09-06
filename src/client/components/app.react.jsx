import React, { Component } from 'react';
import Navigation from './navigation.react.jsx';
import Home from './home.react.jsx';
import About from './about.react.jsx';
import Services from './services.react.jsx';
// import Client from './client.react.jsx';
import Team from './team.react.jsx';
import Contact from './contact.react.jsx';
import Footer from './footer.react.jsx';
// import ComingSoon from './comingSoon.react.jsx';

export default class App extends Component {
 render() {
		return (
			<div id="page">
				<Navigation />
				<Home />
				<About />
				<Services />
				<Team />
				<Contact />
				<Footer />
			</div>
		)
	}
	// render() {
	// 	return (
	// 		<ComingSoon />
	// 	)
	// }
};
