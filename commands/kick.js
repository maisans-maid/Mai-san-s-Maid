const Discord = require("discord.js");
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {
let kick_user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

const x_user = new Discord.RichEmbed()
.setTitle("Missing Parameters!")
.setDescription(message.author + ", it seems that you forgot to mention who is to be kicked!")
.setColor(0xeb1a1a)
.setTimestamp();
const noPermission = new Discord.RichEmbed()
.setTitle("Invalid Permissions!")
.setDescription(message.author + ", You don't have the permission to kick members! But you may report them using the command `-report <user> <reason>` to notify the moderators. (Kick Request)")
.setColor(0xeb1a1a)
.setTimestamp();
const kickdeny = new Discord.RichEmbed()
.setTitle(message.author.username + "! Slow down. That's a moderator you're trying to kick!")
.setDescription("Server Moderators cannot be kicked.")
.setColor(0xeb1a1a)
.setTimestamp();

if (!kick_user) return message.delete().then(message.channel.send({embed: x_user})).catch(console.error);
let kick_reason = args.join(" ").slice(22);
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.delete().then(message.channel.send({embed: noPermission})).catch(console.error);
if (kick_user.hasPermission("MANAGE_MESSAGES")) return message.delete().then(message.channel.send({embed: kickdeny})).catch(console.error);

const kick_embed = new Discord.RichEmbed()
.setDescription("User Successfully Kicked out of the server!")
.setColor(0xe56b00)
.addField("User Kicked", `${kick_user} with ID ${kick_user.id}`,true)
.addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`,true)
.addField("Kicked In", message.channel)
.addField("Kicked At", message.createdAt)
.addField("Reason", kick_reason);

let reportschannel = message.guild.channels.find(c => c.name === "server-reports");
if(!reportschannel) return message.channel.send("User was successfuly kicked but reports channel is unavailable. Please create one to log all banned, kicked, and reported users.\n\nChannel name: #server-reports");

message.delete();
message.guild.member(kick_user).kick(kick_reason);
message.channel.send(kick_user + "was kicked from the server!");
reportschannel.send({embed: kick_embed});
}

module.exports.help = {
	name: "kick"
}
