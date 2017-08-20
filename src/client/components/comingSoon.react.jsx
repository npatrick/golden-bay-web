import React from 'react';

const ComingSoon = () => {

	const comingSoonStyle = {
		'marginTop': '10%',
		'opacity': '0.75'
	};

	return (
		<div className="container" id="coming-soon">
			<div className="jumbotron" style={comingSoonStyle}>
				<h3>Thank you for visiting Golden Bay Health & Staffing Services, LLC</h3>
				<h4>Our site is still in the works!</h4>
				<h4>Please come back later or contact <strong>(310) 328-4541</strong> for more info.</h4>
			</div>
		</div>

	);
};

export default ComingSoon;
