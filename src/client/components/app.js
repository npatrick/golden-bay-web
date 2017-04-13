import React, { Component } from 'react';
import Navigation from './navigation';
import Home from './home';
import About from './about';
import Services from './services';
import Work	from './work';
import Client from './client';
import Team from './team';
import Contact from './contact';
import Footer from './footer';

export default class App extends Component {
 render() {
		return (
			<div>
				<Navigation />
				<Home />
				<About />
				<Services />
				<Work />
				<Client />
				<Team />
				<Contact />
				<Footer />
			</div>
		)
	}
};
