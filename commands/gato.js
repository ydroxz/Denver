const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif',
  'https://media.giphy.com/media/CqVNwrLt9KEDK/giphy.gif',
  'https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif',
  'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif',
  'https://media.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif',
  'https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif',
  'https://media.giphy.com/media/Nm8ZPAGOwZUQM/giphy.gif',
  'https://media.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.gif',
  'https://media.giphy.com/media/lJNoBCvQYp7nq/giphy.gif',
  'https://media.giphy.com/media/MWSRkVoNaC30A/giphy.gif',
  'https://media.giphy.com/media/MCfhrrNN1goH6/giphy.gif',
  'https://media.giphy.com/media/ND6xkVPaj8tHO/giphy.gif',
  'https://media.giphy.com/media/xTiQygY6HW1GjoYKFq/giphy.gif',
  'https://media.giphy.com/media/ASvQ3A2Q7blzq/giphy.gif',
  'https://media.giphy.com/media/l6Td5sKDNmDGU/giphy.gif',
  'https://media.giphy.com/media/11c7UUfN4eoHF6/giphy.gif',
  'https://media.giphy.com/media/13HBDT4QSTpveU/giphy.gif',
  'https://media.giphy.com/media/5i7umUqAOYYEw/giphy.gif',
  'https://media.giphy.com/media/OmK8lulOMQ9XO/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Gatos...')
        .setColor('RANDOM')
        .setDescription(`${message.author} :cat: Olha um Gato!`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.guild.name}`)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}