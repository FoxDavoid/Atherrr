const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle} = require("discord.js");
const axios = require("axios");
const Discord = require("discord.js");
const moment = require("moment")
const bott = {
  "false" : "<:x_cross:1239384581921050726> No",
  "true" : "<:x_tick:1239384584315994153> Yes",
}
let flagg = {
      '': 'None',
      'Staff': 'Discord Staff',
      'Partner': 'Discord Partner',
      'BugHunterLevel1': 'Bug Hunter Level 1',
      'HypeSquad': 'HypeSquead',
      'BugHunterLevel2': 'Bug Hunter Level 2',
      'HypeSquadOnlineHouse3': 'HypeSquad Balance',
      'HypeSquadOnlineHouse2': 'HypeSquad Brilliance',
      'HypeSquadOnlineHouse1': 'HypeSquad Bravery',
      'PremiumEarlySupporter': 'Early Supporter',
      'VerifiedBot': 'Verified Bot',
      'VerifiedDeveloper': 'Verified Developer',
      'CertifiedModerator': 'Certified Moderator',
      'ActiveDeveloper': 'Active Developer',
}
const statuses = {}

module.exports = {
    name: "userinfo",
    category: "Information",
    aliases: ["ui", "whois"],
    description: "to know about user",
    args: false,
    usage: "<MENTION>",
    userPerms: [],
    owner: false,
    execute: async (message, args, client, prefix) => {

        
      const mention1 = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
      const filter = { owner: message.guild.ownerId === mention1.id };  
      
      
  // const Flags = flagg[mention1.user.flags.toArray().join("\n")];
const badges = mention1.user.flags
.toArray()
.map(flag => flagg[flag])
.filter((name) => name !== '');


if (mention1.avatar && mention1.avatar.startsWith('a_')) Flags.push(Badges['DiscordNitro']);
        
const permissions = {
            "Administrator": "Administrator",
            "ManageGuild": "Manage Server",
            "ManageRoles": "Manage Roles",
            "ManageChannels": "Manage Channels",
            "KickMembers": "Kick Members",
            "BanMembers": "Ban Members",
            "ManageNicknames": "Manage Nicknames",
            "ManageEmojis": "Manage Emojis",
            "ManageWebhooks": "Manage Webhooks",
            "ManageMessages": "Manage Messages",
            "MentionEveryone": "Mention Everyone",
  "ReadMessageHistory": "ReadMessageHistory",
  "MuteMembers": "MuteMembers",
  "DeafenMembers": "DeafenMembers",
  "MoveMembers": "MoveMembers",
  "ViewAuditLog": "ViewAuditLog"
}
   let acknowledgement;
    if (filter.owner) acknowledgement = 'Server Owner';
    if (mention1.permissions.has('Administrator') && !filter.owner) acknowledgement = 'Server Admin';
if (
      mention1.permissions.has(['ManageMessages', 'ManageNicknames', 'ReadMessageHistory', 'MuteMembers', 'DeafenMembers', 'MoveMembers', 'ViewAuditLog']) &&
      !mention1.permissions.has('Administrator') &&
      !filter.owner
    )
      acknowledgement = 'Moderator';
    if (
      mention1.permissions.has(['SendMessages']) &&
      !mention1.permissions.has(['ManageMessages', 'ManageNicknames', 'ReadMessageHistory', 'MuteMembers', 'DeafenMembers', 'MoveMembers', 'ViewAuditLog']) &&
      !filter.owner
    )
      acknowledgement = 'Server Member';

      
    const nick = mention1.nickname === null ? "None" : mention1.nickname;
      const roles = mention1.roles.cache.get === "" ? "None" : mention1.roles.cache.get;
      const roless = mention1.roles.cache
      .filter((x) => x.id !== message.guildId && !x.managed)
      .sort((a, b) => b.position - a.position)
      .map((x) => x.toString());
      
        const usericon = mention1.user.displayAvatarURL({dynamic: true});
        const mentionPermissions = mention1.permissions.toArray() === null ? "None" : mention1.permissions.toArray();
        const finalPermissions = [];
        for (const permission in permissions) {
            if (mentionPermissions.includes(permission)) finalPermissions.push(`${permissions[permission]}`);
            else;
        }
      const data = await axios.get(`https://discord.com/api/users/${mention1.id}`, {
          headers: {
            Authorization: `Bot ${client.token}`
          }
        }).then(d => d.data);
        
    let userlol = new EmbedBuilder()
.setTitle(`${mention1.user.username}'s Information`)
  .setColor("#2f3136")
  .setAuthor({name: `Ather's UserInfo Panel`, iconURL: client.user.displayAvatarURL({dynamic: true})})
       .addFields([{name: `**__General Info__**`, value: `**Name:** \`\`${mention1.user.tag}\`\`\n**ID:** \`${mention1.user.id}\` \n**Nickname:** \`${nick}\`\n**Bot?:** ${bott[mention1.user.bot]}\n**Badges:** ${badges ? `${badges.join(' ')}` : `None`}\n**Activity:** ${mention1.presence?.activities[0] ? mention1.presence?.activities[0].name : "No Current Activity."}\n**Created On:** <t:${Math.round(mention1.user.createdTimestamp/1000)}:R>\n**Joined On:** <t:${Math.round(mention1.joinedTimestamp/1000)}:R>`}])
.addFields([{name: `**__Role Info__**`, value: `**Highest Role:** ${mention1.roles.highest.id === message.guild.id ? "\`No Highest Role.\`" : mention1.roles.highest}\n**Hoist Role:** ${mention1.roles.hoist ? mention1.roles.hoist : "\`No Hoist Role.\`"}\n**Roles:** ${mention1._roles[0] ? `<@&${mention1._roles.join(">  <@&")}>` : `\`No Roles.\``}\n**Color:** ${mention1.displayHexColor}`}])
 .addFields([{name: "**__Key Permissions__**",value:`\`${finalPermissions.join(', ')}\``}])
      if (acknowledgement.length > 0) userlol.addFields([{name: "**__Acknowledgements__**",value:`\`${acknowledgement}\`\n`}])
      
      .setThumbnail(mention1.user.avatarURL())
        if(data.banner) {
          let url = data.banner.startsWith("a_") ? ".gif?size=4096" : ".png?size=4096";
              url = `https://cdn.discordapp.com/banners/${mention1.id}/${data.banner}${url}`;
        
      userlol.setImage(url)
        }
        userlol.setFooter({ text: `Requested By: ${message.author.tag}`, iconURL: message.author.displayAvatarURL({dynamic: true})})
        userlol.setTimestamp()


    return message.reply({embeds: [userlol], allowedMentions: { repliedUser: true } }).catch(err => {
      return message.reply("Error : " + err)
    })

      
  }
}