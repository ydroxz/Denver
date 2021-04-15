const discord = require("discord.js");

module.exports = {
  name: "membercount",
  category: "info",
  description: "Get your id",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Quantidade de Membros!`)
    .setDescription(
    `
👥 **|** Membros Totais: **${message.guild.memberCount}**
👤 **|** Humanos: **${message.guild.members.cache.filter(m => !m.user.bot).size}**
🤖 **|** Bots: **${message.guild.members.cache.filter(m => m.user.bot).size}**`)
    .setColor("GRAY")
    
    message.channel.send(`${message.author}`,embed)
  }
}