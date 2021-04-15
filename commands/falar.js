const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (!("698880198510248006").includes(message.author.id))
    return message.reply(
      "(<a:atencao:809880343716692028>) | **Apenas** `!✨Pitzinho o Falido do Dc💸#8963` **meu Criador pode usar esse comando!**"
    );

  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};