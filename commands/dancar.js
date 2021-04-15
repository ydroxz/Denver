const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/5xaOcLGvzHxDKjufnLW/giphy.gif',
  'https://media.giphy.com/media/13p77tfexyLtx6/giphy.gif',
  'https://media.giphy.com/media/iFL8qJ5DVusJG/giphy.gif',
  'https://media.giphy.com/media/l3vRlT2k2L35Cnn5C/giphy.gif',
  'https://media.giphy.com/media/26uflv5FX1IGuAlUs/giphy.gif',
  'https://media.giphy.com/media/xT5LMTSYIa75vRSqpa/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('<a:sino:809882202866319442> | Não se esqueça de mencionar alguém!');
}

if(user.id == message.author.id){
        return message.reply(`🚫 **|** Voçe nao pode dançar consigo mesmo!`);
    };
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Dançando..')
        .setColor('#93ff00')
        .setDescription(` :partying_face: ${message.author} acaba de dançar com ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.guild.name}`)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}