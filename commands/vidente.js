var fortunes = [
    "Sim",
    "Não",
    "Talvez",
    "Eu não sei, tente de novo..",
    "Quem sabe?",
    "Isso é um mistério..",
    "Não posso te contar..",
    "Meu informante disse que não..",
    "Provavelmente!",
    "Me pergunte mais tarde!",
    "Claro que não!",
    "Não conte comigo para isso!",
    "Dúvido muito..",
    "Será?"

  ];
  
  exports.run = (bot, msg, params) => {
  
    if(!params[0]){
      return msg.channel.send("<a:errado:809880083299827782>" + "| Por favor insira uma Pergunta!")
    }
    if (params[0]) msg.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
    else msg.channel.send(":x: " + "| Não foi possível ler sua pergunta! :(");
  
  };
  
  
  exports.help = {
    name : "Vidente",
    description: "Te da resposta para suas perguntas!",
    usage: "Vidente [pergunta]"
  };