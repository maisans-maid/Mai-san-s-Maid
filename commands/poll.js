

const Discord = require("discord.js");
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {


  			const param1 = message.content.split('-');


  			if (param1.length < 5 ){
  				const errpoll1 = new Discord.RichEmbed()
  				.setTitle("Error: Insuffecient information!")
  				.setDescription(message.author + ", The information you supplied could not create a poll")
  				.setColor(0xec0e0e)

  				message.channel.send({embed: errpoll1}).catch(console.error);
  				return;


  			}

  			if (param1.length > 6){
  				const errpoll = new Discord.RichEmbed()
  				.setTitle("Error: Too much choices!")
  				.setDescription(message.author + ", you can only provide up to 3 choices.")//cannot create more than 3 reacts as of now.
  				.setColor(0xec0e0e)

  				message.channel.send({embed: errpoll}).catch(console.error);
  				return;

  			}
  			const choices = [":heart:", ":yellow_heart:", ":green_heart:", ":blue_heart:", ":purple_heart:"];
  			var o;
  			var choice = '';
  			var param = '';
  			for (o = 0; o < param1.length - 3; o++){
  					choice += choices[o] + "\n";
  					}
  			for (o = 3; o < param1.length; o++){
  					param += ":eight_pointed_black_star: " + param1[o] + "\n";
  					}

  			var newpoll = new Discord.RichEmbed()
  			.setAuthor("Poll created by: " + message.author.username)
  			.setTitle(param1[2])//question
  			.addField("Reacts", choice ,true)
  			.addField("Choices", param ,true)
  			.addBlankField()
  			.setColor(0x28e927)
  			.setFooter("Vote by clicking on the icon");
  			message.delete();

  			if (message.content.includes('@e')){
  				message.channel.send('Important poll for @everyone');}

  			let sendpoll = await message.channel.send({embed: newpoll});

  			if (param1.length === 5) {
  			await sendpoll.react('❤');
        await sendpoll.react('💛').catch(console.error);
  			} else if (param1.length === 6){
        await sendpoll.react('❤');
        await sendpoll.react('💛');
        await sendpoll.react('💚').catch(console.error);
  			} else if (param.length === 7) {
        await sendpoll.react('❤');
        await sendpoll.react('💛');
        await sendpoll.react('💚');
        await sendpoll.react('💙').catch(console.error);
  			}else if (param.length === 8){
        await sendpoll.react('❤');
        await sendpoll.react('💛');
        await sendpoll.react('💚');
        await sendpoll.react('💙');
        await sendpoll.react('💜').catch(console.error);
  			}


  		}

module.exports.help = {
	name: "poll"
}
