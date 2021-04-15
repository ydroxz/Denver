const express = require('express');
const app = express();
app.get('/', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(
		`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
	);
	response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require('discord.js'); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require('./config.json'); //Pegando o prefixo do bot para respostas de comandos
const usedCommand = new Set();

client.on('message', message => {
	if (message.author.bot) return;
	if (message.channel.type == 'dm') return;
	if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase()))
		return;
	if (
		message.content.startsWith(`<@!${client.user.id}>`) ||
		message.content.startsWith(`<@${client.user.id}>`)
	)
		return;

	const args = message.content
		.trim()
		.slice(config.prefix.length)
		.split(/ +/g);
	const command = args.shift().toLowerCase();

	try {
		const commandFile = require(`./commands/${command}.js`);
		commandFile.run(client, message, args);
	} catch (err) {
		console.error('Erro:' + err);
	}
});

client.on("guildCreate", guild => {
    console.log(`eu entrei em: ${guild.name} (id: ${guild.id}). esse sv tem ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
    console.log(`Eu fui removido: ${guild.name} (id: ${guild.id})`);
});

client.on("guildDelete", guild => {
 
  const { MessageEmbed } = require("discord.js");
 
  const ID = "815655136432750662";
 
  const channel = client.channels.cache.get(ID);
 
  const sowner = guild.owner.user;
 
  if (!channel) return;
 
  const embed = new MessageEmbed()
 
    .setTitle("**Eu sai de um server! :(**")
 
    .addField(`**NOME DO SERVER**`, `\`\`\`${guild.name}\`\`\``)
 
    .addField(`**SERVER ID**`, `\`\`\`${guild.id}\`\`\``)
 
    .addField(`**DONO DO SERVER**`, `\`\`\`${sowner.tag}\`\`\``)
 
    .addField(`**ID DO DONO**`, `\`\`\`${sowner.id}\`\`\``)
 
    .addField(`**CRIADO EM**`, `\`\`\`${guild.createdAt}\`\`\``)
 
    .addField(`**MEMBROS**`, `\`\`\`${guild.memberCount}\`\`\``)
 
    .setTimestamp()
 
    .setColor("RED")
 
    .setFooter(`Quantidade de servers - ${client.guilds.cache.size}`);
 
  channel.send(embed);
 
});

client.on("guildCreate", guild => {
 
  const { MessageEmbed } = require("discord.js");
 
  const ID = "815655136432750662";
 
  const channel = client.channels.cache.get(ID);
 
  const sowner = guild.owner.user;
 
  if (!channel) return;
 
  const embed = new MessageEmbed()
 
    .setTitle("**Eu entrei em um novo server!**")
 
    .addField(`**NOME DO SERVER**`, `\`\`\`${guild.name}\`\`\``)
 
    .addField(`**SERVER ID**`, `\`\`\`${guild.id}\`\`\``)
 
    .addField(`**DONO DO SERVER**`, `\`\`\`${sowner.tag}\`\`\``)
 
    .addField(`**ID DO DONO**`, `\`\`\`${sowner.id}\`\`\``)
 
    .addField(`**CRIADO EM**`, `\`\`\`${guild.createdAt}\`\`\``)
 
    .addField(`**MEMBROS**`, `\`\`\`${guild.memberCount}\`\`\``)
 
    .setTimestamp()
 
    .setColor("32CD32")
 
    .setFooter(`Quantidade de servers - ${client.guilds.cache.size}`);
 
  channel.send(embed);
 
});

client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("809525098934697987");
  let channel = await client.channels.cache.get("816369633224556554");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "party");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você!");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#f8f8f9")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Bem vindo!`)
      .setImage("https://cdn.discordapp.com/attachments/816372926692851732/818598891686723604/0001-17999290812_20210308_183918_0000.png")
      .setDescription(`**${member.user}**,Seja muito Bem vindo ao meu  servidor de suporte, fique a vontade para conversar, tirar dúvidas, e se divertir aqui na  **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros!**, Obrigado e Divirta-se! <a:gato:815370711618158623>`)
      .setFooter("Bem-Vindo!")
      .setTimestamp();

    channel.send(`${member.user}`,embed);
  }
});

client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("806708572661612565");
  let channel = await client.channels.cache.get("806708573224697888");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "w_carrinho2");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você!");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Bem vindo! ${emoji}`)
      .setImage("https://media.giphy.com/media/wEh8uHRiStJug/giphy.gif")
      .setDescription(`**${member.user}**,Seja muito Bem vindo a web-familia: **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros na familia**, E voçe veio para completar mais ainda essa familia!`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Bem-Vindo!")
      .setTimestamp();

    channel.send(`${member.user}`,embed);
  }
});

client.on("guildMemberRemove", async (member) => { 

  let guild = await client.guilds.cache.get("806708572661612565");
  let channel = await client.channels.cache.get("806708573224697888");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "pepe_sadsuco");
  if (guild != member.guild) {
    return console.log("Algum user saiu do servidor. Mas não é nesse, então tá tudo bem :)");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Vá embora com deus! ${emoji}`)
      .setImage("https://media.giphy.com/media/ehU0Zn7nYLWRk36nN5/giphy.gif")
      .setDescription(`**${member.user.username}**,infelizmente saiu do servidor! :broken_heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Adeus :(")
      .setTimestamp();

    channel.send(embed);
  }
});

client.on('ready', () => {
	let activities = [`😴 Estou Acordado!`,`💻 Prefixo ( . )`,
  `🆘 Precisa de ajuda? Entre em meu server de suporte, use: (.suporte) para receber o invite!`,`💙 Estou com ${client.guilds.cache.size} Servidores me utilizando!`,`💙 Tenho ${client.users.cache.size} users me utilizando com muito orgulho!`,`😄+❤️=🥰 Obrigado Por me Utilizar! [Cluster: 🧪1]`,`😋 Minha comida preferida é Strogonoff`],
		i = 0;
	setInterval(
		() =>
			client.user.setActivity(`${activities[i++ % activities.length]}`, {
				type: 'PLAYING'
			}),
		100 * 200
	);
	client.user.setStatus('Online').catch(console.error);
	console.log(`Estou Online no ${client.user.tag} e com ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servers e com ${client.users.cache.size} users!`);
});

client.login(`Nzk2MDM0MTA3Mjg4NzE1Mjk0.X_SCiA.CcemmT9wju9HbFSKqr-LsNC0q3E`); //Ligando o Bot caso ele consiga acessar o token
