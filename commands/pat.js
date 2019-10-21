const Discord = require("discord.js");
const action = require('./../assets/json/actions.json');
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {
	let mentioned = message.mentions.members.first();
	let totalPat = Object.keys(action.pat.imageURL).length;
	let pat = action.pat.imageURL[Math.floor(Math.random() * totalPat)];

	const description = [
		`${message.author.username} pats ${mentioned}.`,
		`Owweeee! ${message.author.username} pats ${mentioned}! Kawaii desu nee?`,
		`Ara ara, ${mentioned} kawaisou na.., getting a pat from ${message.author.username}.`,
		`${message.author.username} pats ${mentioned} like he/she was nothing.`
	];
	let totalError = Object.keys(action.pat.errorReply).length;
	const error = action.pat.errorReply[Math.floor(Math.random() * totalError)];

if (mentioned){

		var pat_rand = Math.floor(Math.random()*pat.length);;

		const embed = new Discord.RichEmbed()
		.setDescription(`${description[Math.floor(Math.random() * description.length)]}`)
		.setColor(0x00AE86)
		.setImage(pat)
		.setTimestamp()
		message.channel.send({embed}).catch(console.error);
		}else return message.reply(error);
}

module.exports.help = {
	name: "pat"
}
