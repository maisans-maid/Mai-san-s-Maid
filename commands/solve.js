const Discord = require("discord.js");
const Commando = require('discord.js-commando');
const math = require('mathjs');

module.exports.run = async (bot, message, args) => {

  var equation = args;
  try {
      var solution = math.evaluate(equation)
  } catch (err) {
      return message.channel.send(`❎ | Gomene :(  I couldn\'t solve that equation!`)
  }

  const embed = new Discord.RichEmbed()
      .setColor('#767CC1')
      .addField('**📥 Expression**', `\`\`\`${equation}\`\`\``)
      .addField('**📤 Result**', `\`\`\`${solution}\`\`\``);
  return message.channel.send({ embed })

}


module.exports.help = {
name: "solve"
}
