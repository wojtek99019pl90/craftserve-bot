const Discord = require('discord.js');
const messages = require(`../locale/messages_pl.json`);

module.exports.command = ["swiat"];

module.exports.callback = function(args, message) {
    const embed = new Discord.MessageEmbed()
        .setTitle("Jak wgrać własną mapę")
        .setDescription('By wgrać mapę na serwer należy jej folder uploadować do głównego katalogu serwera za pomocą programu FTP.\nNastępnie proszę przejść do panelu ustawień serwera do zakładki `Serwer` i tam w opcji `Nazwa świata` proszę wybrać nowo wgrany świat.\nTeraz wystarczy uruchomić serwer i na niego wejść.\n\nInformacje o tym jak wgrywać pliki na serwer za pomocą programu FTP znajdują się pod poleceniem **!ftp**')
        .setColor(0x224d21)
        .setFooter(`Komenda !swiat | ${message.author.tag}`)
        .setTimestamp()
            message.channel.send(embed);
}