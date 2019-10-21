const Discord = require('discord.js');
const waifus = require('./../assets/json/waifus.json');
const total = Object.keys(waifus).length

const weefi = [
    'https://gfycat.com/KindheartedContentIberianmidwifetoad',
    'http://i.imgur.com/U25HMyz.gifv',
    'http://i.imgur.com/0xhBPbR.gif',
    'Your waifu is me...right?',
    'https://media.giphy.com/media/2PW8oTlHnVaZa/giphy.gif',
    'https://thumbs.gfycat.com/BiodegradableWillingIchneumonfly-max-1mb.gif',
    'https://i.makeagif.com/media/10-19-2015/PyKTt9.gif',
    'https://i.imgur.com/hn0YsNQ.gif',
    'https://media.giphy.com/media/xUA7aVR8tUqIHdAjPa/giphy.gif',
    'http://i0.kym-cdn.com/photos/images/original/001/203/473/1cd.gif',
    'https://media1.tenor.com/images/0e6d6a8f61b84b1ea6cdb13522a39753/tenor.gif?itemid=5237833',
    'https://i.imgur.com/5XuI7W8.gif',
    'http://i.imgur.com/usJbYkw.gif'
]

module.exports.run = async (bot, message, args) => {

        const percentage = Math.floor(Math.random() * 100)
            var random = Math.floor(Math.random() * total + 1);
            var waifu = waifus[random];

      if (percentage < 10) {
            const failembed = new Discord.RichEmbed()
            .setImage(weefi[Math.round(Math.random() * (weefi.length - 1))])
            .setColor('#FAC193');

               return message.channel.send(failembed);
           }

            const embed = new Discord.RichEmbed()
                .setAuthor(waifu.name, waifu.image)
                .setDescription(waifu.origin)
                .setImage(waifu.image)
                .setFooter(`Waifu Number ${random}`)
                .setColor('#FAC193');
            var ms = await message.channel.send(`💝 **${waifu.name}**? `, { embed: embed });
            await ms.react('👍');
            await ms.react('👎');

            return null;
    }

    module.exports.help = {
      name: "waifu"
    }
