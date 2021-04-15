var fortunes = [
    `> Qual é a mulher que sempre aparece em público machucada? Emma Thomas.`,
    `> Sabe por quê eu não gosto de piada de anão? Porque é baixaria.`,
    `> Pq é importante ter uma cobra no navio? Porque quando alguém se afoga ela dá o bote.`,
    `> Por que o louco, quando joga futebol, só consegue marcar gol com os pés? Por que ele não bate bem de cabeça.`,
    `> Sabe porque o bombeiro não anda? Porque ele so-corre`,
    `> qual cidade é dividida em 4? FOURtaleza`,
    `> Qual a cidade que não tem táxi?  Uberlândia`,
    `> Sabe por que a formiga só tem quatro amigas? Por que se tivessem cinco, seria uma fivemiga`,
    `> Como um míope sobe a escada? Com óculos degrau`,
    `> O que os pagodeiros fazem no Céu? Eles cantam PaGod`,
    `> Qual o contrário de papelada? Pá vestida.`,
    `> Sabe por que um homem estava com a orelha encostada na pedra? Porque ele estava ouvindo arrocha.`,
    `> Como o padre bateu o carro? Dando uma rezinha.`,
    `> Quando o Papai Noel morrer, ele não estará mais em trenós.`,
    `> Sabe qual é o legume que ninguém consegue domesticar? O Seu Vagem.`,
    `> O que a Xuxa foi fazer no bar? Beber caSasha.`,
    `> Você coloca gasolina no seu carro? O Vin, Diesel.`,
    `> Eu prefiro vinho doce. A Débora, Secco.`,
    `> Eu odeio academia. Mas o Tim Maia.`,
    `> Eu não esperei, mas o Jack Sparrow.`

  ];
  
  exports.run = (bot, msg, params) => {
  
     msg.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
  
  };
  
  
  exports.help = {
    name : "Vidente",
    description: "Te da resposta para suas perguntas!",
    usage: "Vidente [pergunta]"
  };