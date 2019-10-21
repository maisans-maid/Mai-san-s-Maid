const Discord = require("discord.js");
const action = require('./../assets/json/actions.json');
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {

let mentioned = message.mentions.members.first();
let totalKiss = Object.keys(action.kiss.imageURL).length;
let kiss = action.kiss.imageURL[Math.floor(Math.random() * totalKiss)];

const description = [
	`${message.author.username} kisses ${mentioned}.`,
	`Out of the blue, ${message.author.username} suddenly grabbed ${mentioned} and kissed him/her..`,
	`Ara ara, ${mentioned} was kissed by ${message.author.username}.`,
	`${message.author.username} smooches ${mentioned}`
];

let totalError = Object.keys(action.kiss.errorReply).length;
const error = action.kiss.errorReply[Math.floor(Math.random() * totalError)];

if (mentioned){

				const embed = new Discord.RichEmbed()
				.setDescription(`${description[Math.floor(Math.random() * description.length)]}`)
				.setColor(0x00AE86)
				.setImage(kiss)
				.setTimestamp()
				message.channel.send({embed}).catch(console.error);
			}else return message.reply(error);


}

module.exports.help = {
	name: "kiss"
}
