const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, PermissionsBitField } = require("discord.js");

module.exports = {
    name: "announce",
    category: "Information",
    aliases: ["anno", "aa"],
    description: "to announce",
    args: false,
    usage: "announce #channel your message",
    userPerms: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
      
    if (!message.member.permissions.has(PermissionsBitField.resolve('Administrator'))) return message.channel.send("<:x_cross:1239384581921050726> You don't have premmsions to do that!");
      

    let inline = true;
    let sayChannel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!sayChannel)
      return message.reply(
        `<:x_cross:1239384581921050726> | ${message.author} mention a channel First`
      );
    let sayMsg = args
      .slice(1)
      .join(" ")
      .split(" | ");

    //if (!sayMsg[1]) sayMsg[1] == "#39d822";
    if (!sayMsg)
      return message.reply(
        `<:x_tick:1239384584315994153> | Say some message to announce`
      );
  
    
    let role = message.author.highestRole;
    let embed = new EmbedBuilder()
      .setColor("#2f3136")
      .setDescription(sayMsg[0]);

    message.delete();
    message.channel
      .send(
        `  | successfully announced your message to ${sayChannel}`
      )
      .then(m => m.delete({ timeout: 20000*50 }));

    sayChannel.send({embeds: [embed]}).catch(console.error);
  }
};
