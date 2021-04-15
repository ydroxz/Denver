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
  'https://media.giphy.com/media/MQVpBqASxSlFu/giphy.gif',
  'http://24.media.tumblr.com/tumblr_ljo4fvfHYE1qbq4v6o1_400.gif',
  'https://68.media.tumblr.com/cd1fe5b97e982a86887a23726f772607/tumblr_ofnfvg7SR01va6flfo1_500.gif',
  'https://49.media.tumblr.com/d95ce6f088d546bcbedf19bbd9880d2e/tumblr_mwwawixMeF1qbvovho1_500.gif'
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
        return message.reply(`:grimacing: Eeeeh eu não quero te beijar não, mas podemos ser amigos..`);
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
