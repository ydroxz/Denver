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
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`<a:ursinho:815370611287130152> Quer me adicionar? Me convide! \n\nClique **[aqui](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)** para me adicionar em seu server!`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};
