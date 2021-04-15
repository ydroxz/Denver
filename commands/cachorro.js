const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif',
  'https://media.giphy.com/media/xTiTnf9SCIVk8HIvE4/giphy.gif',
  'https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif',
  'https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif',
  'https://media.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif',
  'https://media.giphy.com/media/JXuGatu6v9pUA/giphy.gif',
  'https://media.giphy.com/media/eeUJaTwsHh3tswkaYm/giphy.gif',
  'https://media.giphy.com/media/9rtpurjbqiqZXbBBet/giphy.gif',
  'https://media.giphy.com/media/xThtadSLoInlcD1UmA/giphy.gif',
  'https://media.giphy.com/media/21GCae4djDWtP5soiY/giphy.gif',
  'https://media.giphy.com/media/jqNRMFBZwzjUmpZOcS/giphy.gif',
  'https://media.giphy.com/media/yJHN2CCfPIw4o/giphy.gif',
  'https://media.giphy.com/media/2bUqez1VlOCInOZLTp/giphy.gif',
  'https://media.giphy.com/media/m0MfjLtKOgTPG/giphy.gif',
  'https://media.giphy.com/media/gfl7CKcgs6exW/giphy.gif',
  'https://media.giphy.com/media/FFb9yZK6t0oDu/giphy.gif',
  'https://media.giphy.com/media/gFW9rRpOkMRBY2KF6s/giphy.gif',
  'https://media.giphy.com/media/dJZi221XtSnHW/giphy.gif',
  'https://media.giphy.com/media/SIKe5cA5q3cvTSds0a/giphy.gif',
  'https://media.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Cachorros...')
        .setColor('RANDOM')
        .setDescription(`${message.author} :dog: Olha um cachorro!`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.guild.name}`)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}