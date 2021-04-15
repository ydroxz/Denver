module.exports = {
  name: "voicekick",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
      return message.reply(
        "<a:error3:818556346852573235> **|** Voçe não tem permissão para utilizar este comando!"
      );

    if (!message.mentions.members.first())
      return message.reply(
        `<a:error3:818556346852573235> **|** Por favor mencione um user para ser expulso de um canal de voz!`
      );

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.reply(`<a:error3:818556346852573235> **|** O user mencionado não está em nenhum canal de voz!`);

    message.mentions.members.first().voice.kick();
    
    message.reply(`<a:certinho2:816482021710364713> **|** O user mencionado foi expulso do canal de voz com sucesso!`)
  }
};