const Discord = require("discord.js");
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nope, I will not.");
if(!args[0]) return message.channel.send("Hey " + message.author + ", I don't know how many messages I should delete. Please specify!")

message.channel.bulkDelete(args[0]).then(()=>{
  message.channel.send(`Cleared ${args[0]} messages for ${message.author.username}.`).then(msg => msg.delete(5000));
})

}

module.exports.help = {
	name: "clear"
}
