const Discord = require("discord.js");
const { MessageSelectMenu, MessageActionRow } = require("discord.js");

module.exports = {

    name: "ping",
    alises: [""],
    author: "",

    run: async(client, interaction, args) => {

		const st = process.hrtime()   
   await client.userdb.findOne({
    userid: interaction.member.id,
  });         
   const sto = process.hrtime(st)
      
   const pingDB = Math.round((sto[0] * 1e9 + sto[1]) / 1e6);

        let criado_por_pereira1 = new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`
> <:PepePing:960207591269630002> Meu ping atual é de: \`${client.ws.ping}ms\`
> <:Data:960207249916170240> A velocidade da minha Mongodb é de: \`${pingDB}ms\`


`)
        .setFooter("Para atualizar o ping, selecione no menu abaixo.");

        let painel = new MessageActionRow().addComponents( new MessageSelectMenu()
        .setCustomId('menu')
        .setPlaceholder('Selecione abaixo para atualizar.')
        .addOptions([{
                    label: 'Atualizar ping',
                    description: 'Atualize o ping atual do bot.',
                    emoji: '<a:ping:909996412660502608>',
                    value: 'pingmenu',
                }
            ])

        );


        interaction.reply({ embeds: [criado_por_pereira1], components: [painel], ephemeral: true }).then(interaction => {

            const filtro = (interaction) => 
              interaction.isSelectMenu()
        
            const coletor = interaction.createMessageComponentCollector({
              filtro
            });
        
            coletor.on('collect', async (collected) => {

              let valor = collected.values[0]
              collected.deferUpdate()

        
        if (valor === 'pingmenu') {

            let criado_por_pereira2 = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                    .setDescription(`
> <:PepePing:960207591269630002> Meu ping atual é de: \`${client.ws.ping}ms\`
> <:Data:960207249916170240> A velocidade da minha Mongodb é de: \`${pingDB}ms\`


`)
            .setFooter("Última atualização do ping!")
            .setTimestamp()

            interaction.edit({ embeds: [criado_por_pereira2], components: [painel], ephemeral: true });

        };
        
        })

    })

}
}