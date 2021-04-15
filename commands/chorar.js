const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/pwUiRX47cHi6Y/giphy.gif',
  'https://media.giphy.com/media/8YutMatqkTfSE/giphy.gif',
  'https://media.giphy.com/media/yarJ7WfdKiAkE/giphy.gif',
  'https://media.giphy.com/media/lODI3usw8UgFi/giphy.gif',
  'https://media.giphy.com/media/12Bpme5pTzGmg8/giphy.gif',
  'https://media.giphy.com/media/3fmRTfVIKMRiM/giphy.gif',
  'https://media.giphy.com/media/jmroipCNWfDCE/giphy.gif',
  'https://media.giphy.com/media/87HkPDUOtN0TC/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Chorando..')
        .setColor('#0018ff')
        .setDescription(` :sob: ${message.author} acaba de Chorar!`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.guild.name}`)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}