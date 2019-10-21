const Discord = require("discord.js");
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {

if (!message.channel.nsfw){return;}

let wall = [
`https://konachan.com/sample/dc4d93e851d8f2bd5d77f9d82bbc1f92/Konachan.com%20-%20286840%20sample.jpg`,
`https://konachan.com/sample/e7f164b16eaa3e4b59eb3f04e2c11bfd/Konachan.com%20-%20286846%20sample.jpg`,
`https://konachan.com/sample/9c6f2efe58a789942769f27f10441230/Konachan.com%20-%20286843%20sample.jpg`,
`https://konachan.com/sample/4a590ae524b764e2a86aa3191abb0f41/Konachan.com%20-%20286836%20sample.jpg`,
`https://konachan.com/sample/37609694b6d97570a3f72ba15823fd88/Konachan.com%20-%20286841%20sample.jpg`,
`https://konachan.com/sample/2c373ea8dbe8a8782bbc7852770b7a13/Konachan.com%20-%20286852%20sample.jpg`,
`https://konachan.com/sample/7fdcdd2304bf8a81619f6e1a38025609/Konachan.com%20-%20286851%20sample.jpg`,
`https://konachan.com/sample/0c39d3093d68ae889bf94c54b76dfb37/Konachan.com%20-%20286842%20sample.jpg`,
`https://konachan.com/sample/e5c9b4f3d59b9df26b57e194b7fa9f2a/Konachan.com%20-%20286847%20sample.jpg`,
`https://konachan.com/sample/4e51f689b89f90ebf34c48c46a7affcf/Konachan.com%20-%20286850%20sample.jpg`,
`https://konachan.com/image/fad63931d20368f39e64050140039bae/Konachan.com%20-%20286849%20hololive%20konkito%20minato_aqua%20murasaki_shion%20nakiri_ayame.jpg`
]

  const embed = new Discord.RichEmbed()

				.setTitle("Not Safe For Work")
				.setAuthor("A guide to Mai-san's Maid's NSFW commands", "https://i.imgur.com/FNI0Lk0.jpg")
				.setColor(0x00AE86)
				.setTimestamp()
        .setImage(wall[Math.floor(Math.random()* wall.length)])
        .addField("Viewer Discretion advised!", "The following commands may bring unappropriate sexual explicit content. Use to your own risk!")
        .addBlankField()
        .addField(`❯`, `-anal\n-avatar\n-bj\n-blowjob\n-boobs\n-classic\n-cumarts\n-cumslut\n-erofeet\n-erokemonomimi\n-erokitsune\n-eroneko`,true)
        .addField(`❯`, `-eroyuri\n-feetgif\n-femdom\n-futanari\n-girlsolo\n-girlsologif\n-hentai\n-holo\n-holoero\n-kemonomimi\n-keta\n-kitsune`,true)
        .addField(`❯`, `-kuni\n-lesbian\n-neko\n-nekogif\n-pussy\n-pussyart\n-pussygif\n-rhentai\n-smallboobs\n-tits\n-trap\n-yuri`,true)
        .addBlankField()
        .addField(`Appreciations`,`Sakuta-kun: Providing the NSFW codes.\nNekos-life of nekos.life for the images and gifs.`)
        .setFooter(`${message.author.username}! Remember to use these in moderation.!   |   -*Mai-San's Maid*`);

				message.delete();
				message.channel.send({embed}).catch(console.error);

}

module.exports.help = {
	name: "nsfwhelp"
}
