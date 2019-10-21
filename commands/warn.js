const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You have no suffecient permission for this command.");
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if(!wUser) return message.reply("Who will i warn again?");
if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't warn your senpais");
let reason = args.join(" ").slice(22);

if(!warns[wUser.id]) warns[wUser.id] = {
  warns: 0
};

warns[wUser.id].warns++;

fs.writeFile("./warnings.json", JSON.stringify(warns, null, 2), (err) => {
  if (err) console.log(err)
});

let warnEmbed = new Discord.RichEmbed()
.setDescription("A User was warned!")
.setColor(0xfc6400)
.addField("Warned User", wUser)
.addFiels("Warned By", message.author)
.addField("Warned In", message.channel)
.addField("Number of Warnings", warns[wUser.id].warns)
.addField("Reason", reason);
let warnedUser = new Discord.RichEmbed()
.setDescription(wUser.username + " was warned!")
.setColor(0xec0e0e)
.addField("You have been warned for", reason)
.addField("Accumulated warnings", warns[wUser.id].warns + " warnings recieved");

let reportschannel = message.guild.channels.find(c => c.name === "server-reports");
if(!reportschannel) return message.channel.send("User was successfuly warned but reports channel is unavailable. Please create one to log all banned, kicked, and reported users.\n\nChannel name: #server-reports");

reportschannel.send(warnEmbed);
message.channel.send(warnedUser);

if(warns[wUser.id].warns == 2){
  let muterole = message.guild.roles.find(r => r.name === "muted")
  if(!muterole) { message.reply("Attempt to mute warned user Failed. More details will be sent to server-reports channel");
      let failedMute = new Discord.RichEmbed
      .setDescription("Mute Attempt Failed!")
      .addField("Error 921", "no mute role found.")
      .addField("Fix this error", "Create @muted role with permissions for Send_Message and Add_React set to false.")
      .addField("Mai-san's maid couldn't fix this alone.", "Please fix the problem immediately to prevent future errors");

      return reportschannel.send(failedMute);
}
  let mutetime = "10s";
  await(wUser.addRole(muterole.id));
  message.channel.send(`${wUser.tag} has been temporarily muted`);

  setTimeout(function(){
    wUser.removeRole(muterole.id)
    message.channel.send(`${wUser.tag}'s mute condition has been lifted.`);
  }, ms(mutetime))


}
if(warns[wUser.id].warns == 3){
  message.guild.member(wUser).ban(reason);
  message.channel.send(`${wUser.tag} has been banned.`)
}}


module.exports.help = {
  name: "warn"

}
