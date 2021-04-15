const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif',
  'https://media.giphy.com/media/ARSp9T7wwxNcs/giphy.gif',
  'https://media.giphy.com/media/Z7x24IHBcmV7W/giphy.gif',
  'https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif',
  'https://media.giphy.com/media/L2z7dnOduqEow/giphy.gif',
  'https://media.giphy.com/media/3oz8xDLT82QiURnPS8/giphy.gif',
  'https://media.giphy.com/media/dc4UxTw2ueAbm/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('<a:sino:809882202866319442> | Não se esqueça de mencionar alguém!');
}

if(user.id == message.author.id){
        return message.reply(`🚫 **|** Voçe nao pode fazer cafuné em voçe mesmo!`);
    };
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Fazendo Cafuné..')
        .setColor('#ff6f00')
        .setDescription(` :kissing_closed_eyes: ${message.author} acaba de fazer um cafune em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.guild.name}`)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
