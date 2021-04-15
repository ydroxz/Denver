const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports={
 name: 'giveway',
    category: 'fun',
    description: 'Giveaway command',
    run: async(bot,message,args)=>{
      if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "<a:sino:809882202866319442> | Você é fraco,e precisa da permissão de `Gerenciar-Mensagens` para fazer um sorteio!"
    );
  if (!args[0]) return message.reply('> ❌ | Use:   `(.sorteio <tempo> <premio>)`');
    if ( !args[0].endsWith("h") && !args[0].endsWith("m") && !args[0].endsWith("s")) return message.reply('Voçê deve usar m/h/s no tempo do sorteio!');
    const gift = args.slice(1).join(" ");
    if (!gift) return message.channel.send('> ❌ | Use:   `(.sorteio <tempo> <premio>)`');
    const giftembed = new MessageEmbed()
      .setTitle(`**${gift}**`)
      .setDescription(`Reaja com: 🎁 para participar!`)
     .addField(`Tempo:`, `${(args[0])}`, true)
    .addField(`Feito por:`, `${message.author}`, true)
      .setColor("RANDOM");
    const g = await message.channel.send('<a:party:815370037509619732> **|** SORTEIO',giftembed);
    g.react("🎁");
    setTimeout(() => {
      if (g.reactions.cache.get("🎁").count <= 1) {
          const cancel = new MessageEmbed()
                .setDescription(`<:erro:815368333847166998> **|** Não tivemos participantes, sorteio cancelado!`)
        return g.edit(cancel);
      }

 const won = g.reactions.cache .get("🎁").users.cache.filter((not) => !not.bot).random();
      message.channel.send(`🎉 | Parabéns **${won}** , Voçê ganhou: **${gift}**!`);
      won.send(`🎉 | Parabéns **${won}** voçe ganhou: **${gift}** no server: ${message.guild.name} `)
    }, ms(args[0]));
  },
};