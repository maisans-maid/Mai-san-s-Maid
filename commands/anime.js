const Discord = require("discord.js");
const Commando = require('discord.js-commando');
const malScraper = require('mal-scraper');

module.exports.run = async (bot, message, args) => {


const query = message.content.split(' ').slice(1);



if (query.length === 0) return message.reply('Incomplete Parameters: No query added');

 await message.channel.startTyping()

  let name = query.toString();

  malScraper.getInfoFromName(name).then((data) => {

    let i = '';
    let j = '';
    let genre = '';
        for (i = 0; i < data.genres.length - 1 ; i++){
            genre += data.genres[i] + ", ";
            }
    let producers = '';
        for (i = 0; i < data.producers.length - 1; i++){
          producers += data.producers[i] + ", ";
        }

    var type = (data.type.length > 0) ? data.type : "Not Available";
    var aired = (data.aired.length > 0) ? data.aired : "Not Availeble";
    var status = (data.status.length > 0) ? data.status : "Not Available";
    var episodes = (data.episodes.length > 0) ? data.episodes : "Not Available";
    var premiered = (data.premiered.length > 0) ? data.premiered : "Not Available";
    var source = (data.source.length > 0) ? data.source : "Not Available";
    var rating = (data.rating.length > 0) ? data.rating : "Not Available";
    var scoring = data.score + " " + data.scoreStats;
    var score = ((data.score.length > 0) && (data.scoreStats.length > 0)) ? scoring : "Not Available";



try
  {

    const view = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .setAuthor("Is this the one " + message.author.username + "-sama?")
    .setTitle(data.title)
    .setURL(data.url)
    .setDescription(data.englishTitle)
    .setImage(data.picture)
    .addField("Synopsis",data.synopsis)
    .addField("Type", type, true)
    .addField("Aired", aired, true)
    .addField("Status", status, true)
    .addField("Episodes", episodes, true)
    .addField("Premiered", premiered, true)
    .addField("Rating", rating, true)
    .addField("Producers", producers + data.producers.pop(), true)
    .addField("Studios", data.studios.pop(), true)
    .addField("Source", source)
    .addField("Genre", genre + data.genres.pop() + ".", true)
    .setFooter("📈 Score || " + scoring );

    message.channel.send({embed: view});
} catch (err) {
    const view = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .setAuthor("Is this the one " + message.author.username + "-sama?")
    .setTitle(data.title)
    .setURL(data.url)
    .setDescription(data.englishTitle)
    .setImage(data.picture)
    .addField("Synopsis",data.synopsis.split('\n')[0])
    .addField("Type", type, true)
    .addField("Aired", aired, true)
    .addField("Status", status, true)
    .addField("Episodes", episodes, true)
    .addField("Premiered", premiered, true)
    .addField("Rating", rating, true)
    .addField("Producers", producers + data.producers.pop(), true)
    .addField("Studio", data.studios.pop(), true)
    .addField("Source", source)
    .addField("Genre", genre + data.genres.pop() + ".", true)
    .setFooter("📈 Score || " + scoring );

    message.channel.send({embed: view});

}

  }
)

await message.channel.stopTyping()

}

module.exports.help = {
	name: "anime"
}
