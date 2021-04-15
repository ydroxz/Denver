const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/YaZgr3Nj9DDI4/giphy.gif',
  'https://media.giphy.com/media/l0ExqbRzq05DHIlJm/giphy.gif',
  'https://media.giphy.com/media/Um7TeqbaS33Ww/giphy.gif',
  'https://media.giphy.com/media/2k0sUXCWw7WmY/giphy.gif',
  'https://media.giphy.com/media/LW4z89I6sh7H2KTQ5y/giphy.gif',
  'https://media.giphy.com/media/RSz8j1YgUUhuU/giphy.gif',
  'https://media.giphy.com/media/S0A0PBw8pZNFC/giphy.gif',
  'https://media.giphy.com/media/Q1jTdEnntNZss/giphy.gif',
  'https://media.giphy.com/media/XoMnoYMw4fXCo/giphy.gif',
  'https://media.giphy.com/media/GI1kfuiI4Tzgc/giphy.gif',
  'https://media.giphy.com/media/mWcxXyXiUZ4Zi/giphy.gif',
  'https://media.giphy.com/media/EiwxnURZsqpt6/giphy.gif',
  'https://media.giphy.com/media/xqBpxjk7CXLtm/giphy.gif',
  'https://media.giphy.com/media/woXWi4MFGbmLu/giphy.gif',
  'https://media.giphy.com/media/2yrprYMD0Tao0KCn69/giphy.gif'

];

var rand = list[Math.floor(Math.random() * list.length)];
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Cavalos..')
        .setColor('RANDOM')
        .setDescription(`${message.author} :horse: Olha um Cavalo!`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.guild.name}`)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}