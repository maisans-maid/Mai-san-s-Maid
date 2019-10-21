const Discord = require("discord.js");
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {

  const color_roles =  ["Red", "Orange", "Dark Yellow", "Yellow", "Green", "Blue", "Purple", "Pink", "Black", "Dark Red", "Dark Pink", "Invisible"];
	var color_command = ["red", "orange", "dark yellow", "yellow", "green", "blue", "purple", "pink", "black", "dark red", "dark pink", "inv"];
	const color_titles = ["Red Warriors.", "Orange Troopers.", "Dark Yellow Spikers.", "Yellow Kings.", "Green Travelers.", "Blue Assasins", "Purple Legions.", "Pink Mages.", "Black Butlers.", "Dark Red Sweepers.", "Dark Pink Champions.", "Invisible Phantoms."];
  const custom_colors = message.guild.channels.find(ch => ch.name === 'custom-colors');
  const mchannel = message.guild.channels.find(ch => ch.name === 'bot-spam');

  if (message.channel.id === '598152549283004426') {
  				if (message.member.roles.some(r => color_roles.includes(r.name)) ){
  					for (var i in color_command){
  						if (message.content.includes(color_command[i])){
  								message.delete()
  								mchannel.send(message.author + " has left the " + color_titles[i]);
                  let memberRole = message.member.guild.roles.find(r => r.name === color_roles[i]);
                  message.member.removeRole(memberRole).catch(console.error);
  								return;
  						}
  					}
  				} else message.delete();mchannel.send("ERROR: " + message.author + "-san, Either you need to specify the color to be removed, or ou don't have colors to be removed.");
  			}else message.reply("This function is unavailable on this channel. Please move to " + custom_colors + "to continue using this command.").then().catch(console.error);


}

module.exports.help = {
	name: "remove"
}
