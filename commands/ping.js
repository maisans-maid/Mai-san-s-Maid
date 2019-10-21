const Discord = require("discord.js");
const Commando = require('discord.js-commando');


module.exports.run = async (bot, message, args) => {

	const ping = Math.round(bot.ping);
		if (ping < '301') {var x = 0;} else if ((ping > '300') && (ping < '501')) {var x = 1;} else {var x = 2;}

		const color = ["0x28e927", "0x1d10dd", "0xeb1a1a"];
		const condition = ["Healthy Signal", "Fair Signal", "Critical Signal"];
		const pingEmbed = new Discord.RichEmbed()
		.setColor(color[x])
		.setDescription(`${Math.round(bot.ping)}ms`)
		.setTitle("Mai-san's Maid latency.")
		.setFooter(condition[x]);
		const responses = [
		    "Pong!",
		    "I-It\'s not like I wanted to say pong or anything...",
		    "Pong...",
		    "Testing, testing, 1, 2, 3!",
		    "Anyone there?",
		    "Does anyone even use this?",
		    "Woo! A secret command!",
		    "Ping! ...I mean **pong!**",
		    "Hi there!",
		    "At your service!",
		    "Yes?",
		    "Hello!",
		    "Konnichiwa~",
		    "Ohayoo~",
		    "I'm up and running!",
		    "Here I am!",
		    "Right here!",
		    "Hai!",
		    "Hey there!",
		    "You found me!",
		    "Nya!",
		    "N-Nya..?",
		    "Nyahaha you found me!"
		];

		let choice = responses[Math.floor(Math.random() * responses.length)];

		return message.channel.send(choice).then(message.channel.send(pingEmbed)).catch(console.error);

}

module.exports.help = {
	name: "ping"
}
