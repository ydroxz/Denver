const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author},  <a:sino:809882202866319442> | Escreva a sugestão para meus developers após o comando! Mas voçe so pode executar esse comando em: https://discord.gg/4DexGyX4Mr`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, forneça uma sugestão de no máximo 1000 caracteres.`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "816388890998210560");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("GRAY")
    .addField("<a:seta:814240168193687562> Autor:", message.author)
    .addField("<:enviar:815371488302858270> Sugestão:", content)
    .setFooter("ID do Autor: " + message.author.id)
  );
  await message.channel.send(`${message.author} <a:sino:809882202866319442> | A mensagem foi enviada com sucesso! Obrigado!`);

  const emojis = ["<a:certinho2:816482021710364713>", "<a:error3:818556346852573235>"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}