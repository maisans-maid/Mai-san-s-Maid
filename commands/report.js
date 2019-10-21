const Discord = require("discord.js");
const reportedRecently = new Set();


module.exports.run = async (bot, message, args) => {

  let reported_user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!reported_user) return message.channel.send ("User not found!");
  let reported_reason = args.join(" ").slice(22);

  if (!reported_reason) {return message.channel.send(`${message.author.username}, Please specify the reason for this report.`)}


  let reported_embed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor(0xff0000)
  .addField("Reported User", `${reported_user} with ID: ${reported_user.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reported_reason);

  let reportschannel = message.guild.channels.find(c => c.name === "server-reports");
  if(!reportschannel) return message.channel.send("Reports channel not made. Please create one.\n\nChannel name: #server-reports");

  message.delete().catch(O_o=>{});
  if (reportedRecently.has(message.author.id))
 {
   message.channel.send("Oops " + message.author + "! Please slow down, you may only report once every 5 minutes!");

 } else {

  message.channel.send(reported_user + ", You have been reported!");
  reportschannel.send(reported_embed);
  reportedRecently.add(message.author.id);
  setTimeout(()=>{
    reportedRecently.delete(message.author.id);
  }, 300000);
}



}

module.exports.help = {
  name: "report"

}
