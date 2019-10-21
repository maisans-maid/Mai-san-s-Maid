const Discord = require("discord.js");
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {

  const embed = new Discord.RichEmbed()

				.setTitle("Mai-san's Maid Help commands")
				.setAuthor("Mai-san's beloved Maid", "https://i.imgur.com/FNI0Lk0.jpg")
				.setColor(0x00AE86)
				.setDescription("**Here are the commands for mai-san's maid:**\n\nPrefix: -\n\n**-pat + mention**: Sends a pat GIF directed to mentioned.\n**-hug + <mention>**: Sends a hug GIF directed to mentioned.\n**-kiss + mention**: Sends a kiss GIF directed to mentioned.\n**-bully + mention**: Sends a bully GIF directed to mentioned.\n**-hungry**: Sends a hungry GIF.\n**-pout**: Sends a pout GIF.\n**-mai**: Sends an image of Mai Sakurajima.\n**-waifu**:Sends a random waifu on the channel.\n**-lewd**: Sends a lewd image/gif (Available on all channels except main-chat.)")
				.setTimestamp()
				.setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
				.addField("Bot Configs.","**-help**: Sends the help message to the channel.\n**-ping**: Checks the bot latency.\n**-announce <tagged-channel> <message>**: sends an embedded to the tagged channel.\n**-send <tagged-channel <message>**: sends a message to the tagged channel.",true)
        .addField("Utilities.", "**-steam <gametitle>**: Sends the game info via Steam on the channel.\n**-define <word>**: Provides a definition for the word.\n**-solve**: Solves a provided math equation. ")
        .addField("Anime", "**-anime <animetitle>**: Sends the anime info to the channel.")
        .addField("Bot Moderation","**-clear**: Clears messages with the given number. \n**-report <mention> <reason>**: report the user to the moderators. No Permission Level.\n**-ban <mention> <reason>**: Bans the mentioned user. Permission Level: Moderator.\n**-kick <mention> <reason>**: Kicks the mentioned user. Permission Level: Moderator.",true)
				.addField("Color commands is here!.", "Type -get <color>: to get color and -remove <color> to remove color\nNote, you may only use it on '<#598152549283004426>'")
				.addField("Mini-Games.","**-rate**: Rates any given query.\n **-pickul**: sends a pick-up line on the channel.\n**-kaomoji**: Sends a random kaomoji on the channel.\n**-roll**:\t rolls a dice for you.\n**-flip <head/tail>**:\t flips a coin for you.\n**-flip <head/tail> + mention**:\t filps a coin and challenges the mentioned.\n**-ship + <mention>**: Get the ship meter for the you and the mentioned")
				.addField("Random responses.", "Mai-san's Maid responds to random messages sent on any channels.", true)
				.addField("Poll (New!)","You may now create a simple poll on a channel with choice support up to 3!.\nUsage: **-poll - <Question> - <Choice A> - <Choice B> - <Choice C>**.\n-**poll@e **: Use only for important poll. (Bot pings everyone)\n*Please be mindful of the use of dash characters (-).",true)
				.addField("EXP system. (Updated)", "Mai-san now adds 15-25 xperience points from the initial 7-15 xperience points to message sent every 1 minute.\n**-level **: checks your current level and xp to next level\n**-level + <mention> **: checks the mentioned's current level and xp to next level.\n**-xpstat **: checks your curent xp gain status.");

				message.delete();
				message.channel.send({embed}).catch(console.error);

}

module.exports.help = {
	name: "help"
}
