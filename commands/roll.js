const Discord = require("discord.js");
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {
console.log(message.guild)
  const die = ["1", "2", "3", "4", "5", "6"];
			var die_rand = Math.floor(Math.random()*die.length);;

			message.channel.send(message.author + " has rolled a dice. :game_die:");

			 setTimeout(function(){

				 const embed = new Discord.RichEmbed()

				.setDescription(message.author + " has rolled a "+ die[die_rand] +"! :game_die: :game_die:")
				.setColor(0x00AE86)
				.setTimestamp()
				.setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed");
				message.channel.send({embed}).catch(console.error);

			}, 5000);

}

module.exports.help = {
  name: "roll"
}
