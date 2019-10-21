const Discord = require("discord.js");
const Commando = require('discord.js-commando');
var Jimp = require('jimp');



module.exports.run = async (bot, message, args) => {

  const argu = message.content.split(/\s+/g).slice(1).join(" ");

          if (!argu) {
              return message.channel.send('Please provide some text!');
          }

          const text = message.content.split(/\s+/g).slice(1).join(" ");
          const retarded = await Jimp.read('assets/images/retarded.png');
          const blank = await Jimp.read('assets/images/blank.png');

          const font = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);

          blank.resize(225, 45);
          const search = blank.print(font, 0, 0, text, 225);

          retarded.composite(search, 295, 5);
          retarded.getBuffer(Jimp.MIME_PNG, async(err, buffer) => {
              return await message.channel.send({
                  files: [{
                      name: 'retarded.png',
                      attachment: buffer
                  }]
              })
          })

}


module.exports.help = {
  name: "retarded"
}
