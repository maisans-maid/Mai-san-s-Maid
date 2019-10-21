const Discord = require("discord.js");
const Commando = require('discord.js-commando');
var aq = require('animequotes');
var kitsu = require('node-kitsu');

module.exports.run = async (bot, message, args) => {

let data = aq.randomQuote();

				kitsu.searchAnime(data.anime, 0).then(results => {

					let img = (results[0].attributes.coverImage.original) ? results[0].attributes.coverImage.original : `http://nourl.com`;

					const view = new Discord.RichEmbed()
					.setColor(0x00FFFF)
					.setImage(img)
					.addField(`Quoted from ${data.anime}`, `${data.quote} \n\n -*${data.name}*`)
					.setFooter(`Requested by: ${message.author.username} through Mai-san's Maid`);
					message.channel.send({embed: view});


	});


}


module.exports.help = {
	name: "aniquote"
}
