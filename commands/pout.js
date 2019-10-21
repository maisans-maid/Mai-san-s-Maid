const Discord = require("discord.js");
const action = require('./../assets/json/actions.json');
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {
let mentioned = message.mentions.members.first();
let totalPout = Object.keys(action.pout.imageURL).length;
let pout = action.pout.imageURL[Math.floor(Math.random() * totalPout)];

const description = [
	`${message.author.username} pouts! Ksksksksksk`,
	`Oh, ${message.author.username} pots minna! Kawaiii!`,
	`${message.author.username} pouted.. You made him/her mad.`
];
let totalError = Object.keys(action.pout.errorReply).length;
const error = action.pout.errorReply[Math.floor(Math.random() * totalError)];


if (!mentioned){

	var pout_rand = Math.floor(Math.random()*pout.length);;

	const embed = new Discord.RichEmbed()
	.setDescription(`${description[Math.floor(Math.random() * description.length)]}`)
	.setColor(0x00AE86)
	.setImage(pout)
	.setTimestamp()
	message.channel.send({embed}).catch(console.error);
}else return message.reply(error);


}

module.exports.help = {
  name: "pout"
}
