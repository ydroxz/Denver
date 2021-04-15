const { MessageEmbed } = require("discord.js");
const math = require("mathjs");
const Color = `RANDOM`;

module.exports = {
  name: "math",
  category: "fun",
  run: async (client, message, args) => {
    try {
      if (!args[0]) return message.reply(":x: **|** Me informe uma conta para eu calcular!");

      const embed = new MessageEmbed()
        .setColor(`BLUE`)
        .setTitle(`:1234: Resultado:`)
        .setDescription(math.evaluate(args.join(" ")))

      message.channel.send(`${message.author}`,embed);
    } catch (error) {
      message.reply(`<:error:814232359750336532> **|** Desculpa mas eu não entendi sua conta, acho que to passando muito tempo no discord em vez de estudar! Me desculpe pela minha burrice..`).then(() => console.log(error));
    }
  }
};