const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: ["dev", "abt"],
    description: "See information about Ather.",
    args: false,
    usage: "",
    userPerms: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     
    const row = new ActionRowBuilder()
			.addComponents(
     new ButtonBuilder()
      .setLabel("Add me")
      .setEmoji('1056925359750262824')
      .setStyle(ButtonStyle.Link)
.setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`),
        
    new ButtonBuilder()
          .setLabel("Support")
          .setStyle(ButtonStyle.Link)
          .setEmoji('1056925477849284608')
          .setURL("https://discord.com/invite/4t2r9WB6qZ")
      )

      const mainPage = new EmbedBuilder()
            .setAuthor({ name: 'Ather About Panel', iconURL:client.user.displayAvatarURL()})
                  .setThumbnail(message.guild.iconURL())
            .setDescription(`I'm just a Discord bot; that's not your bussiness.`)
        .setColor(client.embedColor)
        .setFooter({text: `Requested by ` + message.author.username , iconURL: message.author.displayAvatarURL({ dynamic: true })})
            .addFields([{ name: '**__Developers__**', value: '**[Fox Davoid](https://discord.com/users/927049723599265822)**', inline: true },
                        
  { name: '**__Owners__**', value: '**[Fox Davoid](https://discord.com/users/927049723599265822)**\n**[Dakku](https://discord.com/users/632702127680258059)**',  inline: true },              
            ]);
        return message.reply({embeds: [mainPage], components: [row]});
    }
}
