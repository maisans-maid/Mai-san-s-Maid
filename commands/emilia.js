const Discord = require("discord.js");
const Commando = require('discord.js-commando');
let api = require('nekos-image-api');


module.exports.run = async (bot, message, args) => {
 await message.channel.startTyping()

  api.image.emilia().then(res => {


    var emilia = new Discord.RichEmbed()
    .setAuthor("Emilia Kawaii na~")
    .setDescription(`Here's Emilia-tan for you, ${message.author.username}-sama!`)
    .setImage(res.url)
    .setColor(0x9932CC)
    .setFooter(`Requested by:  ${message.author.username}`)

    return message.channel.send({embed: emilia});


   });

 await message.channel.stopTyping()
}



module.exports.help = {
  name: "emilia"
}
