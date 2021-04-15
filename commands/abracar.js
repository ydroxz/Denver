const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/VGACXbkf0AeGs/giphy.gif',
  'https://media.giphy.com/media/QbkL9WuorOlgI/giphy.gif',
  'https://media.giphy.com/media/l8ooOxhcItowwLPuZn/giphy.gif',
  'https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif',
  'https://media.giphy.com/media/mmPgxbuPiwCQg/giphy.gif',
  'https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif',
  'https://media.giphy.com/media/VduFvPwm3gfGO8duNN/giphy.gif',
  'https://media.giphy.com/media/H8FUo1WhXLrJk52g8H/giphy.gif',
 'https://media.giphy.com/media/1434tCcpb5B7EI/giphy.gif',
 'https://media.giphy.com/media/adTDFaG92ulxu/giphy.gif',
 'https://media.giphy.com/media/DjczAlIcyK1Co/giphy.gif',
 'https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif',
 'https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif',
 'https://media.giphy.com/media/XngSZ7e6wBOBG/giphy.gif',
 'https://media.giphy.com/media/LIqFOpO9Qh0uA/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('<a:sino:809882202866319442> | Não se esqueça de mencionar alguém!');
}

if(user.id == message.author.id){
        return message.reply(`🚫 **|** Voçe nao pode se auto abraçar!`);
    };
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Abraçando..')
        .setColor('#6a00ff')
        .setDescription(` :flushed: ${message.author} acaba de abraçar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.guild.name}`)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}