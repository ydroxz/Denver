const Discord = require("discord.js");

var fortunes = [
    `1`,
    `3`,
    `5`,
    `8`,
    `11`,
    `14`,
    `16`,
    `19`,
    `22`,
    `26`,
    `29`,
    `31`,
    `36`,
    `38`,
    `42`,
    `44`,
    `49`,
    `51`,
    `54`,
    `56`,
    `61`,
    `67`,
    `71`,
    `77`,
    `79`,
    `85`,
    `89`,
    `90`,
    `92`,
    `97`,
    `99`,
    `100`

  ];
  
  exports.run = (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  const embed = new Discord.MessageEmbed()
    .setColor('GRAY')
    .setDescription(`:rainbow_flag: ${user} é ${fortunes[Math.floor(Math.random() * fortunes.length)]}% Gay!`)
    
    message.channel.send(embed);
};
  
  exports.help = {
    name : "Vidente",
    description: "Te da resposta para suas perguntas!",
    usage: "Vidente [pergunta]"
  };