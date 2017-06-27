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
				"done": true,
				"subtasks": [
					{
						"title": "Size of images for gallery",
						"done": true
					},
					{
						"title": "Numbers of symbols in news preview",
						"done": true
					}
				],
				"project": "Paint shop",
				"receiver": "Gandalf the White",
				"creator": "Frodo Baggins",
				"progress": "100%"
			},
			{
				"id":"01tg",
				"title": "Find the ring",
				"done": true,
				"subtasks": [],
				"project": "The fellowship of the ring",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "100%"
			},
			{
				"id":"02tg",
				"title": "Meet Aragorn",
				"done": false,
				"subtasks": [
					{
						"title": "Find the team",
						"done": true
					},
					{
						"title": "Hide from dark knight",
						"done": true
					},
					{
						"title": "Find the place to sleep",
						"done": true
					},
					{
						"title": "Get drunk",
						"done": true
					},
					{
						"title": "Put on the ring",
						"done": false
					}
				],
				"project": "The fellowship of the ring",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "80%"
			},
			{
				"id":"03tg",
				"title": "Fight with troll",
				"done": false,
				"subtasks": [],
				"project": "The fellowship of the ring",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "0%"
			},
			{
				"id":"04tg",
				"title": "Escape from gollum",
				"done": false,
				"subtasks": [],
				"project": "The two towers",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "0%"
			},
			{
				"id":"05tg",
				"title": "Develop the homepage",
				"done": false,
				"subtasks": [
					{
						"title": "Develop header",
						"done": true,
					},
					{
						"title": "Develop slider",
						"done": false,
					},
					{
						"title": "Develop content",
						"done": false,
					},
					{
						"title": "Develop footer",
						"done": false,
					}
				],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "25%"
			},
			{
				"id":"06tg",
				"title": "Develop the productpage",
				"done": true,
				"subtasks": [],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "100%"
			},
			{
				"id":"07tg",
				"title": "Develop the newspage",
				"done": true,
				"subtasks": [],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "100%"
			},
			{
				"id":"08tg",
				"title": "Develop the aboutspage",
				"done": true,
				"subtasks": [],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "100%"
			},
			{
				"id":"09tg",
				"title": "Develop the contactspage",
				"done": false,
				"subtasks": [],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "0%"
			},
			{
				"id":"10tg",
				"title": "Develop the cabinetpage",
				"done": true,
				"subtasks": [],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "100%"
			},
			{
				"id":"01ts",
				"title": "Come to the dark side",
				"done": false,
				"subtasks": [
					{
						"title": "Smash young padawans",
						"done": true,
					},
					{
						"title": "Kill Obi-Van Kenobi",
						"done": true,
					},
					{
						"title": "Lose legs",
						"done": false,
					}
				],
				"project": "Dark Side",
				"receiver": "Anakin Skywalker",
				"creator": "Sith Lord",
				"progress": "67%"
			},
			{
				"id":"02ts",
				"title": "Destroy some planet",
				"done": false,
				"subtasks": [],
				"project": "Dark Side",
				"receiver": "Anakin Skywalker",
				"creator": "Sith Lord",
				"progress": "0%"
			},
			{
				"id":"03ts",
				"title": "Make test server",
				"done": false,
				"subtasks": [
					{
						"title": "Choose the CMS",
						"done": false
					},
					{
						"title": "Do the start settings",
						"done": false
					}
				],
				"project": "Paint shop",
				"receiver": "Anakin Skywalker",
				"creator": "Sith Lord",
				"progress": "0%"
			},
			{
				"id":"04ts",
				"title": "Start programming the site",
				"done": false,
				"subtasks": [
					{
						"title": "Make database",
						"done": true
					},
					{
						"title": "Make data for admin",
						"done": false
					},
					{
						"title": "Make data for client",
						"done": false
					},
					{
						"title": "Make data for content manager",
						"done": false
					},
					{
						"title": "Finish admin area for admin",
						"done": false
					},
					{
						"title": "Finish admin area for client",
						"done": false
					},
					{
						"title": "Finish admin area for content manager",
						"done": false
					},
					{
						"title": "Install all plagins",
						"done": false
					},
					{
						"title": "Make test site visible only for developers",
						"done": false
					},
					{
						"title": "Programm the home page",
						"done": false
					}
				],
				"project": "Paint shop",
				"receiver": "Anakin Skywalker",
				"creator": "Sith Lord",
				"progress": "10%"
			},
			{
				"id":"05ts",
				"title": "Develop the authorisation pages",
				"done": true,
				"subtasks": [
					{
						"title": "Develop the login page",
						"done": true
					},
					{
						"title": "Develop the forgetpass page",
						"done": true
					},
					{
						"title": "Develop the register page",
						"done": true
					}
				],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Sith Lord",
				"progress": "100%"
			},
			{
				"id":"06ts",
				"title": "Develop the cabinet pages",
				"done": false,
				"subtasks": [
					{
						"title": "Develop the account page",
						"done": true
					},
					{
						"title": "Develop the history page",
						"done": false
					}
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
