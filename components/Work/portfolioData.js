export const portfolioData = [
	{
		id: 1,
		title: "Expenses Tracker",
		resources: [["HTML"], ["CSS"], ["ReactJS"], ["Firebase"]],
		description:
			"This expenses tracking web application was built with React.\n\nUser account and database storage were integrated through Google's Firebase service, providing users with the ability to register with Google, alongside the classic e-mail/password authentication.\nThe application is divided into three core pages; dashboard, expenses, settings.\nThis is a fully responsive application, enabling usage across a range of devices, alongside this, both a light and dark theme were also integrated into the design of the app to further benefit user experience.",
		src: {
			light: "/expenses-tracker-1.svg",
			dark: "/expenses-tracker-1-dark.PNG",
		},
		displayDarkModeToggle: "displayDarkModeToggle",
		href: "https://expenses-tracker-je.netlify.app/",
	},
	{
		id: 2,
		title: "Text-to-Markdown",
		resources: ["HTML", "CSS", "ReactJS", "Firebase"],
		description:
			"The text-to-markdown notes app was built using React, utilising react-mde, helping simplify the curation of markdown text passages.\n\nUser authentication and database storage was integrated using Firebase, allowing users to access the app on different devices.\nUpon creating a note, users can see creation date and update individual note titles which will dynamically change the routing.\nValidation was added to the contact form using Regex, displaying messages if any fields require changes.",
		src: "/expenses-tracker-2.png",
		darkMode: "",
		href: "https://t2t-notes-app.netlify.app",
	},
	{
		id: 3,
		title: "Meme Generator",
		resources: ["HTML", "CSS", "ReactJS"],
		description:
			"A simple, yet entertaining meme generator app, allowing users to overlay text onto some of the most popular meme images.\n\nThis app utilises data from an API and displays a random image within the array.",
		src: "/expenses-tracker-3.png",
		darkMode: "",
		href: "",
	},
	{
		id: 4,
		title: "Tenzies Game",
		resources: ["HTML", "CSS", "ReactJS"],
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		src: "/expenses-tracker-4.png",
		description: "Number 44",
		href: "",
	},
	{
		id: 5,
		title: "Accordion",
		resources: ["HTML", "CSS", "ReactJS"],
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		src: "/expenses-tracker-4.png",
		description: "",
		href: "",
	},
];
