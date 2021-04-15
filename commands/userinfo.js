const { MessageEmbed } = require("discord.js")
const moment = require("moment")

module.exports = {
  name: "userinfo",
  aliases: ["whois", "user"],
  usage: "userinfo <MENTION>",
  description: "Get advance stats of given person or yourself",
  run: async (client, message, args) => {


    let user;

    if (!args[0]) {
      user = message.member;
    } else {


   


      user = message.mentions.members.first() || await message.guild.members.fetch(args[0]).catch(err => { return message.channel.send(":x: **|** Não achei o usuario! ") })
    }

    if (!user) {
      return message.channel.send(":x: **|** Não achei o usuario!")
    }


    //NOW BADGES
    let badges = await user.user.flags
    badges = await badges ? badges.toArray() : ["None"]

    let newbadges = [];
    badges.forEach(m => {
      newbadges.push(m.replace("_", " "))
    })

    let embed = new MessageEmbed()
      .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))

      //EMBED COLOR BASED ON member
      embed.setColor(user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor)

      //OTHER STUFF 
      embed.setAuthor(user.user.tag, user.user.displayAvatarURL({ dynamic: true }))

      //CHECK IF USER HAVE NICKNAME
      if (user.nickname !== null) embed.addField("<:discord:815368911331262495> | Nick:", user.nickname)
      embed.addField("<a:tempo:815369736698986507> | Entrou em:", moment(user.joinedAt).format("DD/MM/YYYY"))
        .addField("<:sair:815371088976281650> | Conta criada em:", moment(user.user.createdAt).format("DD/MM/YYYY"))
        .addField("<:gear2:815371255137566790> | Informacões comuns:", `<:rg:815367766877667398> | ID: \`${user.user.id}\`\n<:mod:814230905526288394> | Discriminador: __${user.user.discriminator}__`)
        .setFooter(`Executado por: ${message.author.username}`)



      return message.channel.send(`${message.author}`,embed).catch(err => {
        return message.channel.send("Error : " + err)
      })



    }



  }