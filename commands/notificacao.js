const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!("809525098934697987").includes(message.guild.id))
    return message.reply(
      "<a:nao:809880719814819880> **|** Me desculpe mas esse comando e **exlusivo** de meu servidor de __Suporte__! (Para receber o link do meu server de suporte use: **.suporte**!)"
    );
  var string = args.join(" ");
  var colors = [
    {
      name: "Ak-47 e o porte do homem",
      id: "814633197433651241"
    },
  ];
  var names = colors.map(function(item) {
    return item["name"].toLowerCase();
  });
  var ids = colors.map(function(item) {
    return item["id"];
  });

  var role = message.guild.roles.cache.find(r => r.name.toLowerCase() === string.toLowerCase());

  if (!args[0]) {
      return await message.channel.send(`<a:gato:815370711618158623> ${message.author} <:setabranca:809880578542403594> Para ativar suas notificações use: **.notificação on** ou para desativar use: **.notificação off**
       __Ative as notificações e fique por dentro de tudo!__ <:w_amor:815366318194032651>`);
  } else if (args[0].toLowerCase()  === "off") {
      await message.member.roles.remove(`816639533818314752`);
      return await message.channel.send(`<a:okay:809880011699257345> **|** ${message.author}, Notificações desativadas com sucesso!`);
  } else if (args[0].toLowerCase()  === "on") {
      await message.member.roles.add(`816639533818314752`);
      return await message.channel.send(`<a:certinho2:816482021710364713> **|** ${message.author}, Suas notificações foram ativadas com sucessso!`);
  } else if (!names.includes(string.toLowerCase()) || !role) {
    return message.channel.send(
      `<a:nao:809880719814819880> **|** ${message.author}, Me desculpe mas esse comando foi usado incorretamente!
      <:setaazul2:814230070503800842> Use: **on** após o comando para ativar as notificações!
      <:setaazul2:814230070503800842>  Use: **off** após o comando para desativar as notificações!`
    );
  } else {
    try {
      await message.member.roles.remove(ids);
      await message.member.roles.add(role);
      return await message.channel.send(`<a:parabens:814643323394064415> ${message.author}, Parabéns você adquiriu a tag: **${string}**`);
    } catch (err) {
      console.error("Erro: " + err);
    }
  }
};