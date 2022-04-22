const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {

    name: "Antilink",
    author: "ferinha",

    run: async(client, message, args) => {

        if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`Você não possui a permissão de \`Gerenciar o Servidor\`.`);

        if (!args[0] || args[0] !== "on" && args[0] !== "off")  message.reply(`Ative o sistema com \`G!antilink on <a:verificado:908562051927007242>\`.\nDesative o sistema com \`G!antilink off <a:Negado:913144493006544966>\`.`);

        if (args[0] === "on") {

            db.set(`antilink_${message.guild.id}`, "on");
            message.reply(`<a:verificado:908562051927007242> O sistema foi ativado com sucesso!`);

        };

        if (args[0] === "off") {

            db.set(`antilink_${message.guild.id}`, "off");
            message.reply(`<a:Negado:913144493006544966> O sistema foi desativado com sucesso!`);

        };

    }
}
