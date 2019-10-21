const Discord = require("discord.js");
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {
let mentioned = message.mentions.members.first();

const head = ["HEAD! ", "TAIL! "];
			var flip_rand = Math.floor(Math.random()*head.length);;
			const tail = ["TAIL! ", "HEAD! "];
			const mention_result = ["Lost.", "Won."];
			const author_result = [ "Won.", "Lost."];
			const colorflip = ["0x28e927", "0xeb1a1a"];

			if (!mentioned){

				if (message.content.includes("head")){//add a function that challenges mentioned user.

					message.channel.send(message.author + " has flipped a coin.");
					setTimeout(function(){
						const flipEmbed = new Discord.RichEmbed()
						.setColor(colorflip[flip_rand])
						.setDescription(message.author + ": " + author_result[flip_rand])
						.setTitle("Flip Coin result: " + head[flip_rand]);

						message.channel.send({embed: flipEmbed});
					}, 3000);

				}else if (message.content.includes("tail")){

					message.channel.send(message.author + " has flipped a coin.");
					setTimeout(function(){
						const flipEmbed = new Discord.RichEmbed()
						.setColor(colorflip[flip_rand])
						.setDescription(message.author + ": " + author_result[flip_rand])
						.setTitle("Flip Coin result: " + tail[flip_rand]);

						message.channel.send({embed: flipEmbed});
					}, 3000);

				}else message.reply("Please specify if you want head or tail");

			}else if (mentioned) {

				if (message.content.includes("head")){

					message.channel.send(message.author + " has flipped a coin.\n" + message.author + ": Head.\n" + mentioned + ": Tail.");
					setTimeout(function(){
						const flipEmbed = new Discord.RichEmbed()
						.setColor(colorflip[flip_rand])
						.setDescription(message.author + ": " + author_result[flip_rand] + "\n" + mentioned + ": " + mention_result[flip_rand])
						.setTitle("Flip Coin result: " + head[flip_rand]);

						message.channel.send({embed: flipEmbed});
					}, 3000);

				}else if (message.content.includes("tail")){

					message.channel.send(message.author + " has flipped a coin.\n" + message.author + ": Tail.\n" + mentioned + ": Head.");
					setTimeout(function(){
						const flipEmbed = new Discord.RichEmbed()
						.setColor(colorflip[flip_rand])
						.setDescription(message.author + ": " + author_result[flip_rand] + "\n" + mentioned + ": " + mention_result[flip_rand])
						.setTitle("Flip Coin result: " + tail[flip_rand]);

						message.channel.send({embed: flipEmbed});
					}, 3000);

				}else message.reply("Please specify if you want head or tail");
			}

}

module.exports.help = {
  name: "flip"
}
