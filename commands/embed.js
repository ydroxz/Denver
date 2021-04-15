const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "announce",
aliases: ["", "a"],
category: "moderation",
usage: "embed <text to say>",
description: "Returns provided text in Embed form.",
run: async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`<a:nao:809880719814819880> **|** Voçe não tem permissão!`)
 await message.delete()
  let say = message.content.split(" ").slice(1).join(" ")
  if(!say) return message.reply(`<a:nao:809880719814819880> **|**`+" Coloque uma mensagem!")
  let embed = new MessageEmbed()
.setAuthor(``)
  .setDescription(`${say}`)
  .setColor("BLUE")
.setFooter(`${message.author.username}`)
.setTimestamp()
  message.channel.send(embed)
}
}