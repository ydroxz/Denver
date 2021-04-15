const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'http://66.media.tumblr.com/tumblr_lmg4tfseuq1qhzyzho1_500.gif',
  'http://pa1.narvii.com/6347/1591686ef4fdc1172d8b9713d0fabd55b3e43942_00.gif',
  'http://66.media.tumblr.com/tumblr_lmg4tfseuq1qhzyzho1_500.gif',
  'http://3.bp.blogspot.com/-z85BVK1l4f8/Ug5jh9uakMI/AAAAAAAABSA/1TH0m9KqT8M/s1600/vaca-chutando-cara.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('<a:sino:809882202866319442> | lembre-se de mencionar alguém!');
}

if(user.id == "796034107288715294"){
        return message.reply(`:grimacing: Ei por favor.. não me chute!`);
    };

if(user.id == message.author.id){
        return message.reply(`🚫 **|** Voçe nao pode chutar voçe mesmo!`);
    };
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Chutando..')
        .setColor('RED')
        .setDescription(` :astonished: ${message.author} acaba de Chutar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.guild.name}`)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}