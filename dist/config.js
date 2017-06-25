var databaseTTS = [
	{
		"users": [
			{
				"id": "01",
				"firstname": "Sith",
				"lastname": "Lord",
				"avatar": "./img/manager_avatar.jpg",
				"role": "manager",
				"email": "sith@gmail.com",
				"pass": "123456789",
			},
			{
				"id": "02",
				"firstname": "Anakin",
				"lastname": "Skywalker",
				"avatar": "./img/avatar2.jpg",
				"role": "programmer",
				"email": "anakin@gmail.com",
				"pass": "123456789",
			},
			{
				"id": "03",
				"firstname": "Gandalf",
				"lastname": "the White",
				"avatar": "./img/manager_avatar2.jpg",
				"role": "manager",
				"email": "gendalf@gmail.com",
				"pass": "123456789",
			},
			{
				"id": "04",
				"firstname": "Frodo",
				"lastname": "Baggins",
				"avatar": "./img/avatar1.jpg",
				"role": "programmer",
				"email": "frodo@gmail.com",
				"pass": "123456789"
			}
		],
		"tasks": [
			{
				"id":"01tf",
				"title": "Clarify data",
				"subtasks": [
					"Size of images for gallery",
					"Numbers of symbols in news preview"
				],
				"project": "Paint shop",
				"receiver": "Gandalf the White",
				"creator": "Frodo Baggins",
				"progress": "100%"
			},

			{
				"id":"01tg",
				"title": "Find the ring",
				"subtasks": [],
				"project": "The fellowship of the ring",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "100%"
			},
			{
				"id":"02tg",
				"title": "Meet Aragorn",
				"subtasks": [
					"Find the team",
					"Hide from dark knight",
					"Find the place to sleep",
					"Get drunk",
					"Put on the ring"
				],
				"project": "The fellowship of the ring",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "80%"
			},
			{
				"id":"03tg",
				"title": "Fight with troll",
				"subtasks": [],
				"project": "The fellowship of the ring",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "80%"
			},
			{
				"id":"04tg",
				"title": "Escape from gollum",
				"subtasks": [],
				"project": "The two towers",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "0%"
			},
			{
				"id":"05tg",
				"title": "Develop the homepage",
				"subtasks": [
					"Develop header",
					"Develop slider",
					"Develop content",
					"Develop footer"
				],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "25%"
			},
			{
				"id":"06tg",
				"title": "Develop the productpage",
				"subtasks": [],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "100%"
			},
			{
				"id":"07tg",
				"title": "Develop the newspage",
				"subtasks": [],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "100%"
			},
			{
				"id":"08tg",
				"title": "Develop the aboutspage",
				"subtasks": [],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "100%"
			},
			{
				"id":"09tg",
				"title": "Develop the contactspage",
				"subtasks": [],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "100%"
			},
			{
				"id":"10tg",
				"title": "Develop the cabinetpage",
				"subtasks": [],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "100%"
			},
			{
				"id":"01ts",
				"title": "Come to the dark side",
				"subtasks": [
					"Smash young padawans",
					"Kill Obi-Van Kenobi",
					"Lose legs"
				],
				"project": "Dark Side",
				"receiver": "Anakin Skywalker",
				"creator": "Sith Lord",
				"progress": "67%"
			},
			{
				"id":"02ts",
				"title": "Destroy some planet",
				"subtasks": [],
				"project": "Dark Side",
				"receiver": "Anakin Skywalker",
				"creator": "Sith Lord",
				"progress": "0%"
			},
			{
				"id":"03ts",
				"title": "Make test server",
				"subtasks": [
					"Choose the CMS",
					"Do the start settings"
				],
				"project": "Paint shop",
				"receiver": "Anakin Skywalker",
				"creator": "Sith Lord",
				"progress": "0%"
			},
			{
				"id":"04ts",
				"title": "Start programming the site",
				"subtasks": [
					"Make database",
					"Make data for admin",
					"Make data for client",
					"Make data for content manager",
					"Finish admin area for admin",
					"Finish admin area for client",
					"Finish admin area for content manager",
					"Install all plagins",
					"Make test site visible only for developers",
					"Programm the home page"
				],
				"project": "Paint shop",
				"receiver": "Anakin Skywalker",
				"creator": "Sith Lord",
				"progress": "10%"
			},
			{
				"id":"05ts",
				"title": "Develop the authorisation pages",
				"subtasks": [
					"Develop the login page",
					"Develop the forgetpass page",
					"Develop the register page"
				],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Sith Lord",
				"progress": "100%"
			},
			{
				"id":"06ts",
				"title": "Develop the cabinet pages",
				"subtasks": [
					"Develop the account page",
					"Develop the history page"
				],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Sith Lord",
				"progress": "50%"
			},
		]
	}
]
var localUsers = JSON.parse(localStorage.getItem('databaseTTS'));
if (!localUsers) {
	localStorage.setItem('databaseTTS', JSON.stringify(databaseTTS));
}
