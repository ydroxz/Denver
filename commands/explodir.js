const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/146BUR1IHbM6zu/giphy.gif',
  'https://media.giphy.com/media/26uTt2zN11nFuyH1C/giphy.gif',
  'https://media.giphy.com/media/z9iE1SPAptyLK/giphy.gif',
  'https://media.giphy.com/media/3oKIPwoeGErMmaI43S/giphy.gif',
 'https://media.giphy.com/media/ceHKRKMR6Ojao/giphy.gif',
  'https://media.giphy.com/media/QT9SVRVexMgOk/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('<a:sino:809882202866319442> | lembre-se de mencionar um usuário para dar aquela explodida!');
}

if(user.id == "796034107288715294"){
        return message.reply(`:grimacing: Ei por favor.. eu tenho familia!`);
    };

if(user.id == message.author.id){
        return message.reply(`🚫 **|** Voçe nao pode se auto explodir!`);
    };
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Explodindo..')
        .setColor('#FF0A23')
        .setDescription(`${message.author} acaba de dar uma explodida em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.guild.name}`)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}