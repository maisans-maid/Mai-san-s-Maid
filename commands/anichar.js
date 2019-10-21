const Discord = require("discord.js");
const Commando = require('discord.js-commando');
var kitsu = require('node-kitsu');

module.exports.run = async (bot, message, args) => {

  const query = message.content.split(' ').slice(1);
  const param = message.content.split(' ').slice(1).pop();

  if (query.length === 0) return message.reply('Incomplete Parameters: No query added');

   await message.channel.startTyping()

    let name = query.toString();
kitsu.findCharacter(name, 0).then(results => {
  if (param.toString().toLowerCase().includes(`desc`)) {

if (results.length < 1) {return message.channel.send(`No Character has been found for your query!`)}

  try{
    var desc = (results[0].attributes.description.length === 0) ? `No description has been found for\n${results[0].attributes.canonicalName}` : `${results[0].attributes.description.replace(/<br>/g,`\n`)}`
    var image = (!results[0].attributes.image) ? `https://placeholder.here` : results[0].attributes.image.original;
  var char = new Discord.RichEmbed()
  .setAuthor(`${results[0].attributes.canonicalName}`)
  .setTitle(results[0].attributes.names.en + " - " + results[0].attributes.names.ja_jp)
  .setURL(`https://myanimelist.net/character/${results[0].attributes.malId}`)
  .setDescription(desc)
  .setImage(image)
  .setColor(0x00FFFF)
  .setFooter(`Character requested by ${message.author.username}`);

  if (!results[0].attributes.image){ return message.channel.send(`No Image has been found for that character. Click the link embedded in the name instead to view information on MAL.`).then(message.channel.send({embed: char})).catch(console.error); } else
  return  message.channel.send({embed: char})

  }catch (err){
    var image = (!results[0].attributes.image) ? `https://placeholder.here` : results[0].attributes.image.original;
    var char = new Discord.RichEmbed()
    .setAuthor(`${results[0].attributes.canonicalName}`)
    .setTitle(results[0].attributes.names.en + " - " + results[0].attributes.names.ja_jp)
    .setDescription(`Character Description too long and can't be embedded.\n [Click here](https://myanimelist.net/character/${results[0].attributes.malId}) instead to view character description on MAL`)
    .setURL(`https://myanimelist.net/character/${results[0].attributes.malId}`)
    .setImage(image)
    .setColor(0x00FFFF)
    .setFooter(`Character requested by ${message.author.username}`);
    if (!results[0].attributes.image){ return message.channel.send(`No Image has been found for that character. Click the link embedded in the name instead to view information on MAL.`).then(message.channel.send({embed: char})).catch(console.error); } else
    return  message.channel.send({embed: char})


  }
    } else
    if (results.length < 1) {return message.channel.send(`No Character has been found for your query!`)}

  var image = (!results[0].attributes.image) ? `https://placeholder.here` : results[0].attributes.image.original;

  var char = new Discord.RichEmbed()
  .setAuthor(`${results[0].attributes.canonicalName}`)
  .setTitle(results[0].attributes.names.en + " - " + results[0].attributes.names.ja_jp)
  .setURL(`https://myanimelist.net/character/${results[0].attributes.malId}`)
  .setImage(image)
  .setColor(0x00FFFF)
  .setFooter(`Character requested by ${message.author.username}`);
if (!results[0].attributes.image){ return message.channel.send(`No Image has been found for ${name}. Click the link embedded in the name instead to view information on MAL.`).then(message.channel.send({embed: char})).catch(console.error); } else
  return message.channel.send({embed: char})
})
  await message.channel.stopTyping()

}


module.exports.help = {
	name: "anichar"
}
