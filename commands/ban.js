const Discord = require("discord.js");
const config = require("../config.json");
exports.run = (client, message, args) => {
    // se membro não tem permissão de bani membros, retorna com a mensagem.
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("<a:nao:809880719814819880> | Você é fraco, e não pode usar esse comando!");
    let userBan = message.mentions.users.first() || client.users.cache.get(args[0]);
    let reasonBan = args.slice(1).join(" ");
    const embedSintaxe = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL())
    .setColor("BLUE")
    .setDescription(`<:setasazuis:809882374624116827> Para executar um Ban, utilize: \`.ban {Usuário} {Motivo}.\``);
    if (!userBan) return message.channel.send(embedSintaxe);
    if (!reasonBan) return message.channel.send(embedSintaxe);
    if (message.guild.members.cache.get(userBan.id).hasPermission("BAN_MEMBERS")) return message.reply("<a:nao:809880719814819880> Eu não posso `Banir` este membro!")

    const embedConfirm = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURl)
    .setDescription(`Você realmente deseja Banir \`${userBan.tag}\`?\n\Motivo: \`${reasonBan}\``)
    .setColor("GREEN");
    message.channel.send(embedConfirm).then(msg => {
        msg.react('✅');
        msg.react('❌');

        let filter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
        let collectorV = msg.createReactionCollector(filter, {max: 1});
        collectorV.on('collect', async function() {
            const embedR = new Discord.MessageEmbed()
            .setAuthor(`Relátorio do Banimento!`, message.author.avatarURL)
            .setDescription(`<:setapreta:809882444094111765> Autor do Ban: \`${message.author.tag}\`\n<:setapreta:809882444094111765> Motivo do Ban: \`${reasonBan}\``)
            .setColor("RED");
            msg.edit(embedR)
            await userBan.send(embedR).catch(e => console.log(`Ocorreu um erro no ban de ${userBan.tag} por sua DM estar privada.`))
            message.guild.members.cache.get(userBan.id).ban();
        });

        let filter2 = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;
        let collector2 = msg.createReactionCollector(filter2, {max: 1});
        collector2.on('collect', async function() {
            msg.delete()
            let embedNo = new Discord.MessageEmbed()
            .setDescription(`<a:atencao:809880343716692028> O user não foi banido.`)
            .setColor("RED");
            message.channel.send(embedNo)
        });
    });

};