const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const auth = require('./auth.json');
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
const bot = new Commando.Client({disableEveryone: true,unknownCommandResponse: false});
bot.commands = new Discord.Collection();
let xp = require("./xp.json");
let xpAdd = Math.floor(Math.random() * 10) + 15;
const talkedRecently = new Set();



fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Couldn't find commands");
      return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });

});
//scann all items in commands folder

bot.on("ready", async () => {
  console.log(`'${bot.user.username}' is online on ${bot.guilds.size} servers!`);
  const activities_list = [
  "unknown",
  "dead | Wait, you're not Sakuta-kun.",
  "with Sakuta-kun.",
  "Pray for KyoAni",
  "with Nodoka-chan and Kaede-chan.",
  "Okairinasai, Mai-san!"
  ];
    setInterval(() => {
      const index = Math.floor(Math.random() * activities_list.length); // generates a random number between 1 and the length of the activities array list (in this case 5).
      bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
  }, 20000);
});
//when the bot starts

bot.on('guildMemberAdd', member => {
	const wcmsg = [
	"has spawned on our server, let's send our warm greetings!",
	"is now here!, set aside your fears!",
	"is the legendary John Titor right? *Please say something about this server's future*",
	"is too strong and has already breached our server!"
	];
	const bglink =[
	"https://i.pinimg.com/originals/ae/cd/ae/aecdaed5d253088b715c6a17a6d87d2f.gif",
	"https://media1.tenor.com/images/24408dbd5bf503ba838e5b9a65bd14e7/tenor.gif",
	"https://media1.tenor.com/images/2d7921e6a2d57df2fa06b14191a0e687/tenor.gif",
	"https://media1.tenor.com/images/3a51c19e70a935b69a0772805147baf7/tenor.gif",
	"https://media1.tenor.com/images/83f9119545aa87ba16c5f621ecab9b62/tenor.gif",
	"https://i.redd.it/aiwwo7x1iyd21.gif",
	"https://media1.tenor.com/images/1c5d62f11685ad7f705a4b5901757373/tenor.gif",
	"https://media1.tenor.com/images/37049906dfe049677603449512883cdc/tenor.gif"
	];
	const mult = Math.floor(Math.random()*bglink.length);
	const mquotes = [
	"Thank you. For not giving up on me. Thank you.",
	"Sakurajima is spelled like Mai Sakurajima, and Mai is spelled like Mai Sakurajima.",
	"You're having lewd thoughts, aren't you?",
	"Are you appealing to me that you want to hold hands?",
	"Who told you to say the truth so candidly?",
	"Besides, Sakuta sleeping next to me is nothing.",
	"What time are you off? I'll wait for you.",
	"I'm Mai Sakurajima"
	];
	const malt = Math.floor(Math.random()*mquotes.length);

   const channel = member.guild.channels.find(ch => ch.name === 'main-chat');
   var embedtext = wcmsg[Math.floor(Math.random()*wcmsg.length)];
   channel.send("Minna-san! " + member.user + " " + embedtext).then().catch(console.error);

   const embed = new Discord.RichEmbed()

  .setTitle("Welcome to Chilled Lounge and Whatnot server!")
  .setAuthor("Mai-san's beloved Maid", "https://i.imgur.com/FNI0Lk0.jpg")

   //Alternatively, use "#00AE86", [0, 174, 134] or an integer number.

  .setColor(0x00AE86)
  .setDescription("Hello " + member.user + "!, Welcome to the **Chilled Lounge and Whatnot** \nPlease read <#594765145570279444>, Choose your <#594765434449035305>, select your <#598152549283004426>, and enjoy your stay here!")
  .setFooter(mquotes[malt])
  .setImage(bglink[mult])
  //.setThumbnail("https://i.imgur.com/FNI0Lk0.jpg")

   //Takes a Date object, defaults to current date.

  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Mai-san's Maid can be dumb sometimes.",
    "If she can't answer your query or handle your request, contact the moderators.")

  //.addBlankField(true) remove "//" to enable (Adds a blank field)
  .addField("Remember to be respectful here at all times.", "Respect is a must.", true)
  .setFooter(`Tada! ${member.user.username} is our ${member.guild.memberCount}th member!`);


 channel.send({embed}).catch(console.error);
});
//when a user joins a server

bot.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'main-chat');
	const bye = new Discord.RichEmbed()
	.setTitle("A member has left.")
	.setDescription("Bye bye <@" + member.id + ">, We wish you a good luck!")
	.setFooter("Mai-san is kinda sad", member.displayAvatarURL)
	.setTimestamp()
	.setColor(0xec0e0e);

	channel.send({embed: bye}).catch(console.error);

});
//when a user leaves the server


bot.on("message", async message =>{
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let mentioned = message.mentions.members.first();
  if (message.channel.id === "593363003655716864"){
    return;
  }

  let prefix = "-";


  if(!xp[message.author.id]){
  	  xp[message.author.id] = {
        user: message.author.username,
  		  xp:0,
  		  level: 1
  	  };

      let memberRole = message.member.guild.roles.find(r => r.name === "Chilled Regular");
      message.member.addRole(memberRole).catch(console.error);

    }


    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let lvlcap = 150 * (curlvl * 2);
    let nxtlvl = xp[message.author.id].level * lvlcap;
    let nxtlvlXP = lvlcap * curlvl; // check if wrong change curlvl to curxp
    let difference = nxtlvlXP - curxp;



    if (!message.content.startsWith(prefix)){

  	  if (talkedRecently.has(message.author.id))
  	{


  	} else {

  		xp[message.author.id].xp = curxp + xpAdd; // add a random xp to user.
  		talkedRecently.add(message.author.id);
  		setTimeout(()=>{
  			talkedRecently.delete(message.author.id);
  		}, 60000);
  	}
    }

    if(nxtlvl <= xp[message.author.id].xp){
  	  xp[message.author.id].level = curlvl + 1;
  	  let lvlup = new Discord.RichEmbed()
  	  .setTitle("Level Up!")
  	  .setThumbnail("https://i.imgur.com/lXeBiMs.png")
  	  .setDescription("Congratulations to " + message.author + " for levelling up!")
  	  .addField("New Level", curlvl + 1)
  	  .setFooter(`Remember that spamming doesn't work!`, message.author.displayAvatarURL);

  	  message.channel.send(message.author + " has levelled up!");
  	  message.channel.send(lvlup);

      if (xp[message.author.id].level.toString() === '5'){
        let memberRole = message.member.guild.roles.find(r => r.name === "Chilled 5+");
        message.member.addRole(memberRole).catch(console.error);
        message.channel.send("Congratulations "+ message.author + "! You just Ranked up to Chilled + 5");
      }

      if (xp[message.author.id].level.toString() === '10'){
        let memberRole = message.member.guild.roles.find(r => r.name === "Chilled 10+");
        message.member.addRole(memberRole).catch(console.error);
        message.channel.send("Congratulations "+ message.author + "! You just Ranked up to Chilled + 10");
      }
      if (xp[message.author.id].level.toString() === '15'){
        let memberRole = message.member.guild.roles.find(r => r.name === "Chilled 15+");
        message.member.addRole(memberRole).catch(console.error);
        message.channel.send("Congratulations "+ message.author + "! You just Ranked up to Chilled + 15");
      }


    } if (message.content.startsWith(prefix + "level")){

  	   if (mentioned){
  		   		let xpmentioned = mentioned.id;
  				const user = message.mentions.users.first();
  				if (!xp[xpmentioned]){

  			let xpwarnembed = new Discord.RichEmbed()
  				.setAuthor(message.author.username)
  				.setColor(0xeb1a1a)
  				.setDescription("Your request could not be processed.\n " + mentioned + "'s XP has not been recorded yet.")
  				.addField("EXP records not found!","Please start messaging to begin earning EXP!")
  				.setFooter("Mai-san's maid is waiting for your chat...", user.displayAvatarURL)
  				.setTimestamp();

  				message.channel.send(xpwarnembed);
  				return;
  			}

  		let mentioned_curxp = xp[xpmentioned].xp;
  		let mentioned_curlvl = xp[xpmentioned].level;
  		let mlvlcap = 150 * (mentioned_curlvl * 2);
  		let mnxtlvl = xp[xpmentioned].level * mlvlcap;
  		let mnxtlvlXP = mlvlcap * mentioned_curlvl; // check if wrong change curlvl to curxp
  		let mdifference = mnxtlvlXP - mentioned_curxp;




  		let lvlEmbed = new Discord.RichEmbed()
  		.setAuthor(user.username)
  		.setColor(0x0000FF)
  		.addField("Level", mentioned_curlvl, true)
  		.addField("XP", mentioned_curxp, true)
  		.setFooter(`${mdifference} XP till next level up`, user.displayAvatarURL);

  		message.channel.send(lvlEmbed);

  		}

  		if (!mentioned) {

  	  let lvlEmbed = new Discord.RichEmbed()
  	  .setAuthor(message.author.username)
  	  .setColor(0x0000FF)
  	  .addField("Level", curlvl, true)
  	  .addField("XP", curxp, true)
  	  .setFooter(`${difference} XP till next level up`, message.author.displayAvatarURL);

  		message.channel.send(lvlEmbed);}

    } if (message.content.startsWith(prefix + "xpstat")){

  	  const xpcolor = ["0x1d10dd", "0xeb1a1a"];
  	  const xpstatus = ["Gaining XP: Waiting for a message to gain XP.", "Not Gaining XP: XP recently added."];

  	  const mentioneduser = message.mentions.users.first();

  	  if (!mentioned){
  	  if (talkedRecently.has(message.author.id)){
  		  var x = 1;
  	  }else var x = 0;

  	  let statEmbed = new Discord.RichEmbed()
  	  .setAuthor(message.author.username)
  	  .setColor(xpcolor[x])
  	  .setDescription(xpstatus[x])
  	  .setFooter(`${difference} XP till level up`, message.author.displayAvatarURL);

  	  return message.channel.send({embed: statEmbed}).then().catch(console.error);}

  	  if (mentioned){
  		  if (talkedRecently.has(mentioneduser.id)){
  			  var z = 1;
  		  }else var z = 0;

  		let statEmbed = new Discord.RichEmbed()
  	  .setAuthor(mentioneduser.username)
  	  .setColor(xpcolor[z])
  	  .setDescription(xpstatus[z])
  	  .setFooter("-help for more commands.",mentioneduser.displayAvatarURL);

  		return message.channel.send({embed: statEmbed}).then().catch(console.error);}
  	  }

    	  fs.writeFile("./xp.json", JSON.stringify(xp, null, 2), (err) =>{
  		  if (err) console.log(err)
  	  });



  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (message.content.startsWith(prefix)){
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);} else return;

}); //For Commands

bot.on("message", message =>{

if (message.channel.id === "593363003655716864"){
  return;
}

if (message.content.includes(bot.user.toString())) {

    if (message.content.toLowerCase().includes("tsun")){

      const tsun = [
          "N-No, it's not like I did it for you! I did it because I had freetime, that's all! ┐(￣ヘ￣;)┌",
          "I like you, you idiot! 💢",
          "BAKAAAAAAAAAAAAAAA!!!!! YOU'RE A BAKAAAAAAA!!!! 💢💢",
          "I'm just here because I had nothing else to do!",
          "Are you stupid?",
          "💢 You're such a slob!",
          "You should be grateful!",
          "You're free anyways, right?",
          "Don't misunderstand, it's not like I like you or anything... ( ￣＾￣)",
          "H-Hey.... (//・.・//)",
          "....T-Thanks.....",
          "B-Baka! 💢",
          "T-Tch! S-Shut up!",
          "I just had extra, so shut up and take it! 💢",
          "Can you be ANY MORE CLUELESS?",
          "HEY! It's a privilege to even be able to talk to me! You should be honored! 💢",
          "Geez, stop pushing yourself! You're going to get yourself hurt one day, you idiot!",
          "I-I am not a tsundere, you b-baka!",
          "💢 I'm only t-talking to you because I have nothing else to do, b-baka!",
          "Don't get the wrong idea! BAKA!",
          "I-I'm doing this p-purely for my own benefit. So d-don't misunderstand, you idiot!",
          "Urusai, urusai, urusai!! 💢",
          "I-It's not that I like you or anything, I just happened to make too much for lunch...",
          "Don't misunderstand...baka.",
          "B-baka! I am not a tsundere! 💢",
          "Na-nan des-ka?"
      ];
      message.channel.send(tsun[Math.round(Math.random() * (tsun.length - 1))])

    }

  }

  if (message.content.includes("discord.gg/")){//deletes discord invite links
		const xinviteEmbed = new Discord.RichEmbed()
		.setColor(0xeb1a1a)
		.setDescription(message.author + ", sending invite link is disallowed here.")
		.setTitle("An invite link was deleted.");
		 if (message.channel.id === '619456171186847764'){
			 return;
		 } else  message.delete()
			 message.channel.send({embed: xinviteEmbed});
	}
   else if (message.content.toLowerCase().includes("weiner".toLowerCase())){
		const dialogue = [
		"Did anybody mentioned weiner?",
		"Wei.....ner...",
		"somebody has not done anything wrong.. it's just... weiner?",
		"What do you mean by wei.... ner...?"
		]
		const kaguya = [
		"https://media1.tenor.com/images/2497cca70baa53f6c1d306144683c719/tenor.gif",
		"https://66.media.tumblr.com/2f76e8bdbca846f7332da039ad46def9/tumblr_pn176a6Bv31y0nwq1o1_500.gif",
		"https://66.media.tumblr.com/ce080970708bd4f906a143ccd59797bb/tumblr_pn176a6Bv31y0nwq1o2_500.gif",
		"https://i.redd.it/rs3qaxpknqj21.gif"
		];
		var i = Math.floor(Math.random()*kaguya.length);;
		var j = Math.floor(Math.random()*dialogue.length);;

		const kaguyaEmbed = new Discord.RichEmbed()
		.setColor(0xe78888)
		.setImage(kaguya[i])
		.setFooter(dialogue[j])
		.setTimestamp();
		message.channel.send({embed: kaguyaEmbed});
  }
});//For word detections

bot.on("message", message =>{

if(message.author.bot) return;

});//for bot tagging

bot.login(auth.token); //log in bot commands using Mai-san's Maid Bot
client.login(auth.token); //log in bot commands using Mai-san's Maid Bot
