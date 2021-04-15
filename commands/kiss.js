const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/vUrwEOLtBUnJe/giphy.gif',
  'https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif',
  'https://media.giphy.com/media/lBGj9wHG59Xr2/giphy.gif',
  'https://media.giphy.com/media/JFmIDQodMScJW/giphy.gif',
  'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
  'https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif',
  'https://media.giphy.com/media/Gj8bn4pgTocog/giphy.gif',
  'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
  'https://media.giphy.com/media/kdLyU5mq9mGfm/giphy.gif',
  'https://media.giphy.com/media/MQVpBqASxSlFu/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('<a:sino:809882202866319442> | Não se esqueça de mencionar alguém! :heartbeat: ');
}

if(user.id == message.author.id){
        return message.reply(`🚫 **|** Voçe nao pode se auto beijar!`);
    };

if(user.id == "796034107288715294"){
        return message.reply(`:grimacing: Eeeeh eu não quero te beijar não..`);
    };
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Beijando..')
        .setColor('#ff6f00')
        .setDescription(` :heart_eyes: ${message.author} Acaba de Beijar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setFooter(`${message.guild.name}`)
  await message.channel.send(embed);
}
