const Discord = require("discord.js");
const Commando = require('discord.js-commando');
var kitsu = require('node-kitsu');
const weeb = require('node-weeb');

module.exports.run = async (bot, message, args) => {

  const query = message.content.split(' ').slice(1);


if (query.length === 0) return message.reply('Incomplete Parameters: No query added');


let name = query.toString();


weeb.manga(query).then(res => {
    var data = JSON.parse(res).data[0];

try {
    const view = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .setAuthor("Is this the one " + message.author.username + "-sama?")
    .setTitle(data.attributes.titles.en_jp + " - " + data.attributes.titles.ja_jp)
    .setURL(data.links.self)
    .setDescription(data.attributes.titles.en)
    .setImage(data.attributes.posterImage.large)
    .addField("Synopsis",data.attributes.synopsis)
    .addField("Type", data.attributes.mangaType, true)
    .addField("Start Date", data.attributes.startDate, true)
    .addField("Status", data.attributes.status, true)
    .addField("Chapter Count", data.attributes.chapterCount, true)
    .addField("Volume Count", data.attributes.volumeCount, true)
    .addField("Serialization", data.attributes.serialization, true)
    .addField("Rating", data.attributes.ageRating + " - " + data.attributes.ageRatingGuide, true)
    .setFooter("📈 Score || " + data.attributes.favoritesCount );

    message.channel.send({embed: view})
} catch (err){
  const view = new Discord.RichEmbed()
  .setColor(0x00FFFF)
  .setAuthor("Is this the one " + message.author.username + "-sama?")
  .setTitle(data.attributes.titles.en_jp + " - " + data.attributes.titles.ja_jp)
  .setURL(data.links.self)
  .setDescription(data.attributes.titles.en)
  .setImage(data.attributes.posterImage.large)
  .addField("Synopsis",data.attributes.synopsis.split('\n')[0])
  .addField("Type", data.attributes.mangaType, true)
  .addField("Start Date", data.attributes.startDate, true)
  .addField("Status", data.attributes.status, true)
  .addField("Chapter Count", data.attributes.chapterCount, true)
  .addField("Volume Count", data.attributes.volumeCount, true)
  .addField("Serialization", data.attributes.serialization, true)
  .addField("Rating", data.attributes.ageRating + " - " + data.attributes.ageRatingGuide, true)
  .setFooter("📈 Score || " + data.attributes.favoritesCount );

  message.channel.send({embed: view})

}
}).catch(message.channel.send(`No manga found for ${query}.`));

}

module.exports.help = {
  name: "manga"
}
