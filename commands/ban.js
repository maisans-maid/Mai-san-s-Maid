const Discord = require("discord.js");
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {
let ban_user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

const x_user = new Discord.RichEmbed()
.setTitle("Missing Parameters!")
.setDescription(message.author + ", it seems that you forgot to mention who is to be banned!")
.setColor(0xeb1a1a)
.setTimestamp();
const noPermission = new Discord.RichEmbed()
.setTitle("Invalid Permissions!")
.setDescription(message.author + ", You don't have the permission to ban members! But you may report them using the command `-report <user> <reason>` to notify the moderators. (Ban Request)")
.setColor(0xeb1a1a)
.setTimestamp();
const bandeny = new Discord.RichEmbed()
.setTitle(message.author.username + "! Slow down. That's a moderator you're trying to ban!")
.setDescription("Server Moderators cannot be banned.")
.setColor(0xeb1a1a)
.setTimestamp();

if (!ban_user) return message.delete().then(message.channel.send({embed: x_user})).catch(console.error);
let ban_reason = args.join(" ").slice(22);
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.delete().then(message.channel.send({embed: noPermission})).catch(console.error);
if (ban_user.hasPermission("MANAGE_MESSAGES")) return message.delete().then(message.channel.send({embed: bandeny})).catch(console.error);

const ban_embed = new Discord.RichEmbed()
.setDescription("User Successfully Banned!")
.setColor(0xe56b00)
.addField("User Banned!", `${ban_user} with ID ${ban_user.id}`,true)
.addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`,true)
.addField("Banned In", message.channel)
.addField("Banned At", message.createdAt)
.addField("Reason", ban_reason);

let reportschannel = message.guild.channels.find(c => c.name === "server-reports");
if(!reportschannel) return message.channel.send("User was successfuly banned but reports channel is unavailable. Please create one to log all banned, kicked, and reported users.\n\nChannel name: #server-reports");

message.delete();
message.guild.member(ban_user).ban(ban_reason);
message.channel.send(ban_user + " was banned!.");
reportschannel.send({embed: ban_embed});
}

module.exports.help = {
	name: "ban"
}
