const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/Moh8M73DNem1dNEt8f/giphy.gif',
  'https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif',
  'https://media.giphy.com/media/xUO4t2gkWBxDi/giphy.gif',
  'https://media.giphy.com/media/l2QE4xqSbkt8Tz8Ck/giphy.gif',
  'https://media.giphy.com/media/u2LJ0n4lx6jF6/giphy.gif',
  'https://media.giphy.com/media/AlsIdbTgxX0LC/giphy.gif',
  'https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif',
  'https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif',
  'https://media.giphy.com/media/9U5J7JpaYBr68/giphy.gif',
  'https://media.giphy.com/media/RXGNsyRb1hDJm/giphy.gif',
  'https://media.giphy.com/media/XbV2eCHp0mHthRjdJP/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply(' :bell: | lembre-se de mencionar um usuário válido para Bater!');
}

if(user.id == "796034107288715294"){
        return message.reply(`:grimacing: Ei por favor.. não me bata!`);
    };

if(user.id == message.author.id){
        return message.reply(`🚫 **|** Voçe nao pode se auto bater!`);
    };
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Batendo..')
        .setColor('#f8f8f9')
        .setDescription(` :scream_cat: ${message.author} acaba de Bater no ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.guild.name}`)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}