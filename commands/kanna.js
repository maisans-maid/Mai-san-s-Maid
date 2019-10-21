const Discord = require("discord.js");
const Commando = require('discord.js-commando');
let api = require('nekos-image-api');


module.exports.run = async (bot, message, args) => {
 await message.channel.startTyping()
  api.image.kanna().then(res => {



    var kanna = new Discord.RichEmbed()
    .setAuthor("Kanna Kawaii na~")
    .setDescription(`Here's Kanna for you, ${message.author.username}-sama!`)
    .setImage(res.url)
    .setColor(0x9932CC)
    .setFooter(`Requested by:  ${message.author.username}`)


    return message.channel.send({embed: kanna});


   });
     await message.channel.stopTyping();

}



module.exports.help = {
  name: "kanna"
}
