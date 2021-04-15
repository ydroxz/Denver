const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "clima",
    description: "Checa o clima de um local",

    async run (client, message, args){

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Coloque um local!')

        if(result === undefined || result.length === 0) return message.channel.send(`${message.author}   **Localização Invalida!**`);

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Local: ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Fuso horário', `UTC${location.timezone}`, true)
        .addField('Graus:', 'Celsius', true)
        .addField('Temperatura:', `${current.temperature}°c`, true)
        .addField('Vento:', current.winddisplay, true)
        .addField('Sensibilidade:', `${current.feelslike}°c`, true)
        .addField('Umidade:', `${current.humidity}%`, true)


        message.channel.send(`${message.author}`,weatherinfo)
        })        
    }
}