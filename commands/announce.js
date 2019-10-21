const Discord = require("discord.js");
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {

  let chmention = message.mentions.channels.first();
  			const anpar = message.content.split(' ').slice(2);

  			if (!chmention){

  				const announce_error = new Discord.RichEmbed()
  				.setTitle("Error: No Channel!")
  				.setDescription("Please make sure you mention a channel and the mentioned channel is after the command.")
  				.setColor(0xec0e0e)
  				.setTimestamp();

  				return message.channel.send({embed: announce_error}).catch(console.error);

  			}

  			if (anpar.length < 1) {

  				const announce_error = new Discord.RichEmbed()
  				.setTitle("Error: No Message!")
  				.setDescription("Please make sure you to enter your message after the channel mention.")
  				.setColor(0xec0e0e)
  				.setTimestamp();

  				return message.channel.send({embed: announce_error}).catch(console.error);
  			}

  			var msganpar = '';
  			var t = '';
  			for (t = 0; t < anpar.length ; t++){
  				msganpar += anpar[t] + " ";
  			}

  			const sendmessage = new Discord.RichEmbed()
  			.setDescription(msganpar)
  			.setColor(0x28e927);

  			message.delete();
  			return chmention.send({embed: sendmessage}).catch(console.error);


}

module.exports.help = {
	name: "announce"
}
