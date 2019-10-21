const Discord = require("discord.js");
const Commando = require('discord.js-commando');

module.exports.run = async (bot, message, args) => {
let mentioned = message.mentions.members.first();
const rating = Math.floor(Math.random() * 10) + 0;
if (mentioned) return message.channel.send(`I'll rate him/her a ${rating}/10`);

let item = message.content.split(/\s+/g).slice(1).join(" ");
        if (!item) return message.channel.send('Please specify something for me to rate!');

        if (item.toUpperCase().startsWith("MAI-SAN")) return message.channel.send('I\'d give myself a 10/10!');

const rms = [
  `Get that ${item}-whatever out of here!`,//0
  `I wonder why such item like ${item} exists`,//1
  `So you brought me a junky **${item}**, huh?`,//2
  `I wonder how will ${item} cost on a junk shop.`,//3
  `But that doesn't mean I like it.`,//4
  `Cause it's probably has to be that way.`,//5
  `Oh, you brought me good stuff, but ${item} is not what i'm looking for.`,//6
  `Is ${item} the new trend now? I kinda like it *a little*.`,//7
  `Is ${item} available on steam?`,//8
  `I like this one`,//9
  `I could buy this ${item} for 1 million!`//10
];


        return message.channel.send(`I'd give **${item}** a rating of ${rating}/10!`).then(message.channel.send(rms[rating]));

      }

module.exports.help = {
        name: "rate"
      }
