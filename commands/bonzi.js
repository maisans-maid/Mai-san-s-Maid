const Discord = require("discord.js");
const Commando = require('discord.js-commando');
var Jimp = require('jimp');



module.exports.run = async (bot, message, args) => {

   if (!args) {
       return message.channel.send('Please provide something for Bonzi to say!');
   }

   await message.channel.startTyping()

   var text = message.content.split(/\s+/g).slice(1).join(" ");
   var bonzi = await Jimp.read('assets/images/bonzi.png');
   var blank = await Jimp.read('assets/images/blank.png');

   var font = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);

   blank.resize(175, 120);
   var fact = blank.print(font, 0, 0, text, 175);

   bonzi.composite(fact, 23, 12);
   bonzi.getBuffer(Jimp.MIME_PNG, async(err, buffer) => {
      message.delete();
       await message.channel.send({
           files: [{
               name: 'bonzi.png',
               attachment: buffer
           }]
       })
       await message.channel.stopTyping()
   })

   return null;

}


module.exports.help = {
	name: "bonzi"
}
