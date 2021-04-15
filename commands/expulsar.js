const { MessageEmbed } = require("discord.js")
const moment = require('moment')

module.exports = {
name: "kick",
category: "moderation",
description: "kick a user",
cooldown: 5,
userPerms: ["KICK_MEMBERS"],
clientPerms: ["KICK_MEMBERS"],
run: async(client, message, args) => {  
const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
const reason = args.slice(1).join(" ")
          if (!args[0]) return message.reply("<a:error3:818556346852573235> **|** Especifique algum user para ser expulso do server!")
        if (!mentionedMember) return message.channel.send("<a:error3:818556346852573235> **|** Me desculpa eu não achei este membro!")
        if (mentionedMember.id === message.author.id) return message.reply("<a:error3:818556346852573235> **|** Voçe não pode se auto expulsar!")
        if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id) {
            return message.reply("<a:error3:818556346852573235> **|** Eu não posso expulsar este user, porque eu não tenho permissão!")
        }
        if (mentionedMember.kickable) {
            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
            .setThumbnail(mentionedMember.user.displayAvatarURL({dynamic: true}))
            .setColor(`GRAY`)
            .setFooter(`Expulso por: ${message.author.username}`)
            .setDescription(`
**Membro:** ${mentionedMember.user.username} - (${mentionedMember.user.id})
**Motivo:** ${reason || "Motivo não inserido."}
            `)
        message.channel.send(embed)
        mentionedMember.kick()
        } else {
            return message.reply("<a:error3:818556346852573235> **|** Eu não posso expulsar este user, porque eu não tenho permissão!")
        }
        return undefined
    }
}