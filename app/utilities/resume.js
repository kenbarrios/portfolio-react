const resume = {
	contact: {
		name: 'ken barrios',
		location: 'lincoln square, chicago',
		email: 'ken.barrios.13 at gmail',
		img: 'ken.jpeg'
	},
	blurb: 'I want to make things, destroy things, then make more things',
	tech: ['html', 'css', 'sass', 'javascript', 'typescript', 'jquery','angularjs', 'react'],
	work: [
		{
			id: 1,
			name: 'learnmetrics',
			period: 'sept 2015 - jan 2017',
			focus: 'front-end developer',
			duties: 'used typescript and angularjs 1.x to build out models, routes, and components the latest version of the company app'
		},
		{
			id: 2,
			name: 'pierce & assoc',
			period: 'april 2013 - may 2014',
			focus: 'senior a/r specialist',
			duties: 'tracked monthly income, generated monthly income reports, primary point person for communication with clients'
		},
		{
			id: 3,
			name: 'cccssf',
			period: 'april 2011 - sept 2012',
			focus: 'housing counselor',
			duties: 'provided hour-long, over-the-phone counseling for debtors facing foreclosure, provided financial analysis and reviews of options'
		}
	],
	school: [
		{
			id: 1,
			name: 'general assembly',
			period: 'april 2015 - june 2015',
			focus: 'full stack web development',
		},
		{
			id: 2,
			name: 'general assembly - online',
			period: 'oct 2014 - dec 2014',
			focus: 'web design'
		},
		{
			id: 3,
			name: 'northeastern illinois univ',
			period: 'sept 2002 - may 2009',
			focus: 'history & political science'
		}
	]
};

module.exports = {
	getResume: () => {
		return resume;
	}
};