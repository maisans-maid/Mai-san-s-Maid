const Discord = require("discord.js");
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {
let mentioned = message.mentions.members.first();

if (mentioned){

				const user = message.mentions.users.first();
				const embed = new Discord.RichEmbed()

				.setDescription(user + "'s avatar")
				.setColor(0x00AE86)
				.setImage(user.avatarURL)
				.setTimestamp()
				.setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed");
				message.channel.send({embed}).catch(console.error);

			}else return message.reply("Missing Parameters: Please mention whose avatar is to be shown.");


}

module.exports.help = {
	name: "av"
}
