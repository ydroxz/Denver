const discord = require("discord.js")

module.exports = {
  name: "servericon",
  aliases: ["sav", "guildavatar"],
  category: "info",
  description: "Get avatar of the server",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()

      embed.setTimestamp()
      embed.setFooter(`${message.author.username}`) 
      embed.setTitle(`Icon do server: ${message.guild.name}`)
      embed.setDescription(`Clique **[aqui](${message.guild.iconURL({ dynamic: true, size: 1024 })})** para Baixar!`)
      embed.setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
      embed.setColor("BLUE")
    
      message.channel.send(`${message.author}`,embed)
    
  }
}