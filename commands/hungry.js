const Discord = require("discord.js");
const action = require('./../assets/json/actions.json');
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {
let mentioned = message.mentions.members.first();
let totalHungry = Object.keys(action.hungry.imageURL).length;
let hungry = action.hungry.imageURL[Math.floor(Math.random() * totalHungry)];

const description = [
	`${message.author.username} says he's hungry! somebody give him foooood!`,
	`Oh, ${message.author.username} you're hungry? O kawaii koto.?`,
	`${message.author.username} wants to eat weiner.`
];
let totalError = Object.keys(action.hungry.errorReply).length;
const error = action.hungry.errorReply[Math.floor(Math.random() * totalError)];

if (!mentioned){

	var hungry_rand = Math.floor(Math.random()*hungry.length);;

	const embed = new Discord.RichEmbed()
	.setDescription(`${description[Math.floor(Math.random() * description.length)]}`)
	.setColor(0x00AE86)
	.setImage(hungry)
	.setTimestamp()
	message.channel.send({embed}).catch(console.error);
	}else return message.reply(error);



}

module.exports.help = {
  name: "hungry"
}
