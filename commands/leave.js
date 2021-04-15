"use strict";

exports.run = async (client, message, args) => {
  if (![`698880198510248006`].includes(message.author.id))
    return message.reply(
      " (<a:atencao:809880343716692028>) | **Apenas** `!✨Pitzinho o Falido do Dc💸#8963` **pode usar esse comando!**"
    );

    //if (!message.guild.available) return client.logger.info(`Guild "${message.guild.name}" (${message.guild.id}) est indisponible.`);
    message.reply("Você quer que eu saia desse server? **(S/N)**");
    return message.channel.awaitMessages(m => m.author.id === message.author.id, {
        "errors": ["time"],
        "max": 1,
        time: 20000
    }).then(resp => {
        if (!resp) return message.channel.send("Fin du temps imparti.");
        resp = resp.array()[0];
        const validAnswers = ["S", "N", "s", "n"];
        if (validAnswers.includes(resp.content)) {
            if (resp.content === "N" || resp.content === "n") {
                return message.reply(":x: Comando cancelado!");
            } else if (resp.content === "S" || resp.content === "s") {
                message.channel.send("Bom parece que as coisas não ocorreram como esperado! Por isso sáirei desse server! Bye ;(");
                message.guild.leave()
                    .catch(err => {
                        return message.channel.send(`:x: ocorreu um erro!`);
                    });
            }
        }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["leaveguild"],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "leaveserver",
  category: "Owner",
  description: "Quitte le serveur actuel.",
  usage: "leaveserver"
};