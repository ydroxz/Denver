exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
if (![`698880198510248006`].includes(message.author.id))
    return message.reply(
      " (<a:atencao:809880343716692028>) | **Apenas** `✨PIT💸#8963` **pode usar esse comando!**"
  );

	message.channel.send(`> <a:loading2:809880487392444487> **|** ${message.author} Ok! Entrei com processo de imobilização total! Ficarei totalmente imobilizado até que !✨Pitzinho o Falido do Dc💸#8963 me ligue novamente!
  <a:certo:809880138438410301> __Imobilizado com sucesso!__`)
		.then(() => {
			console.log(`Bot parado por ${message.author.tag} (${message.author.id})`);
			process.exit(0);
		});
}