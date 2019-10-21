const Discord = require("discord.js");
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {
let mentioned = message.mentions.members.first();

const maidialogue = [
				"Did you miss me?",
				"What do you want from me?",
				"Here I am!",
				"Do you want to see me that badly?",
				"I guess it cant be helped, here's a photo of mine,"
				];
				const mai = [
				"https://cdn.discordapp.com/attachments/564972313200558090/600948463458320395/image0.jpg",
				"https://images3.alphacoders.com/994/thumb-350-994295.png",
				"https://wallpapercave.com/wp/wp4055488.jpg",
				"https://cdn.discordapp.com/attachments/604085379670474763/604086272650248216/IMG_20190621_004455.jpg",
				"https://cdn.discordapp.com/attachments/564972313200558090/583048618622189609/image0.jpg",
				"https://cdn.discordapp.com/attachments/604085379670474763/604088466136891394/IMG_20190408_235922.jpg",
				"https://cdn.discordapp.com/attachments/564972313200558090/583048971052908555/image0.png",
				"https://cdn.discordapp.com/attachments/564972313200558090/600948464175808513/image2.jpg",
				"https://i.redd.it/f1x51qko9z121.png",
				"https://cdn.discordapp.com/attachments/604085379670474763/604088120798871584/20190507_024701.jpg",
				"https://cdn.discordapp.com/attachments/604085379670474763/604332647916896278/futaba2.png",
				"https://cdn.discordapp.com/attachments/604085379670474763/605037091839148058/95f6f28.jpg",
				"https://cdn.discordapp.com/attachments/604085379670474763/605353745752260610/mai3.jpg",
				"https://cdn.discordapp.com/attachments/604085379670474763/604086273321205771/64597fa.jpg",
				"https://cdn.discordapp.com/attachments/564972313200558090/601521362594693150/image0.jpg",
				"https://cdn.discordapp.com/attachments/564972313200558090/585309958493569047/FB_IMG_15596055425153472.jpg",
				"https://cdn.discordapp.com/attachments/564972313200558090/587134788763385858/image0.jpg",
				"https://cdn.discordapp.com/attachments/564972313200558090/587246577777639424/EsdXGvG_d.jpg",
				"https://images6.alphacoders.com/994/thumb-350-994300.png",
				"https://cdn.discordapp.com/attachments/604085379670474763/604088465138909204/Do6vgMLU8AAjt12.jpg",
				"https://cdn.discordapp.com/attachments/564972313200558090/600948463458320394/image1.jpg",
				"https://cdn.discordapp.com/attachments/564972313200558090/599480343791271955/image0.jpg",
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPY5LaotHsG9twHvWR_9E2Du-zFUUydlZybXUdvhWauPdDmXE2cg",
				"https://cdn.discordapp.com/attachments/564972313200558090/598773720189763584/image0.jpg",
				"https://umaiyomu.files.wordpress.com/2019/04/sakurajima-mai-2.jpg",
				"https://images4.alphacoders.com/994/thumb-350-994294.png",
				"https://honeysanime.com/wp-content/uploads/2019/03/Seishun-Buta-Yarou-wa-Bunny-Girl-Senpai-no-Yume-wo-Minai-Wallpaper-1-500x321.jpg"
				];

				var mai_rand = Math.floor(Math.random()*mai.length);;
				var rand_maidialogue = Math.floor(Math.random()*maidialogue.length);;

				const embed = new Discord.RichEmbed()

				.setDescription(maidialogue[rand_maidialogue]+ " " +message.author)
				.setColor(0x00AE86)
				.setImage(mai[mai_rand])
				.setTimestamp()
				.setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed");
				message.channel.send({embed}).catch(console.error);


}

module.exports.help = {
	name: "mai"
}
