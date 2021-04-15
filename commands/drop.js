const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
if (![`698880198510248006`].includes(message.author.id))
    return message.reply(
      " (<a:atencao:809880343716692028>) | **Apenas** `!✨Pitzinho o Falido do Dc💸#8963` **pode usar esse comando!**"
    );

    const embed = new Discord.MessageEmbed()
    .setColor('WHITE')
    .setDescription(`**Olha Um Presente Personalizado Apareceu!**`)
    .setTimestamp()
    .setImage(`https://media.giphy.com/media/3oz8xBkRsgPTnbK1GM/giphy.gif`)
    .setFooter(`Drop Personalizado!`)
    .addFields(
        {
            name: '⠀⠀⠀⠀⠀',
            value: "Quem digitar primeiro a palavra: `Abrir` ganha: Call e tag vip exclusivas aqui no server. ",
        },
    )
    message.channel.send(embed);
}