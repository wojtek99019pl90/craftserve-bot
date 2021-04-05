const Discord = require('discord.js');
const messages = require(`../locale/messages_pl.json`);

module.exports.command = ["lbperm"];

module.exports.callback = function(args, message) {
    const embed = new Discord.MessageEmbed()
        .setTitle("Jak nadać uprawnienia do LogBlocka?")
        .setDescription('Jeśli to czytasz to zapewne chcesz dać graczom dostęp do LogBlocka. Aby to zrobić upewnij się, że masz zainstalowany na serwerze plugin LuckPerms i wpisz te dwa polecenia w konsoli serwera `lp group default permission set logblock.lookup` oraz `lp group default permission set logblock.tools.tool`\nOd teraz każdy grający na serwerze będzie miał dostęp do LogBlocka!\n\nWięcej informacji dotyczących konfiguracji LogBlocka znajdziesz [pod tym linkiem](https://spigot.pl/forum/thread/6-jak-poprawnie-zainstalowa%C4%87-plugin-logblock-1-14-4-1-15-2-1-16-2-na-hostingu-craf/)')
        .setColor(0x224d21)
        .setFooter(`Komenda !lbperm | ${message.author.tag}`)
        .setTimestamp()
            message.channel.send(embed);
}