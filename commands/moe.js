const Discord = require("discord.js");
const Commando = require('discord.js-commando');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

  randomPuppy('awwnime')
              .then(url => {
                  const moe = new Discord.RichEmbed()
                  .setAuthor(`Here's a moe pic for you, ${message.author.username}-sama!`)
                  .setImage(url)
                  .setColor(0x9932CC)
                  .setFooter(`Requested by:  ${message.author.username}`)
                  return message.channel.send({embed: moe});

                }).catch(console.error);

}

module.exports.help = {
	name: "moe"
}
