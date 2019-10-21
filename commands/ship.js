const Discord = require("discord.js");
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {
let mentioned = message.mentions.members.first();
shipverdict = [
"Not a slightest chance. You should Give up.", //1-20
"The risk of getting yourself a cancer is greater than your ship.",//21-40
"There is a great chance, you two should be considered love-birds",
"You should be married now!",
"You may have already found your soulmate with this nearly perfect score",
"The fate has decided!"];
shiptitle = [
"God has given up on you. :black_heart::black_heart::black_heart::black_heart::black_heart:",
"In other words, still no chance. :heart::black_heart::black_heart::black_heart::black_heart:",
"You make an average pair. :heart::heart::black_heart::black_heart::black_heart:",
"Hurry! We need a church!. :heart::heart::heart::black_heart::black_heart:",
"So Sweet!. :heart::heart::heart::heart::black_heart:",
"PERFECT MATCH!. :heart::heart::heart::heart::heart:"
];
shipcolor = [
"0xec0e0e",//red
"0xf38f09",//orange
"0xfce405",//yellow
"0xfce405",//yellow
"0x1624da",//blue
"0x28fa12"//green
];
shipfooter = [
"Being loner is better than being desperate.",
"If you run out of options, just ask someone who is willing to take you.",
"Your attempt to find a partner at this point will send you to your doom.",
"Just love, love, love. Yes. Love. I didn't say Ai.",
"There's nothing more I could say, you're totally the one!",
"Your lucky meter also goes above 100%."
];


if (mentioned){
			const user = message.mentions.users.first();
			let shipmeter = Math.floor(Math.random()*100);
			if (shipmeter < '21'){var s = 0} else if ((shipmeter > '20') && (shipmeter < '41')){var s = 1;} else if ((shipmeter > '40') && (shipmeter < '61')){
			var s = 2;} else if ((shipmeter > '60') && (shipmeter < '81')){var s = 3;}else if ((shipmeter > '80') && (shipmeter < '100')){var s = 4;}else {var s = 5;}

        let shipEmbed = new Discord.RichEmbed()
  			.setThumbnail(message.author.displayAvatarURL)
  			.setTitle(message.author.username + " ships " + user.username)
  			.setDescription("Ship Result: " + shiptitle[s])
  			.addField("Ship percentage meter: " + shipmeter + "%" , shipverdict[s])
  			.setColor(shipcolor[s])
  			.setFooter(shipfooter[s], user.displayAvatarURL);

  			return message.channel.send({embed: shipEmbed}).then().catch(console.error);


			}

			if (!mentioned){

				const shiperrEmbed = new Discord.RichEmbed()
				.setTitle("Syntax Error: No Mentions detected.")
				.setDescription(message.author + ", you cannot ship yourself with nothingness. Mention somebody to detect ship meter.")
				.setColor(0xeb1a1a);

				message.channel.send("Oh no! " + message.author + ", -ship was missing some parameters!");
				message.channel.send({embed: shiperrEmbed}).then().catch(console.error);

			}
    }


module.exports.help = {
	name: "ship"
}
