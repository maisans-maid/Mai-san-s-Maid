const Discord = require("discord.js");
const Commando = require('discord.js-commando');
const jikanjs  = require('jikanjs');

module.exports.run = async (bot, message, args) => {

await message.channel.startTyping()

message.channel.send("Connecting to Kitsu.io...");
setTimeout(function(){
message.channel.send("Getting Anime Info...");
setTimeout(function(){
message.channel.send("Embedding data... Please Wait..")
}, 980);
}, 1000);

var today = new Date();
var i = today.getDay();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
var current = day[i]

jikanjs.loadSchedule().then((response) => {
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var synopsis = '';
var x = 0;
for (x=0;x<10;x++){
  synopsis[x] = response[current][x].title;
}

var a1 = (response[current].length > 0) ? `1. ${response[current][0].title}` : `1. No anime to be displayed`;
var ad1 = (response[current].length > 0) ? `${response[current][0].url}`:`No anime has been discovered for this slot`;
var a2 = (response[current].length > 1) ? `2. ${response[current][1].title}` : `2. No anime to be displayed`;
var ad2 = (response[current].length > 1) ? `${response[current][01].url}`:`No anime has been discovered for this slot`;
var a3 = (response[current].length > 2) ? `3. ${response[current][2].title}` : `3. No anime to be displayed`;
var ad3 = (response[current].length > 2) ? `${response[current][2].url}`:`No anime has been discovered for this slot`;
var a4 = (response[current].length > 3) ? `4. ${response[current][3].title}` : `4. No anime to be displayed`;
var ad4 = (response[current].length > 3) ? `${response[current][3].url}`:`No anime has been discovered for this slot`;
var a5 = (response[current].length > 4) ? `5. ${response[current][4].title}` : `5. No anime to be displayed`;
var ad5 = (response[current].length > 4) ? `${response[current][4].url}`:`No anime has been discovered for this slot`;
var a6 = (response[current].length > 5) ? `6. ${response[current][5].title}` : `6. No anime to be displayed`;
var ad6 = (response[current].length > 5) ? `${response[current][5].url}`:`No anime has been discovered for this slot`;
var a7 = (response[current].length > 6) ? `7. ${response[current][6].title}` : `7. No anime to be displayed`;
var ad7 = (response[current].length > 6) ? `${response[current][6].url}`:`No anime has been discovered for this slot`;
var a8 = (response[current].length > 7) ? `8. ${response[current][7].title}` : `8. No anime to be displayed`;
var ad8 = (response[current].length > 7) ? `${response[current][7].url}`:`No anime has been discovered for this slot`;
var a9 = (response[current].length > 8) ? `9. ${response[current][8].title}` : `9. No anime to be displayed`;
var ad9 = (response[current].length > 8) ? `${response[current][8].url}`:`No anime has been discovered for this slot`;
var a10 = (response[current].length > 9) ? `10. ${response[current][9].title}` : `10. No anime to be displayed`;
var ad10 = (response[current].length > 9) ? `${response[current][9].url}`:`No anime has been discovered for this slot`;

var animetoday = new Discord.RichEmbed()
.setAuthor(`Here are the top 10 airing anime for today`,`https://i.imgur.com/FNI0Lk0.jpg`)
.setThumbnail(`https://dhdzy64m58a2i.cloudfront.net/otakusquare-com/product-thumbnails/GSC90843/0.jpg`)
.setColor(0x8B008B)
.setDescription(`${day}/${month}/${year} - ${days[i]}`)
.addField(a1,ad1)
.addField(a2,ad2)
.addField(a3,ad3)
.addField(a4,ad4)
.addField(a5,ad5)
.addField(a6,ad6)
.addField(a7,ad7)
.addField(a8,ad8)
.addField(a9,ad9)
.addField(a10,ad10)
.setFooter(today)//date
return message.channel.send({embed: animetoday}).catch(console.error);
});
await message.channel.stopTyping();
};


module.exports.help = {
	name: "anitoday"
}
