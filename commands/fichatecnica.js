const Discord = require('discord.js')
const moment = require('moment')

moment.locale('pt-br')

module.exports = {

  run: function (client, message, args) {
    const botAvatar = client.user.displayAvatarURL
      let os = require('os')
    
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setThumbnail(botAvatar)
      .setAuthor('Minha Ficha Técnica:⠀⠀⠀⠀⠀⠀')
      .addField('<:raio:814237238241394719> **|** **Meu Criador: **', '```!✨Pitzinho o Falido do Dc💸#8963```' )
      .addField('<:gear2:815371255137566790> **|** **Comandos:**', '57', true)
      
      .addField(':test_tube: **|** **Shards:**', `**1**`,incline=true)
      .addField("<:ssd:815372548752670770> **|** Memoria Usada:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
      .addField(":file_cabinet: **|** CPU:", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
      .addField("<:ferramentas:815368801536442388> **|** Arquitetura:", `\`${os.arch()}\``, true)
      .addField("<:lista:815371186527404083> **|** Plataforma:", "`linux`", true)
      .addField("<:files:815371341703807046> **|** Código:", `Feito em: JavaScript <:js:815272406858989590> `, true)
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