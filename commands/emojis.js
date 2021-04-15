const { RichEmbed } = require("discord.js");

module.exports = {
  name: "emoji",
  category: "info",
  description: "show all emojis of server",
  run: async (client, message, args) => {
    message.delete();
if (![`698880198510248006`].includes(message.author.id))
    return message.reply(
      " (<a:atencao:809880343716692028>) | **Apenas** `!✨Pitzinho o Falido do Dc💸#8963` **pode usar esse comando!**"
    );

  
    try {
        let notAnimated = [];
        let animated = [];
        message.guild.emojis.cache.forEach(async emoji => {
          if (emoji.animated) animated.push(emoji.toString());
          else notAnimated.push(emoji.toString());
        });
        if (!animated[0]) animated = ['Nenhum!'];
        if (!notAnimated[0]) notAnimated = ['Nenhum!'];
        message.channel.send('<a:loading2:809880487392444487> **__Carregando todos emojis Animados:__**\n' + animated.join(' ') + '\n<a:loading2:809880487392444487> **__Carregando todos emojis comuns:__**\n' + notAnimated.join(' '), {split:true});
      } catch (err) {
        message.channel.send('Houve um erro!\n' + err).catch();
      }
      
}
};