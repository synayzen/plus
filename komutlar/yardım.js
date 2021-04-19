const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('BLUE')
 .setDescription(`
 > ➬ \`.anti-raid aç & kapat \` -> Anti-raid sistemi açmak & kapatmak.

 > ➬ \`.bot-izni ID \` -> anti izninden yararlanma.

 > ➬\`.capsengel aç & kapat \`-> Capslock engeli açmak & kapatmak.
 
 > ➬\`.emoji-koruma aç & kapat \` -> Emoji engeli açmak & kapatmak.
 
 >➬\`.ever-engel aç & kapat \`-> Everyone ve here engeli açmak & kapatmak.
 
 >➬\`.kanal-koruma aç & kapat \`-> Kanal korumayı açmak & kapatmak.
 
 >➬\`.küfür-engel aç & kapat \`-> Küfür engeli açmak & kapatmak.
 
 >➬\`.mod-log <#kanal> \`-> Mod-Log kanalını belirler.
 
 >➬\`.reklam-engel aç & kapat \`-> Reklam engeli açmak & kapatmak.
 
 >➬\`.rol-koruma aç & kapat \`-> Rol korumayı açmak & kapatmak.
 
 >➬\`.yapımcım \`-> Yapan kişiyi gösterir.\``)
 .setFooter(`⚔ 𝗔𝘀𝘀𝗮𝘀𝗶𝗻'𝘀 𝗰𝗿𝗲𝗲𝗱 Sunar .`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/801730953813688340/811572708068163644/assas.gif")
message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '/yetkili-guard',   
  description: '',
  usage: ''
};