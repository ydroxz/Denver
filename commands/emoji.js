const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete();
  if (!("698880198510248006").includes(message.author.id))
    return message.reply(
      "(<a:atencao:809880343716692028>) | **Apenas** `!✨Pitzinho o Falido do Dc💸#8963` **pode usar esse comando!**"
    );
  if (!args[0])
    return message.channel.send(
      `**${message.author}, Voçe deve usar:** ` +
        "`" +
        ".emoji (nome do emoji)`"
    ); //Troque a exclamação ! da mensagem acima pelo seu prefixo
  let emoji = message.guild.emojis.cache.find(emoji => emoji.name === args[0]);

  if (!emoji) {
    message.reply(
      "`" + args[0] + "`:x: **Não é um emoji deste servidor ou eu não encontrei!**"
    );
  } else if (emoji.animated === true) {
    message.channel.send(`<a:${args[0]}:${emoji.id}>`);
  } else {
    message.channel.send(`<:${args[0]}:${emoji.id}>`);
  }
};