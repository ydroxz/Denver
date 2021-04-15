const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "blowjob",
  category: "NSFW",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

  //Checks channel for nsfw
  var errMessage = "Sabia que pit e meu Criador? Eu amo muito ele! Porque também sem ele eu nem existia! ```I Love you !✨Pitzinho o Falido do Dc💸#8963 ❤️```";
  if (!message.channel.nsfw) {
      message.react('❤️');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 50000 })
      })
      
  }

        async function work() {
        let owo = (await neko.nsfw.blowjob());

        const blowjob = new Discord.MessageEmbed()
        .setTitle("Blowjob")
        .setImage(owo.url)
        .setColor(`#FF0000`)
        .setURL(owo.url);
        message.channel.send(blowjob);

}

      work();
}
                };