const Discord = require("discord.js");
const Commando = require('discord.js-commando');
const urban = require('relevant-urban');

module.exports.run = async (bot, message, args) => {

  const query = message.content.split(/\s+/g).slice(1).join(" ");

         const defs = await (query.length ? urban(query) : urban.random());
         let def, total

         if (!defs) {
             return message.channel.send('No matches found!');
         }

         if (defs.constructor.name === 'Array') {
             total = Object.keys(defs).length

             if (!defs || !total) {
                 return message.channel.send('No matches found!');
             }

             def = defs[1]
         } else if (defs.constructor.name === 'Definition') {
             def = defs
         }
         const resultMessage = query.length > 0 ?
                 `First result for \`${query}\` on Urban Dictionary:` :
                 `Random definition on Urban Dictionary:`

         try {
             const embed = new Discord.RichEmbed()
                 .setTitle(`${defs.word} by ${defs.author}`)
                 .setDescription(defs.definition)
                 .addField('❯\u2000\Example(s)', defs.example ? defs.example : 'N/A')
                 .addField('❯\u2000\Rating', `👍\u2000${defs.thumbsUp} | 👎\u2000${defs.thumbsDown}`)
                 .addField('❯\u2000\Link', `**${defs.urbanURL}**`)
                 .setColor('#e86222')
                 .setFooter('Urban Dictionary', 'https://a.safe.moe/1fscn.png');
             return message.channel.send(resultMessage, { embed });

         } catch (err) {
             const embed = new Discord.RichEmbed()
                 .setTitle(`${defs.word} by ${defs.author}`)
                 .setDescription(defs.definition.split('\n')[0])
                 .addField('❯\u2000\Example(s)', defs.example ? defs.example : 'N/A')
                 .addField('❯\u2000\Rating', `👍\u2000${defs.thumbsUp} | 👎\u2000${defs.thumbsDown}`)
                 .addField('❯\u2000\Link', `**${defs.urbanURL}**`)
                 .setColor('#e86222')
                 .setFooter('Urban Dictionary', 'https://a.safe.moe/1fscn.png');
             return message.channel.send(resultMessage, { embed });
         }


}

module.exports.help = {
  name: "define"
}
