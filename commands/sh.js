const Discord = require("discord.js");
const Commando = require('discord.js-commando');
var Jimp = require('jimp');



module.exports.run = async (bot, message, args) => {

const argu = message.content.split(/\s+/g).slice(1).join(" ");

if (!message.channel.nsfw) 	{return;}

if (argu.length < 1) {
    return message.channel.send('Please provide some text!');
}

await message.channel.startTyping()

const text = message.content.split(/\s+/g).slice(1).join(" ");
const shits = await Jimp.read('assets/images/SHITS.png');
const blank = await Jimp.read('assets/images/blank.png');

const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

blank.resize(195, 175);
const search = blank.print(font, 0, 0, text, 175);

shits.composite(search, 810, 31);
shits.getBuffer(Jimp.MIME_PNG, async(err, buffer) => {
    await message.channel.send({
        files: [{
            name: 'shits.png',
            attachment: buffer
        }]
    })

    await message.channel.stopTyping()
})

return null;


}




module.exports.help = {
  name: "sh"
}
