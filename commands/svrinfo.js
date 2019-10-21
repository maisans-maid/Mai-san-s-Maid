const Discord = require("discord.js");
const Commando = require('discord.js-commando');
const serverinfo = require('./../assets/json/svrinfo.json');
const total = Object.keys(serverinfo.description).length;
const total2 = Object.keys(serverinfo.randTrivia).length;
const total3 = Object.keys(serverinfo.color).length;
const total4 =  Object.keys(serverinfo.botresponse).length;
const total5 =  Object.keys(serverinfo.honorifics).length;

module.exports.run = async (bot, message, args) => {

var random = Math.floor(Math.random() * total);
var random2 = Math.floor(Math.random() * total2);
var random3 = Math.floor(Math.random() * total3);
var random4 = Math.floor(Math.random() * total4);
var random5 = Math.floor(Math.random() * total5);
var verificationlvl = [
  "None",
  "Low",
  "Medium",
  "(╯°□°）╯︵ ┻━┻",
  "┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻",
];


let v = new Discord.RichEmbed()
.setAuthor(`${serverinfo.botresponse[random4]} ${message.author.username}-${serverinfo.honorifics[random5]}!`)
.setTitle(`${message.guild.name}'s Server General Information'`)
.setDescription(serverinfo.description[random])
.setURL()
.setColor(serverinfo.color[random3])
.addBlankField()
.addField(`❯\u2000Server Name`,`•\u2000 ${message.guild.name}`,true)
.addField(`❯\u2000Server Region`,`•\u2000 ${message.guild.region}`,true)
.addField(`❯\u2000Server Owner`, `•\u2000 <@${message.guild.ownerID}>`,true)
.addField(`❯\u2000Server Channels`,`•\u2000 ${message.guild.channels.size} channels`,true)
.addField(`❯\u2000Server Roles`,`•\u2000 ${message.guild.roles.size} roles`,true)
.addField(`❯\u2000Server Members`, `•\u2000 ${message.guild.memberCount} members`, true)
.addField(`❯\u2000Online Members`,`•\u2000 ${message.guild.presences.filter(p=>p.status == 'online').size} / ${message.guild.memberCount} [${Math.round(message.guild.presences.filter(p=>p.status == 'online').size / message.guild.memberCount * 100 )}%]`,true)
.addField(`❯\u2000Idle Members`,`•\u2000 ${message.guild.presences.filter(p=>p.status == 'idle').size} / ${message.guild.memberCount} [${Math.round(message.guild.presences.filter(p=>p.status == 'idle').size / message.guild.memberCount * 100)}%]`,true)
.addField(`❯\u2000Do Not Disturb Members`, `•\u2000 ${message.guild.presences.filter(p=>p.status == 'dnd').size} / ${message.guild.memberCount} [${Math.round(message.guild.presences.filter(p=>p.status == 'dnd').size / message.guild.memberCount * 100)}%]`,true)
.addField(`❯\u2000Offline Members`,`•\u2000 ${message.guild.memberCount - message.guild.presences.filter(p=>p.status == 'online').size - message.guild.presences.filter(p=>p.status == 'idle').size - message.guild.presences.filter(p=>p.status == 'dnd').size} / ${message.guild.memberCount} [${Math.round((message.guild.memberCount - message.guild.presences.filter(p=>p.status == 'online').size - message.guild.presences.filter(p=>p.status == 'idle').size - message.guild.presences.filter(p=>p.status == 'dnd').size) / message.guild.memberCount * 100)}%]`,true)
.addField(`❯\u2000Verification Level`, `•\u2000 ${verificationlvl[message.guild.verificationLevel]}`, true)
.addField(`❯\u2000Explicit Content Filter`, `•\u2000 ${message.guild.explicitContentFilter}`,true)
.addField(`❯\u2000Default Message Notification`, `•\u2000 ${message.guild.defaultMessageNotifications,true}`)
.addField(`❯\u2000Trivia`, `•\u2000 ${serverinfo.randTrivia[random2]}`)
.setThumbnail(message.guild.iconURL)
.setFooter(`This query is requested by ${message.author.username} at ${message.createdTimestamp}`);

return message.channel.send({embed: v});
}

module.exports.help = {
	name: "svrinfo"
}
