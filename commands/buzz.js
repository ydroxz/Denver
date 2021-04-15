module.exports = {
  config: {
    nome: 'funLaranjo',                                                   
    aliases: ['laranjo', 'laranjo', 'laranja.'],                               
    descricao: 'Fun module.',     
    utilizacao: '',                                               
    cooldown: 3                                                   
  },
  run: async (client, message, args) => {
  const jimp = require("jimp");
let img = jimp.read("https://cdn.discordapp.com/attachments/809525099421630536/810957257625960508/buzlightear.jpg")
        if (!args[0]) return message.reply("<a:sino:809882202866319442> | **Indique o que o Buzz irá falar.**")
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                image.resize(685, 494)
                image.print(font, 20, 30, args.join(" "), 630)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({files: [{ attachment: i, name: "buzz.png"}]})
                })
            })
        })
    }
    }