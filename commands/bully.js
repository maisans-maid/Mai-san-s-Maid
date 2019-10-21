const Discord = require("discord.js");
const action = require('./../assets/json/actions.json');
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {
let mentioned = message.mentions.members.first();
let totalBully = Object.keys(action.bully.imageURL).length;
let bully = action.bully.imageURL[Math.floor(Math.random() * totalBully)];

const description = [
	`${message.author.username} bullies ${mentioned}.`,
	`Oh no! ${message.author.username} bullied ${mentioned}`,
	`Ara ara, ${mentioned} you poor thing, getting bullied by ${message.author.username}.`,
	`${message.author.username} bullied ${mentioned} like he/she was nothing.`
];

let totalError = Object.keys(action.bully.errorReply).length;
const error = action.bully.errorReply[Math.floor(Math.random() * totalError)];

if (mentioned){

				var bully_rand = Math.floor(Math.random()*bully.length);;

				const embed = new Discord.RichEmbed()

				.setDescription(`${description[Math.floor(Math.random() * description.length)]}`)
				.setColor(0x00AE86)
				.setImage(bully)
				.setTimestamp()
				message.channel.send({embed}).catch(console.error);
			}else return message.reply(error);


}

module.exports.help = {
	name: "bully"
}
