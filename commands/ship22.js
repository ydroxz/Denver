const Discord = require("discord.js");

var fortunes = [
    `**1%** de chance! As chances são poucas :neutral_face:`,
    `**3%** de chance! As chances são poucas :neutral_face:`,
    `**5%** de chance! As chances são poucas :neutral_face:`,
    `**8%** de chance! As chances são poucas :neutral_face:`,
    `**11%** de chance! As chances são poucas :neutral_face:`,
    `**14%** de chance! As chances são poucas :neutral_face:`,
    `**16%** de chance! As chances são poucas :neutral_face:`,
    `**19%** de chance! Pode ser que de certo :grimacing:`,
    `**22%** de chance! Pode ser que de certo :grimacing:`,
    `**26%** de chance! Pode ser que de certo :grimacing:`,
    `**29%** de chance! Pode ser que de certo :grimacing:`,
    `**31%** de chance! Pode ser que de certo :grimacing:`,
    `**36%** de chance! Pode ser que de certo :grimacing:`,
    `**38%** de chance! Pode ser que de certo :grimacing:`,
    `**42%** de chance! Vejo um casal se formando :kissing_closed_eyes:`,
    `**44%** de chance! Vejo um casal se formando :kissing_closed_eyes:`,
    `**49%** de chance! Vejo um casal se formando :kissing_closed_eyes:`,
    `**51%** de chance! Vejo um casal se formando :kissing_closed_eyes:`,
    `**54%** de chance! Vejo um casal se formando :kissing_closed_eyes:`,
    `**56%** de chance! Vejo um casal se formando :kissing_closed_eyes:`,
    `**61%** de chance! Vejo um casal se formando :kissing_closed_eyes:`,
    `**67%** de chance! Vejo um casal se formando :kissing_closed_eyes:`,
    `**71%** de chance! Já são um belo casal :smiling_face_with_3_hearts:`,
    `**77%** de chance! Já são um belo casal :smiling_face_with_3_hearts:`,
    `**79%** de chance! Já são um belo casal :smiling_face_with_3_hearts:`,
    `**85%** de chance! Já são um belo casal :smiling_face_with_3_hearts:`,
    `**89%** de chance! Já são um belo casal :smiling_face_with_3_hearts:`,
    `**90%** de chance! Nem a morte pode separar esse casal :heart_eyes:`,
    `**92%** de chance! Nem a morte pode separar esse casal :heart_eyes:`,
    `**97%** de chance! Nem a morte pode separar esse casal :heart_eyes:`,
    `**99%** de chance! Nem a morte pode separar esse casal :heart_eyes:`,
    `**100%** de chance! Nem a morte pode separar esse casal :heart_eyes:`

  ];
  
  exports.run = (client, message, args) => {

    if(!args[0]){
      return message.channel.send("<a:errado:809880083299827782>" + "**|** Não se esqueça de marcar alguém para seu ship!")
    };

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`:sparkling_heart: Será que temos um casal aqui?`)
    .setDescription(`${message.author} é ${user} tem ${fortunes[Math.floor(Math.random() * fortunes.length)]}`)
    .setThumbnail(`https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif`)
    .setFooter(`Executado por: ${message.author.username}`)
    
    message.channel.send(embed);
};
  
  exports.help = {
    name : "Vidente",
    description: "Te da resposta para suas perguntas!",
    usage: "Vidente [pergunta]"
  };