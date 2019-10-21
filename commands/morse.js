const Discord = require("discord.js");
const Commando = require('discord.js-commando');



module.exports.run = async (bot, message, args) => {


    const param1 = message.content.toLowerCase().split('').slice(4);

if (param1.length > 90) return (message.channel.send(`That's too many! I can't handle that!`))

    const map = {
        a: '● ███ ',
        b: '███ ● ● ● ',
        c: '███ ● ███ ● ',
        d: '███ ● ● ',
        e: '● ',
        f: '● ● ███ ● ',
        g: '███ ███ ● ',
        h: '● ● ● ● ',
        i: '● ● ',
        j: '● ███ ███ ███ ',
        k: '███ ● ███ ',
        l: '● ███ ● ● ',
        m: '███ ███ ',
        n: '███ ● ',
        o: '███ ███ ███ ',
        p: '● ███ ███ ● ',
        q: '███ ███ ● ███ ',
        r: '███ ● ███',
        s: '● ● ● ',
        t: '███ ',
        u: '● ● ███ ',
        v: '● ● ● ███ ',
        w: '● ███ ███ ',
        x: '███ ● ● ███ ',
        y: '███ ● ███ ███ ',
        z: '███ ███ ● ● ',
        1: '● ███ ███ ███ ███ ',
        2: '● ● ███ ███ ███ ',
        3: '● ● ● ███ ███ ',
        4: '● ● ● ● ███ ',
        5: '● ● ● ● ● ',
        6: '███ ● ● ● ● ',
        7: '███ ███ ● ● ● ',
        8: '███ ███ ███ ● ● ',
        9: '███ ███ ███ ███ ● ',
        0: '███ ███ ███ ███ ███ ',
        ' ': '    ',

    }
var output =''
for (let i of param1){
  if (i in map) {
  i = map[i] + '\u200b'
  }
  output += i
}

return message.channel.send('\u200b' + output).catch(console.error);

}

module.exports.help = {
	name: "morse"
}
