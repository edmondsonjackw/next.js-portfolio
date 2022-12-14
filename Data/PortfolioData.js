export const PortfolioData = [
	{
		id: 0,
		title: "Expenses Tracker",
		resources: ["HTML", "CSS", "ReactJS", "Firebase"],

		description:
			"This personal expenses tracking app is divided into three core pages; dashboard, expenses, settings.\nUser account and database storage were integrated through Google's Firebase service, providing users with the ability to register with Google, alongside the classic e-mail/password authentication.\nThis is a fully responsive application, enabling usage across a range of devices. Alongside this, both a light and dark theme were also integrated into the design of the app to further benefit user experience.",
		src: {
			light: [
				"/Projects/Expenses/expenses-1.png",
				"/Projects/Expenses/expenses-2.png",
				"/Projects/Expenses/expenses-light-1.png",
				"/Projects/Expenses/expenses-light-2.png",
				"/Projects/Expenses/expenses-light-3.png",
				"/Projects/Expenses/expenses-light-4.png",
				"/Projects/Expenses/expenses-light-5.png",
				"/Projects/Expenses/expenses-light-6.png",
				"/Projects/Expenses/expenses-light-7.png",
			],
			dark: [
				"/Projects/Expenses/expenses-dark-1.png",
				"/Projects/Expenses/expenses-dark-2.png",
				"/Projects/Expenses/expenses-dark-3.png",
				"/Projects/Expenses/expenses-dark-4.png",
				"/Projects/Expenses/expenses-dark-5.png",
				"/Projects/Expenses/expenses-dark-6.png",
				"/Projects/Expenses/expenses-dark-7.png",
			],
		},
		displayDarkModeToggle: "displayDarkModeToggle",
		href: "https://expenses-tracker-je.netlify.app/",
	},
	{
		id: 1,
		title: "Markdown Notes App",
		resources: ["HTML", "CSS", "ReactJS", "Firebase"],
		description:
			"The text-to-markdown notes app utilises the react-mde API, helping simplify the curation of markdown text passages.\n\nUser authentication and database storage was integrated using Firebase, allowing users to access the app on different devices.\nUpon creating a note, users can see creation date and update individual note titles which will dynamically change the routing.\nValidation was added to the contact form using Regex, displaying messages if any fields require changes.",
		src: [
			"/Projects/T2M/t2m-1.png",
			"/Projects/T2M/t2m-2.png",
			"/Projects/T2M/t2m-3.png",
			"/Projects/T2M/t2m-4.png",
			"/Projects/T2M/t2m-5.png",
			"/Projects/T2M/t2m-6.png",
			"/Projects/T2M/t2m-7.png",
		],

		darkMode: "",
		href: "https://t2m-notes-app.netlify.app",
	},
	{
		id: 2,
		title: "Tenzies Game",
		resources: ["HTML", "CSS", "ReactJS"],
		description:
			"Tenzies is a game whereby the player must roll dice and select a number to proceed with, placing those dice to one side. To win, the player must roll the remaining dice until all numbers are the same in the quickest amount of time.\n\nA roll counter and timer were added into the app to allow players to record high scores, which are stored within the browser.",
		src: [
			"/Projects/Tenzies/tenzies-1.png",
			"/Projects/Tenzies/tenzies-2.png",
			"/Projects/Tenzies/tenzies-3.png",
		],
		href: "https://je-tenzies.netlify.app/",
	},
	{
		id: 3,
		title: "Meme Generator",
		resources: ["HTML", "CSS", "ReactJS"],
		description:
			"A simple, yet entertaining meme generator app, allowing users to overlay text onto some of the most popular meme images.\n\nThis app utilises data from an API and displays a random image within the array.",
		src: [
			"/Projects/Meme/meme-1.png",
			"/Projects/Meme/meme-2.png",
			"/Projects/Meme/meme-3.png",
		],

		darkMode: "",
		href: "https://je-meme-generator.netlify.app/",
	},
];
