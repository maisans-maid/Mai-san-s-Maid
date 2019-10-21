const Discord = require("discord.js");
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {
let mentioned = message.mentions.members.first();

const lewddialogue = [
			"Did you miss me? ",
			"What do you want? ",
			"What can I do for you? ",
			"Mou, yamete ",
			"Douzo ",
			"Sasuga ",
			"Daiskuki! "];
			const lewd = [
			"https://media.giphy.com/media/Z5MYGDE2e5Rhm/giphy.gif",
			"https://i.gifer.com/embedded/download/C4IF.gif",
			"https://cdn.discordapp.com/attachments/604085379670474763/605039069126197300/b8122f9.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604088465658871828/InShot_20190416_235735561.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/605039069126197300/b8122f9.jpg",
			"https://cdn.discordapp.com/attachments/602377267179421701/604907219150176257/image0-8.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604087881778200593/c60ce3f.jpg",
			"https://i.imgur.com/gg3ct5f.gif",
			"https://cdn.discordapp.com/attachments/604085379670474763/604416649281667072/EAPMoEzUIAADaYK.png",
			"https://cdn.discordapp.com/attachments/604085379670474763/604464969953574928/fd07a11.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604475373987823676/dd4daeb.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604810110002528275/image0.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604810290890145809/image0.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604087881778200691/futaba_rio_seishun_buta_yarou_drawn_by_ume_tetu__f78e95363267097b2b8c8867041c739f.png",
			"https://cdn.discordapp.com/attachments/604085379670474763/604804181538242560/IMG_20190714_125855.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604857665658683428/image0.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/605039070707580930/c92a052.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/605224273337909288/a79c588.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/605045829799247873/871316c.png",
			"https://cdn.discordapp.com/attachments/604085379670474763/604915381366161428/tumblr_pmzmqluwIS1up5qwko1_1280.png",
			"https://cdn.discordapp.com/attachments/604085379670474763/605045829085954076/132864b.jpg",
			"https://pa1.narvii.com/5996/5e694128f2e806fe4dc78aafe231148be767ff9c_hq.gif",
			"https://cdn.discordapp.com/attachments/604085379670474763/604814588222898186/image0.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604819712408289331/image0.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604819671417618443/75224577_p0_master1200.png",
			"https://cdn.discordapp.com/attachments/604085379670474763/604819376730013706/zo9NSEG.jpeg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604819052577423370/illust_66731474_20190726_163507.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604820469522366464/illust_70181929_20190621_164633.jpg",
			"https://cdn1.sh-cdn.com/images/v2/vertical/thumb/2018-05/Album/97366/5775400.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604475353640992768/D_vNibMVUAA_I4e.jpeg",
			"https://i.pinimg.com/originals/1d/58/b5/1d58b50ba1fdf26ee35b67e5877ddeaf.gif",
			"https://cdn.discordapp.com/attachments/604085379670474763/604820058497351705/D9KBj20VAAAw4iV.png",
			"https://cdn.discordapp.com/attachments/604085379670474763/604085479494778981/image0.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604820311744970772/EqT3JSt.jpeg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604089696603209739/InShot_20190224_225110015.jpg",
			"https://external-preview.redd.it/gsvo0E8Hn7Lqso6uyPOMf2CgVjOB-J8gmd42AdYg0J4.jpg?auto=webp&s=7c400963747147b37eb55033481c6fd6c69709f5",
			"https://cdn2.sh-cdn.com/images/post/2017-12/02/full_2dd4669d-98c8.jpeg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604085742385233921/IMG_20190723_085843.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604089075611336714/illust_73755399_20190319_024636.jpg",
			"https://gifimage.net/wp-content/uploads/2017/08/lewd-anime-gif-5-1.gif",
			"https://cdn.discordapp.com/attachments/604085379670474763/604251545118179330/acf4406.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604090166654795796/DzjR7A5V4AYiV8T.jpg",
			"https://i.redd.it/yavz2qz8lmuz.gif",
			"https://i.pinimg.com/originals/85/1c/fb/851cfbe44bf2bcb85f700b9fca753275.jpg",
			"https://4.bp.blogspot.com/-v9YWhugaau4/WforHnZkACI/AAAAAAAAwnc/fW7NUZ0VpIE6m414vxdqaECXVE-piaxYwCLcBGAs/w7000/Shinmai%2BMaou%2Bno%2BTestament%2B-%2BNonaka%2BYuki%2BRender%2B9.png",
			"https://i.pinimg.com/originals/23/1c/5e/231c5eb6cc3b289043e00d5a13a6f929.jpg",
			"http://www.clangfaq.com/images/renders/Animerender-28.png",
			"https://4.bp.blogspot.com/-NCj8CGPugPw/V0ZmrCwPv7I/AAAAAAAAj-M/UlJpP5uBU-wVZzYB6iWxDC5uUW_j_TdLACLcB/s0-d/Kono%2BSubarashii%2BSekai%2Bni%2BShukufuku%2Bwo%2521%2B-%2BLalatina%2BDustiness%2BFord%2B%2528Darkness%2529%2BRender%2B12.png",
			"https://2.bp.blogspot.com/-0DysSb6WTk0/WoikQKZtYlI/AAAAAAAAyUs/MfmcASmeUvYMcYkovgJqh7hLIZG6W32ggCLcBGAs/w7000/Darling%2Bin%2Bthe%2BFranxx%2B-%2BZero%2BTwo%2BRender%2B6.png",
			"https://3.bp.blogspot.com/-MDT9EL5dSSw/WmNR6HPBUVI/AAAAAAAANYk/ZPkbHvxFqqEZROpRcZH6tb9oE4IXgLMuQCLcBGAs/s1600/66877967%2BDarling%2Bin%2Bthe%2BFranxx%2BZero%2BTwo%2BSexy%2BNaked%2BDraw%2BRender.png",
			"https://raikou2.donmai.us/c0/a4/__kurara_chan_original_drawn_by_suzutsuki_kurara__c0a4d9e9e9438abcf14b11fcdef2f70b.jpg",
			"https://i.pinimg.com/originals/34/0a/1a/340a1ab45ee06db0d384834e637da4ee.png",
			"https://t00.deviantart.net/tvgLqzk5AAf8va7b1fU5peM3ofI=/500x250/filters:fixed_height(100,100):origin()/pre00/b33e/th/pre/i/2019/087/9/4/senran_kagura_ikaruga_hyper_sexy_bikini_hanami_png_by_otakurenders_service-dd37aig.png",
			"http://www.mnimi.eu/image/hentai-anime-renders-3.png",
			"https://img.fireden.net/a/image/1464/32/1464320701300.png",
			"https://4.bp.blogspot.com/-z8mFPNZryDY/WbgS4lQAgrI/AAAAAAAAAx4/SPQH0VaGvnMghLGQm8f0BdzXrxsIaTvlQCKgBGAs/s0/Mayoi%2BNeko%2BOverrun%2521%2B-%2BSerizawa%2BFumino%2BRender%2B1.png",
			"https://i.pinimg.com/originals/93/65/54/9365544bef5d4e185bd940750817df6b.png",
			"https://c.wallhere.com/photos/14/dc/THE_email_protected_Cinderella_Girls_THE_email_protected_anime_girls_Sagisawa_Fumika_big_boobs_black_gloves_black_hair_blue_hair-1370525.jpg!d",
			"https://media1.tenor.com/images/d0c1fcf60d25741c9a725132731ad781/tenor.gif",
			"https://cdn.discordapp.com/attachments/604085379670474763/604089077020753921/shinomiya_kaguya_kaguya_sama_wa_kokurasetai_tensai_tachi_no_renai_zunousen_drawn_by_nikuku_kazedesun.png",
			"https://cdn.discordapp.com/attachments/604085379670474763/604089500074770461/image2.jpg",
			"https://img.fireden.net/a/image/1501/90/1501908937623.gif",
			"https://cdn.discordapp.com/attachments/604085379670474763/604089078614589451/illust_73750452_20190319_024707.png",
			"https://i.kym-cdn.com/photos/images/newsfeed/001/002/490/270.gif",
			"https://cdn.discordapp.com/attachments/604085379670474763/604089500897116160/image0-9.jpg",
			"https://cdn.discordapp.com/attachments/604085379670474763/604332624768401418/futaba.jpg",
			"https://media2.giphy.com/media/26ybwksjgc3Ag5KSs/source.gif",
			"https://cdn.discordapp.com/attachments/604085379670474763/604089498111836211/sword_maiden_goblin_slayer_drawn_by_rhineheim__sample-120adc276dc64c53cad195b8356f0a7f.jpg",
			"https://media.tenor.com/images/9e7f5606be05a52088c3806654cecf1b/tenor.gif",
			"https://media1.tenor.com/images/3cf8d54a06d1705e5c2bddb37fa94d58/tenor.gif",
			"https://data.whicdn.com/images/235690345/superthumb.gif"
			];

const respo = [
    "G-Gyaaa! This isn't an NSFW channel!",
    "This doesn't seem to be an NSFW channel...",
    "I'm sorry! But this stuff belongs in NSFW channels!",
    "That belongs in NSFW channels!",
    "I can't post this here! Please direct me to an NSFW channel!",
    "I'm afraid that kind of stuff isn't allowed in here..",
    "This doesn't look like an NSFW channel!",
    "Please try again in an NSFW channel!",
    "u///u, I don't think I can post that in your average channel.",
    "Don't make me post that here...",
    "ðŸ’¢That doesn't belong here!",
    "W-What? I can't post that here!",
    "Would you direct me to an NSFW channel?",
    "Please try this command again in an NSFW channel!",
    "H-Hey.. Some people might not want to see that in here!",
    "LEWD! B-Baka! Not in here!",
    "B-Baka! I can't post that here!",
    "This isn't an NSFW channel! Learn how to make a channel nsfw with `~howto`!",
    "You can try `~toggle` to make your channel NSFW!",
    "Nya! That was bad! Do that in an NSFW channel!",
    "How scandalous! Try that in an NSFW channel!",
    "Senpai...don't make me post that here...",
    "Nya that was bad senpai! This is an NSFW command!"
  ];
			var lewd_rand = Math.floor(Math.random()*lewd.length);;
			var rand_lewddialogue = Math.floor(Math.random()*lewddialogue.length);;
			var respo_rand = Math.floor(Math.random()*respo.length);

			const insfw = new Discord.RichEmbed()
			.setDescription(lewddialogue[rand_lewddialogue]+message.author+ "onii-sama.")
			.setColor(0x00AE86)
			.setImage(lewd[lewd_rand])
			.setTimestamp()
			.setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed");


			if (!message.channel.nsfw) 	{

				message.channel.send(respo[respo_rand]);

			}else message.channel.send({embed: insfw}).catch(console.error);



}

module.exports.help = {
	name: "lewd"
}
