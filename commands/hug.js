const Discord = require("discord.js");
const action = require('./../assets/json/actions.json');
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {
let mentioned = message.mentions.members.first();
let totalHug = Object.keys(action.hug.imageURL).length;
let hug = action.hug.imageURL[Math.floor(Math.random() * totalHug)];

const description = [
	`${message.author.username} hugs ${mentioned}.`,
	`Owweeee! ${message.author.username} hugged ${mentioned}! Kawaii desu nee?`,
	`Ara ara, ${mentioned} you lucky bastard, getting hugged by ${message.author.username}.`,
	`${message.author.username} hugged ${mentioned} like he/she was nothing.`
];

let totalError = Object.keys(action.hug.errorReply).length;
const error = action.hug.errorReply[Math.floor(Math.random() * totalError)];


if (mentioned){

				var hug_rand = Math.floor(Math.random()*hug.length);;

				const embed = new Discord.RichEmbed()
				.setDescription(`${description[Math.floor(Math.random() * description.length)]}`)
				.setColor(0x00AE86)
				.setImage(hug)
				.setTimestamp()
				message.channel.send({embed}).catch(console.error);
			}else return message.reply(error);
    }

    module.exports.help = {
    	name: "hug"
    }
