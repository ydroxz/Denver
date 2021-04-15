const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/lrPDCZOAwf2S0k7B8R/giphy.gif',
  'https://media.giphy.com/media/PnhOSPReBR4F5NT5so/giphy.gif',
  'https://media.giphy.com/media/a2BHbTG4G9AaI/giphy.gif',
  'https://images-ext-2.discordapp.net/external/wrurHL0ZyVIfuBa43r2Zx6F-LH0q73k17N_My4f3Pfg/https/3.bp.blogspot.com/-iD7272S7Pp4/VTPfAycs3_I/AAAAAAAAE2I/5CAtIuZ1hHI/s1600/robocop%252Bfuzila.gif',
  'https://media.giphy.com/media/9tXn7DEOsjifNDEenF/giphy.gif',
  'https://media.giphy.com/media/l0HlAM4tGJyRkTOSY/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply(' :bell: | Não se esqueça de mencionar alguém!');
}

if(user.id == "796034107288715294"){
        return message.reply(`:grimacing: Ei por favor.. não me fuzile, isso e cruel! :(`);
    };

if(user.id == message.author.id){
        return message.reply(`🚫 **|** Voçe nao pode se auto fuzilar!`);
    };
/*
message.channel.send(`${message.author.username} *acaba de abraçar* ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Fuzilando..')
        .setColor('#e0003b')
        .setDescription(`${message.author} :gun: acaba de Fuzilar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.guild.name}`)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}