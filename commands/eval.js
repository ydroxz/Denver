const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
    if (![`698880198510248006`].includes(message.author.id))
    return message.reply(
      " (<a:atencao:809880343716692028>) | **Apenas** `!✨Pitzinho o Falido do Dc💸#8963` **pode usar esse comando!**"
    );
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.MessageEmbed()
        .setColor('GRAY')
        .addField(':inbox_tray: Código:', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Resultado:', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
};
// done