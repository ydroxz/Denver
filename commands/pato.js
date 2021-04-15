const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/krewXUB6LBja/giphy.gif',
  'https://media.giphy.com/media/vIJaz7nMJhTUc/giphy.gif',
  'https://media.giphy.com/media/b9QBHfcNpvqDK/giphy.gif',
  'https://media.giphy.com/media/2ATElMHGKoVeo/giphy.gif',
  'https://media.giphy.com/media/wsUtUtLR3A2XPvfLVs/giphy.gif',
  'https://media.giphy.com/media/EcF5i00NFvUI0/giphy.gif',
  'https://media.giphy.com/media/82nxC1u2BC8VU1wiZq/giphy.gif',
  'https://media.giphy.com/media/132xaiItSkgXAs/giphy.gif',
  'https://media.giphy.com/media/wsEX8uMrTRDoI/giphy.gif',
  'https://media.giphy.com/media/AWQdSuOw5UbrW/giphy.gif',
  'https://media.giphy.com/media/NfL15G1Fh7TK8/giphy.gif',
  'https://media.giphy.com/media/U4XCJmyBjsfiU/giphy.gif',
  'https://media.giphy.com/media/gNMpZ7DWvYOd2/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Patos..')
        .setColor('RANDOM')
        .setDescription(`${message.author} :duck: Olha um Pato!`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.guild.name}`)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}