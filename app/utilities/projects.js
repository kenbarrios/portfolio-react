const projectList = [
	{
		id: '0001',
		title: 'Wage Claim',
		alias: 'wage',
		brief: 'Reimagining the Illinois Department of Labor Wage Claim website',
		instructions1: null,
		instructions2: null,
		tech: ['angularjs', 'typescript'],
		repo: 'https://github.com/kenbarrios/wage-claim-app/',
		site: 'https://kenbarrios.github.io/wage-claim-app/',
		img: '../../images/wage.jpeg'
	},
	{
		id: '0002',
		title: 'LetterDrops',
		alias: 'letter',
		brief: 'A game for kids to learn the ABCs and Keyboard Keys',
		instructions1: 'There are two levels that involve falling “drops” with letters inside: the levels are called “Alphabetized” and “Randomized”. As the drops fall, the user types the corresponding letter into the keyboard to pop the drop.',
		instructions2: 'There is a third level that involves several drops that contain entire words: the level is called “Words”. The user must spell out the entire word, and once the spelling is completed the word drop will pop.',
		tech: ['jquery', 'ruby', 'ruby on rails'],
		repo: 'https://github.com/kenbarrios/LetterDrops',
		site: 'https://letterdrops.herokuapp.com/',
		img: '../../images/letter.jpeg'
	},
	{
		id: '0003',
		title: 'Cause & Reflect',
		alias: 'cause',
		brief: 'A front-end only meetup site for activists',
		instructions1: null,
		instructions2: null,
		tech: ['html', 'css', '@media'],
		repo: 'https://github.com/kenbarrios/kenbarrios.github.io/tree/master/GA-Circuits/unit11',
		site: 'https://kenbarrios.github.io/GA-Circuits/unit11/index.html',
		img: '../../images/cause.jpeg'
	},
	{
		id: '0004',
		title: 'Marvel Tap-iT',
		alias: 'marvel',
		brief: 'A comic book themed video game',
		instructions1: 'Two players play on one desktop/laptop/tablet. After signing in, players choose one hero and one villian. The player on the left of the screen can attack the player on the right using the “A” button.',
		instructions2: 'The player on the right can attack with the “L” button. On a touch screen, players can simply tap their character to attack.',
		tech: ['jquery', 'ruby on rails'],
		repo: 'https://github.com/WDI-Woodstock-Schroeder/MarvelTapIt',
		site: 'http://marveltapit.herokuapp.com/',
		img: '../../images/marvel.jpeg'
	},
];

module.exports = {
	getList: ()  => {
		return projectList;
	}
}