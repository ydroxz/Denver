const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `๐๏ธ ${days.toFixed()} dias\n๐๏ธ ${hours.toFixed()} horas\n๐๏ธ ${minutes.toFixed()} minutos\n๐๏ธ ${seconds.toFixed()} segundos`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`:clock1: Tempo de Atividade..`)
    .setThumbnail("https://media.giphy.com/media/3oxRmvU3GAJay6F60g/giphy.gif")
    .setColor("BLUE")
    .setDescription(`**Estou Acordado hรก:**\n${uptime}`)

  message.channel.send(embed);
};