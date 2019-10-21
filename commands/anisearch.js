const Discord = require("discord.js");
const Commando = require('discord.js-commando');
const malScraper = require('mal-scraper');

module.exports.run = async (bot, message, args) => {

const query = message.content.split(' ').slice(1);

if (query.length === 0) return message.reply('Incomplete Parameters: No query added');

 await message.channel.startTyping()

  let name = query.toString();

  malScraper.getResultsFromSearch(name)
    .then((data) =>{

      var header1 = (data[0].name.toString().length > 0) ? data[0].name.toString() : "No More Results";
      var body1 = (data[0].name.toString().length > 0) ? `Type:  [${data[0].type.toString()}](${data[0].url}) \n  ${data[0].payload.media_type.toString()}  •  ${data[0].payload.start_year.toString()}   |   ${data[0].payload.aired.toString()}   |   ${data[0].payload.score.toString()}   |   ${data[0].payload.status.toString()}` : "Mai-san's maid can't fill this up with more info anymore!";
      var header2 = (data[1].name.toString().length > 0) ? data[1].name.toString() : "No More Results";
      var body2 = (data[1].name.toString().length > 0) ? `Type:  [${data[1].type.toString()}](${data[1].url}) \n  ${data[1].payload.media_type.toString()}  •  ${data[1].payload.start_year.toString()}   |   ${data[1].payload.aired.toString()}   |   ${data[1].payload.score.toString()}   |   ${data[1].payload.status.toString()}` : "Mai-san's maid can't fill this up with more info anymore!";
      var header3 = (data[2].name.toString().length > 0) ? data[2].name.toString() : "No More Results";
      var body3 = (data[2].name.toString().length > 0) ? `Type:  [${data[2].type.toString()}](${data[2].url}) \n  ${data[2].payload.media_type.toString()}  •  ${data[2].payload.start_year.toString()}   |   ${data[2].payload.aired.toString()}   |   ${data[2].payload.score.toString()}   |   ${data[2].payload.status.toString()}` : "Mai-san's maid can't fill this up with more info anymore!";
      var header4 = (data[3].name.toString().length > 0) ? data[3].name.toString() : "No More Results";
      var body4 = (data[3].name.toString().length > 0) ? `Type:  [${data[3].type.toString()}](${data[3].url}) \n  ${data[3].payload.media_type.toString()}  •  ${data[3].payload.start_year.toString()}   |   ${data[3].payload.aired.toString()}   |   ${data[3].payload.score.toString()}   |   ${data[3].payload.status.toString()}` : "Mai-san's maid can't fill this up with more info anymore!";
      var header5 = (data[4].name.toString().length > 0) ? data[4].name.toString() : "No More Results";
      var body5 = (data[4].name.toString().length > 0) ? `Type:  [${data[4].type.toString()}](${data[4].url}) \n  ${data[4].payload.media_type.toString()}  •  ${data[4].payload.start_year.toString()}   |   ${data[4].payload.aired.toString()}   |   ${data[4].payload.score.toString()}   |   ${data[4].payload.status.toString()}` : "Mai-san's maid can't fill this up with more info anymore!";
      var header6 = (data[5].name.toString().length > 0) ? data[5].name.toString() : "No More Results";
      var body6 = (data[5].name.toString().length > 0) ? `Type:  [${data[5].type.toString()}](${data[5].url}) \n  ${data[5].payload.media_type.toString()}  •  ${data[5].payload.start_year.toString()}   |   ${data[5].payload.aired.toString()}   |   ${data[5].payload.score.toString()}   |   ${data[5].payload.status.toString()}` : "Mai-san's maid can't fill this up with more info anymore!";
      var header7 = (data[6].name.toString().length > 0) ? data[6].name.toString() : "No More Results";
      var body7 = (data[6].name.toString().length > 0) ? `Type:  [${data[6].type.toString()}](${data[6].url}) \n  ${data[6].payload.media_type.toString()}  •  ${data[6].payload.start_year.toString()}   |   ${data[6].payload.aired.toString()}   |   ${data[6].payload.score.toString()}   |   ${data[6].payload.status.toString()}` : "Mai-san's maid can't fill this up with more info anymore!";
      var header8 = (data[7].name.toString().length > 0) ? data[7].name.toString() : "No More Results";
      var body8 = (data[7].name.toString().length > 0) ? `Type:  [${data[7].type.toString()}](${data[7].url}) \n  ${data[7].payload.media_type.toString()}  •  ${data[7].payload.start_year.toString()}   |   ${data[7].payload.aired.toString()}   |   ${data[7].payload.score.toString()}   |   ${data[7].payload.status.toString()}` : "Mai-san's maid can't fill this up with more info anymore!";
      var header9 = (data[8].name.toString().length > 0) ? data[8].name.toString() : "No More Results";
      var body9 = (data[8].name.toString().length > 0) ? `Type:  [${data[8].type.toString()}](${data[8].url}) \n  ${data[8].payload.media_type.toString()}  •  ${data[8].payload.start_year.toString()}   |   ${data[8].payload.aired.toString()}   |   ${data[8].payload.score.toString()}   |   ${data[8].payload.status.toString()}` : "Mai-san's maid can't fill this up with more info anymore!";
      var header10 = (data[9].name.toString().length > 0) ? data[9].name.toString() : "No More Results";
      var body10 = (data[9].name.toString().length > 0) ? `Type:  [${data[9].type.toString()}](${data[9].url}) \n  ${data[9].payload.media_type.toString()}  •  ${data[9].payload.start_year.toString()}   |   ${data[9].payload.aired.toString()}   |   ${data[9].payload.score.toString()}   |   ${data[9].payload.status.toString()}` : "Mai-san's maid can't fill this up with more info anymore!";

         let search = new Discord.RichEmbed()
         .setAuthor("Search Results...", data[0].thumbnail_url)
         .setColor(0x00FFFF)
         .setDescription("Displaying results containing '" + query + "'.")
         .setImage(data[0].image_url)
         .setFooter("Showing only top 10 of the query. Powered by Mai-san's Maid + MAL.")
         .addField("1. " + header1, body1)
         .addField("2. " + header2, body2)
         .addField("3. " + header3, body3)
         .addField("4. " + header4, body4)
         .addField("5. " + header5, body5)
         .addField("6. " + header6, body6)
         .addField("7. " + header7, body7)
         .addField("8. " + header8, body8)
         .addField("9. " + header9, body9)
         .addField("10. " + header10, body10);
         message.channel.send({embed: search})

    }

  )
    .catch((err) => console.log(err))


await message.channel.stopTyping()

}


module.exports.help = {
	name: "anisearch"
}
