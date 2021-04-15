const usedCommand = new Set();

module.exports.run = async (bot, message, args) => {
  if(usedCommand.has(message.author.id)){
    message.reply("Voce deve esperar um pouco para usar mais comandos!")
  } else {
    message.reply("Comando executado!")


    usedCommand.add(message.author.id);
    setTimeout(() => {
      usedCommand.delete(message.author.id);
    }, 10000);
  }
}