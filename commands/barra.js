const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let erroEmbed = new Discord.MessageEmbed()
        .setColor("GRAY")
        .setTitle(`${message.author.tag}`)
        .setDescription(`<a:nao:809880719814819880> **|** Me desculpe mas esse comando e **Exclusivo** da **Equipe de Eventos**!`);

  if (!("698880198510248006,698880198510248006").includes(message.author.id))
    return message.channel.send(erroEmbed);


var list = [
  'https://media.discordapp.net/attachments/764689345185185812/764691156864335912/image0-42.gif',
  'https://media.discordapp.net/attachments/723162811546468423/738607623045120110/barrinha_coracao.gif',
  'https://media.discordapp.net/attachments/723162811546468423/752998905318211644/image2-2.gif',
  'https://media.discordapp.net/attachments/723162811546468423/751404120031625356/ezgif.com-gif-maker.gif',
  'https://media.discordapp.net/attachments/723162811546468423/751405363282313246/image0-4.gif',
  'https://media.discordapp.net/attachments/764689345185185812/766727027788349470/Stars.gif',
  'https://media.discordapp.net/attachments/723162811546468423/738607901660282950/barra7.gif',
  'https://media.discordapp.net/attachments/756136301832437771/770282324393984063/linha_discord_15.gif',
  'https://media.discordapp.net/attachments/756070070349987900/771689576309063720/a9cc6f4868d47a3cf3dd91d3e52b5b7c7612faa0_hq.gif',
  'https://cdn.discordapp.com/attachments/764678743255941150/780547964179316766/image0.gif',
  'https://media.discordapp.net/attachments/779152827309359114/796831307300470814/image0.gif',
  'https://media.discordapp.net/attachments/779152827309359114/787739996185821214/image0.gif',
  'https://media.discordapp.net/attachments/773993347474784297/774026234707443772/image0.gif',
  'https://media.discordapp.net/attachments/773993347474784297/774026418148868117/image3-1.gif',
  'https://media.discordapp.net/attachments/753571285459796038/753581863142162492/20200723_160902-1.gif',
  'https://media.discordapp.net/attachments/753571285459796038/753582644066910208/20200716_200618.gif',
  'https://cdn.discordapp.com/attachments/799378144851001404/800746498790522910/BARRINHAS_DIVISORIAS_87.gif',
  'https://media.discordapp.net/attachments/732337957876269098/797204607537119232/cc05d6ff1bbe73124e1decfec2c783d9fb264a4b_hq.gif',
  'https://cdn.discordapp.com/attachments/799378144851001404/799668239583412224/image0-2.png',
  'https://cdn.discordapp.com/attachments/799378144851001404/799492484139843614/stardivider.gif',
  'https://cdn.discordapp.com/attachments/799378144851001404/799411048343404544/animated-dividing-line-image-0111.gif',
  'https://media.discordapp.net/attachments/732337957876269098/797282049844707358/image6.gif',
  'https://cdn.discordapp.com/attachments/799378144851001404/799400326548553728/barrinha.bengala.doce.gif',
  'https://cdn.discordapp.com/attachments/689892940289671186/725407273723363328/04-25-42-3f1d79cc9e5e7642eed499de0d17ad4fac794489r1-240-34_hq.gif',
  'https://cdn.discordapp.com/attachments/799378144851001404/799400648205795379/barrinha_evento.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Barrinha')
        .setColor('GRAY')
        .setDescription(`${message.author} acaba de soltar uma barrinha!`)
        .setImage(rand)
        .setTimestamp()
  await message.channel.send(embed);
}