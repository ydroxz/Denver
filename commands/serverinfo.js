
const Discord = require("discord.js");
const moment = require('moment');

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`<a:sino:809882202866319442> **|** Informações sobre o Server!`)
    .setTimestamp()
    .setFooter(`${message.guild.name}`)
    .setFooter(`${message.guild.name}`)
    .setThumbnail(message.guild.iconURL())
    .addField(`<:timer:815372653052559371> | Criado em:`, `${moment(message.guild.createdTimestamp).format('DD/MM/YYYY')}`)
    .addField("<:raio:814237238241394719> | Dono(a):", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
    .addField("<:membros:815372736544374788> | Membros:", `**${message.guild.memberCount}**`,incline=true)
    .addField("<:files:815371341703807046> | Emojis:", `**${message.guild.emojis.cache.size}**`,incline=true)
    .addField("<:lista:815371186527404083> | Cargos:", `**${message.guild.roles.cache.size}**`,incline=true)
    .addField('<:enviar:815371488302858270> | **Canais:**', `**${message.guild.channels.cache.size}**`,incline=true)
    .addField(':earth_americas: | Região do servidor:', message.guild.region.charAt(0).toUpperCase() + message.guild.region.slice(1),incline=true)
    
    message.channel.send(`${message.author}`,embed);
}
