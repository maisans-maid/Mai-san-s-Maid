const Discord = require("discord.js");
const botconfig = require("./../botconfig.json")
const reportedRecently = new Set();


module.exports.run = async (bot, message, args) => {

let requestContent = message.content.split(' ').slice(1);
const minutes = 5;
const timeout = minutes * 60 * 1000;

if (requestContent.length < 1) return message.channel.send(`**${message.author.username}**, please specify your request.`)

  let request_embed = new Discord.RichEmbed()
  .setDescription("Request")
  .setColor(botconfig.colors.green)
  .addField("Request From", `${message.author.username}`)
  .addField("Time", message.createdAt)
  .addField("Request Content", requestContent);
  let error = new Discord.RichEmbed()
  .setDescription("Error 101")
  .setColor(botconfig.colors.red)
  .addField("Request Error", "Member Feedback logs channel not made. Please create one.\n\nChannel Name: #member-feedback\n\nPermission Level: MANAGE_MESSAGES(Moderators)" );

  let reqchannel = message.guild.channels.find(c => c.name === "member-feedback");
  if(!reqchannel) return message.channel.send({embed: error});

  message.delete().catch(O_o=>{});
  if (reportedRecently.has(message.author.id))
 {
   message.channel.send("Oops " + message.author + `! Please slow down, you may only submit a request once every ${minutes} minutes!`);

 } else {

  message.channel.send(`${message.author}, your request has been sent. Please wait for the moderators to take action.`);
  reqchannel.send(request_embed);
  reportedRecently.add(message.author.id);
  setTimeout(()=>{
    reportedRecently.delete(message.author.id);
  }, timeout);
}



}

module.exports.help = {
  name: "request"

}
