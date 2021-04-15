const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (![`698880198510248006`].includes(message.author.id))
    return message.reply(
      " (<a:atencao:809880343716692028>) | **Apenas** `!✨Pitzinho o Falido do Dc💸#8963` **pode usar esse comando!**"
    );
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 2 || deleteCount > 99)
    return message.reply(
      "<a:sino:809882202866319442> | Voçê pode excluir de **2** até **99 mensagens**!"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`(<a:atencao:809880343716692028>) O chat teve ${args[0]} Mensagems deletadas anonimamente!`).then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    );
};