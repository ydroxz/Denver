const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `🗓️ ${days.toFixed()} dias\n🗓️ ${hours.toFixed()} horas\n🗓️ ${minutes.toFixed()} minutos\n🗓️ ${seconds.toFixed()} segundos`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`:clock1: Tempo de Atividade..`)
    .setThumbnail("https://media.giphy.com/media/3oxRmvU3GAJay6F60g/giphy.gif")
    .setColor("BLUE")
    .setDescription(`**Estou Acordado há:**\n${uptime}`)

  message.channel.send(embed);
};