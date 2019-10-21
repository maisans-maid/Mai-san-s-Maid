const Discord = require("discord.js");
const Commando = require('discord.js-commando');



module.exports.run = async (bot, message, args) => {


    const param1 = message.content.toLowerCase().split('').slice(4);

if (param1.length > 90) return (message.channel.send(`That's too many! I can't handle that!`))

    const map = {
        a: ':regional_indicator_a:',
        b: ':regional_indicator_b:',
        c: ':regional_indicator_c:',
        d: ':regional_indicator_d:',
        e: ':regional_indicator_e:',
        f: ':regional_indicator_f:',
        g: ':regional_indicator_g:',
        h: ':regional_indicator_h:',
        i: ':regional_indicator_i:',
        j: ':regional_indicator_j:',
        k: ':regional_indicator_k:',
        l: ':regional_indicator_l:',
        m: ':regional_indicator_m:',
        n: ':regional_indicator_n:',
        o: ':regional_indicator_o:',
        p: ':regional_indicator_p:',
        q: ':regional_indicator_q:',
        r: ':regional_indicator_r:',
        s: ':regional_indicator_s:',
        t: ':regional_indicator_t:',
        u: ':regional_indicator_u:',
        v: ':regional_indicator_v:',
        w: ':regional_indicator_w:',
        x: ':regional_indicator_x:',
        y: ':regional_indicator_y:',
        z: ':regional_indicator_z:',
        0: ':zero:',
        1: ':one:',
        2: ':two:',
        3: ':three:',
        4: ':four:',
        5: ':five:',
        6: ':six:',
        7: ':seven:',
        8: ':eight:',
        9: ':nine:',
        '#': ':hash:',
        '*': ':asterisk:',
        '!': '❗',
        '?': '❓',
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
	name: "ri"
}
