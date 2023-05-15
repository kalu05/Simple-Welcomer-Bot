const { ActivityType } = require('discord.js');
const client = require('..');
const chalk = require('chalk');

client.on("ready", () => {
	
	/* Activity Types:
	"COMPETING"	| ActivityType.Competing
	"CUSTOM"	| ActivityType.Custom
	"LISTENING"	| ActivityType.Listening
	"PLAYING"	| ActivityType.Playing
	"STREAMING"	| ActivityType.Streaming
	"WATCHING"	| ActivityType.Watching
	*/

	/* Status Types:
	"online"
	"idle"
	"dnd"
	"offline"
	*/

	client.user.setPresence({
		activities: [{ name: `made by kaluye#4700`, type: ActivityType.Streaming }],
		status: 'online',
	  });

	console.log(chalk.red(`Logged in as ${client.user.tag}!`))
	console.log(chalk.blue(`MADE BY KALUYE#4700`))
});