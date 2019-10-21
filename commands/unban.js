const Discord = require("discord.js");
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {

  const botNoPerm = new Discord.RichEmbed()
  .setTitle("Unban Directly from server Settings!")
  .setDescription(message.author + ", Unban function uses User ID instead of mentions, it will be much easier to unban there!")
  .setColor(0xeb1a1a)
  .setTimestamp();

  message.channel.send(botNoPerm).catch(console.error);

}

module.exports.help = {
	name: "unban"
}
