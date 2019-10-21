const Discord = require("discord.js");
const Commando = require('discord.js-commando');
var mal = require('maljs');
var malScraper = require('mal-scraper');


module.exports.run = async (bot, message, args) => {

const query = message.content.split(' ').slice(1);

 await message.channel.startTyping()

 message.channel.send("Selecting 1 out of 50 top anime from MyAnimeList...")

mal.getTopAnime().then((data) => {

var o = Math.floor(Math.random()*50);

const url = `https://myanimelist.net${data[o].path}`
var slot = o + 1;
malScraper.getInfoFromURL(url).then((data) => {
var date = new Date();
	let i = '';
	let j = '';
	let genre = '';
			for (i = 0; i < data.genres.length - 1 ; i++){
					genre += data.genres[i] + ", ";
					}
	var rating = (data.rating.length > 0) ? data.rating : "Not Available";
	var scoring = data.score + " " + data.scoreStats;
	var score = ((data.score.length > 0) && (data.scoreStats.length > 0)) ? scoring : "Not Available";


try
{

	const view = new Discord.RichEmbed()
	.setColor(0x00FFFF)
	.setAuthor(`Here is the anime taking slot #${slot} on MyAnimeList!`)
	.setTitle(data.title)
	.setURL(data.url)
	.setDescription(data.englishTitle)
	.setImage(data.picture)
	.addField("Synopsis",data.synopsis)
  .addField("📈 Score", scoring )
	.setFooter(`Total Search Duration: ${(date.getTime() - message.createdAt.getTime()) / 1000} seconds!`);

	message.channel.send({embed: view});
} catch (err) {
	const view = new Discord.RichEmbed()
	.setColor(0x00FFFF)
	.setAuthor(`Here is the anime taking slot #${slot} on MyAnimeList!`)
	.setTitle(data.title)
	.setURL(data.url)
	.setDescription(data.englishTitle)
	.setImage(data.picture)
	.addField("Synopsis",data.synopsis.split('\n')[0])
	.addField("Genre", genre + data.genres.pop() + ".", true)
  .addField("📈 Score", scoring )
	.setFooter(`Total Search Duration: ${(date.getTime() - message.createdAt.getTime()) / 1000} seconds!`);

	message.channel.send({embed: view});

}

})


})

 await message.channel.stopTyping()

}

module.exports.help = {
	name: "anitop"
}
