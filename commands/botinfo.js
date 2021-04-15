const Discord = require('discord.js')
const moment = require('moment')

moment.locale('pt-br')

module.exports = {

  run: function (client, message, args) {
    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    const inline = true
    const botAvatar = client.user.displayAvatarURL
    const date = client.user.createdAt
    const userName = client.user.username
    const servsize = client.guilds.size
    const usersize = client.users.size
    const status = {
      online: '`🟢` Online',
      offline: '`⚫` Offline'
    }

    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setThumbnail(botAvatar)
      .setAuthor(' Minhas Informações:⠀⠀⠀⠀⠀⠀⠀')
      .addField('<:timer:815372653052559371> | **Acordado há:**', `**${hours.toFixed()}** horas,  **${minutes.toFixed()}** minutos, **${seconds.toFixed()}** segundos`)
      .addField('<:raio:814237238241394719> | **Meu Criador: **', '```!✨Pitzinho o Falido do Dc💸#8963```' )
      .addField('<:lista:815371186527404083> | **Servidores:**', `**${client.guilds.cache.size}**`,incline=true)
      .addField('<:membros:815372736544374788> | **Membros:**', `**${client.users.cache.size}**`,incline=true)
      .addField(':test_tube: | **Shards:**', `**1**`,incline=true)

    message.channel.send(`${message.author}`,embed)
  },

  conf: {},

  get help () {
    return {
      name: 'botinfo',
      category: 'Info',
      description: 'Mostra informações do bot.',
      usage: 'botinfo'
    }
  }
}
/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}