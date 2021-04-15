module.exports.run = async (client, message, args) => {
  const m = await message.channel.send(' <a:loading2:809880487392444487> Calculando...');

  m.edit(`${message.author}\n<a:loading2:809880487392444487> | Latência do __Server__: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\n<a:loading:809879922193596426> | Latência da __API__: **${Math.round(
      client.ws.ping
    )}ms**`
  );
};