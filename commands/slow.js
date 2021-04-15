const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    if (![`698880198510248006`].includes(message.author.id))
    return message.reply(
      " (<a:atencao:809880343716692028>) | **Apenas** `!✨Pitzinho o Falido do Dc💸#8963` **pode usar esse comando!**"
    );

    if (!args[0]) {
      return await message.channel.send(`<a:nao:809880719814819880> **|** ${message.author}Não se esqueca de definir o tempo! efian o tempo em **segundos**!`);

    message.channel.setRateLimitPerUser(args[0])
    message.reply(`<a:sino:809882202866319442> | O tempo do __Slowmode__ desse chat foi alterado com Sucesso para **${args[0]}** Segundos!`)
};

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`<a:nao:809880719814819880> | Você não tem permissão para utilizar este Comando!`);
    message.channel.setRateLimitPerUser(args[0])
    message.reply(`<a:sino:809882202866319442> | O tempo do __Slowmode__ foi alterado com Sucesso para **${args[0]}** Segundos!`)
}

exports.help = {
    name: 'slowmode',
    aliases: ['slow']
}