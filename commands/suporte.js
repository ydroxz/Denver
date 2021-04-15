const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "To add/invite the bot to your server",
    usage: "[invite]",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`Suporte ${client.user.username}`)
    .setDescription(`<:enviar:815371488302858270> Precisa de ajuda/suporte? Entre no meu server de Suporte!! \n\nBasta voçê clicar **[aqui](https://discord.gg/xbuJFhFwBd)** para receber o convite!!`)
    .setURL(`https://discord.gg/xbuJFhFwBd`)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};
