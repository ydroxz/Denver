const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/3o6EhU7SUa3afFIJFe/giphy.gif',
  'https://media.giphy.com/media/l2QE1bH4wvCE8CcTK/giphy.gif',
  'https://media.giphy.com/media/5cdenDXni65aM/giphy.gif',
  'https://media.giphy.com/media/ylyUQlf4VUVF9odXKU/giphy.gif',
  'https://media.giphy.com/media/jriF7NCskWvkd3BROE/giphy.gif',
  'https://media.giphy.com/media/IrQcyTog3X8VW/giphy.gif',
  'https://media.giphy.com/media/73vsXqHC22yuA/giphy.gif',
  'https://media.giphy.com/media/R8s2pWPslY0dG/giphy.gif',
  'https://media.giphy.com/media/5oYgxQKHhEjEk/giphy.gif',
  'https://media.giphy.com/media/3o85xAYQLOhSrmINHO/giphy.gif',
  'https://media.giphy.com/media/1zgzK9wg3xvKeoFUX8/giphy.gif',
  'https://media.giphy.com/media/3oEdvbpl0X32bXD2Vi/giphy.gif',
  'https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif',
  'https://media.giphy.com/media/l41lVsYDBC0UVQJCE/giphy.gif',
  'https://media.giphy.com/media/8vEhb7zhaTsv6/giphy.gif',
  'https://media.giphy.com/media/VzeJ8Zl5kdi9KAD4Xk/giphy.gif',
  'https://media.giphy.com/media/l3V0AYbDjTVOO4zF6/giphy.gif',
  'https://media.tenor.com/images/01749261ca07c13dd696fff0b81e2a68/tenor.gif',
  'https://media.tenor.com/images/5c775a3378ab4767afab34cda7ac9c35/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Macacos...')
        .setColor('RANDOM')
        .setDescription(`${message.author} :monkey: Olha um macaco!`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.guild.name}`)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}