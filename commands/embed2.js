const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "announce",
aliases: ["", "a"],
category: "moderation",
usage: "embed <text to say>",
description: "Returns provided text in Embed form.",
run: async(client, message, args) => {
  if (![`698880198510248006`].includes(message.author.id))
    return message.reply(
      " (<a:atencao:809880343716692028>) | **Apenas** `!✨Pitzinho o Falido do Dc💸#8963` **pode usar esse comando!**"
    );
 await message.delete()
  let say = message.content.split(" ").slice(1).join(" ")
  if(!say) return message.reply(`<a:nao:809880719814819880> **|**`+" Coloque uma mensagem!")
  let embed = new MessageEmbed()
.setAuthor(``)
  .setDescription(`${say}`)
  .setColor("BLUE")
  message.channel.send(embed)
}
}