
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "meeting",
  aliases: ["amongusmeeting", "mtg"],
  category: "Image",
  description: "Return A Among Us Meeting Image!",
  usage: "Meeting <Text>",
  run: async (client, message, args) => {
    
    const Value = args.join(" ");

    if (!Value || Value.length > 150) return message.channel.send("<a:sino:809882202866319442> |  Não se esqueça de colocar a frase!"); 

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Botão de Emergencia (" + message.author.username + ")")
    .setImage(encodeURI(`https://vacefron.nl/api/emergencymeeting?text=${Value}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
