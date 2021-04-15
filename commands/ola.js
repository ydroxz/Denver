const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/LoX8yc1ngPCvu/giphy.gif',
  'https://media.giphy.com/media/8vc2rMUDjhy6Y/giphy.gif',
  'https://media.giphy.com/media/yyVph7ANKftIs/giphy.gif',
  'https://media.giphy.com/media/HLpTRnAToI4py/giphy.gif',
  'https://media.giphy.com/media/LiOS57ojyxAGc/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('<a:sino:809882202866319442> | Não se esqueça de mencionar alguém!');
}

if(user.id == message.author.id){
        return message.reply(`🚫 **|** Voçe nao pode mandar um Oi para voçe mesmo!`);
    };
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Olá!')
        .setColor('#93ff00')
        .setDescription(` :speech_balloon: ${message.author} acaba de mandar um Oi para ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.guild.name}`)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}