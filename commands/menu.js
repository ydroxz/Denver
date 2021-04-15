const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
  let avatar = message.author.displayAvatarURL({format: 'png'});

    const embed = new Discord.MessageEmbed()
    .setColor('GRAY')
    .setDescription(`<a:exclamation:823612174013562922> **Menu de Comandos:**`)
    .setImage(`https://cdn.discordapp.com/attachments/811380499036504114/817173338467991592/0001-17808808655_20210304_201109_0000.jpg`)
    .setFooter(`Comando executado por: ${message.author.username}`, avatar)
    .addFields(
        {
            name: '> <a:a_bluestar:823688356240031756> | Interação [15]:',
            value: "`Olá`, `Cafuné`, `Chorar`, `Beijar`, `Abracar`, `Dancar`, `Bater`, `Chutar`, `Fuzilar`, `Explodir`, `Cachorro`, `Gato`, `Pato`, `Macaco`, `Cavalo`",
        },
        {
            name: '> <:info:823687490711060510> | Utilidades [14]:',
            value: "`Userinfo`, `Serverinfo`, `Calcular`, `Membros`, `Botinfo`, `Ping`, `Lembrete`, `Clima`, `Avatar`, `Invite`, `Fichatecnica`, `Embed`, `Limpar`, `Ban`",
        },
        {
            name: '> <:Games:823690669360283678> | Diversão [14]:',
            value: "`ship`, `piada`, `gay`, `sorteio`, `amongus`, `stonks`, `wasted`, `triggered`, `buzz`, `laranjo`, `primeiraspalavras`, `Dado`, `Jokempo`, `Vidente`",
        },
    )
    message.channel.send(`${message.author}`,embed);
}