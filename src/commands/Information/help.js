const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, StringSelectMenuBuilder } = require("discord.js");
const config = require('../../config');

module.exports = {
    name: "help",
    category: "Information",
    aliases: ["h"],
    description: "",
    args: false,
    usage: "",
    userPerms: [],
    owner: false,
    execute: async (message, args, client, prefix) => {

        let embeds = [
            new EmbedBuilder().setAuthor({ name: `Ather's Help Panel`, iconURL: client.user.displayAvatarURL() }).setDescription(`Prefix on this server : \`${prefix}\`\nType **\`${prefix}\`help** for more info\nTotal commands: 53\n**[Add me](${config.links.invite}) | [Support](${config.links.support})**`).addFields([{ name: `**__Main Categories__**`, value: `**Moderation\nInformation\nFun\nVoice\nSettings\n\n**__Links__**\n [Support](https://discord.com/invite/4t2r9WB6qZ) | [Add](${client.config.links.invite}) ** ` }]).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp().setImage("https://cdn.discordapp.com/attachments/1037057936960274532/1254231234448461934/visuals-000996518278-JtrWch-original.jpg?ex=6678bd5c&is=66776bdc&hm=c9f15c6a041592b2e40db30bb50cdc434a15d3b54ef47b56f7de93cb68d61eb1&"),
            new EmbedBuilder().setAuthor({ name: `Ather's Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Moderation \`[17]\`**").setDescription(`\n\n\`lock, unlock, lockall, unlockall, hide, unhide, hideall, unhideall, ban, unban, unbanall, kick, mute, unmute, purge, nuke, purgebots\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setAuthor({ name: `Ather's Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Information \`[20]\`**").setDescription(`\n\n\`about, invite, ping, node, stats, help, avatar, banner, servericon, serverbanner, userinfo, serverinfo, uptime, roleinfo, membercount, bug, announce, embedsay\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setColor(client.color).setAuthor({ name: `Ather's Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Music \`[30]\`**").setDescription(`\n\n\`play, join, leave, loop, Autoplay, pause, lyrics, nowplaying, previous, queue, resume, skip, remove, seek, volume, search, shuffle, grab, skipto, clearqueue, 247, filters, p_create, p_delete, p_savecurrent, p_savequeue, p_removetrack, p_load, p_info, p_list\`\n\n`).setTimestamp().setThumbnail(client.user.displayAvatarURL()),
            new EmbedBuilder().setAuthor({ name: `Ather's Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Giveaway \`[4]\`**").setDescription(`\n\n\`gstart, greroll, gend, glist\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setColor(client.color).setAuthor({ name: `Ather's Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Fun \`[6]\`**").setDescription(`\n\n\`hack, achi, ascii, math, howgay, howdumb\`\n\n`).setColor(client.color).setThumbnail(client.user.displayAvatarURL()).setTimestamp(),
            new EmbedBuilder().setColor(client.color).setAuthor({ name: `Ather's Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Image \`[13]\`**").setDescription(`\n\n\`achi, kiss, hug, fuck, pat, ego, punch, waifu, cry\`\n\n`).setTimestamp().setThumbnail(client.user.displayAvatarURL()),
            new EmbedBuilder().setAuthor({ name: `Ather's Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Voice \`[6]\`**").setDescription(`\n\n\`vcdeafen, vcundeafen, vclist, vcmute, vcunmute, vckick\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setAuthor({ name: `Ather's Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Settings \`[4]\`**").setDescription(`\n\n\`prefix, serverlist\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setAuthor({ name: `Ather's Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Nsfw \`[23]\`**").setDescription(`\n\n\`aass, abdsm, ablowjob, acum, adoujin, afeet, afemdom, afoxgirl, agif, aglasses, ahentai, amaid, amasturbation, anetorare, apanties, aorgy, apussy, aschool, asuccubus, atentacles, auniform, athighs, ayuri\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setAuthor({ name: `Ather's Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Custom Roles \`[11]\`**").setDescription(`\n\n\`rsetup, girl, friend, guest, official, vip, rvip, rgirl, rfriend, rofficial, rguest\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),

        ];
        await pagination(message, embeds);

    }
}

/**
 *
 * @param {CommandInteraction} interaction
 * @param {Array} embeds
 */
async function pagination(interaction, embeds) {
    
    let row = new ActionRowBuilder().addComponents([
        new StringSelectMenuBuilder()
            .setCustomId('helpop')
            .setPlaceholder('Click here')
            .addOptions([
                {
                    label: 'Moderation',
                    value: 'sixth',
//                    emoji: '<:x_automod:1239384669175152691>',
                    emoji: '<:Sus:1050246073853153330>',
                    description: 'See all mod commands'
                },
                {
                    label: 'Information',
                    value: 'first',
//                    emoji: '<:x_info:1239384932019867689>',
                    emoji: '<:uh:1044972905903169628>',
                    description: 'Get all info commands'
                },
                {
                    label: 'Fun',

                    value: 'eight',
//                    emoji: '<:x_games:1239384528385216523>',
                    emoji: '<:lmao:1046284795598098442>',
                    description: 'Get all the funny commands'
                },
                {
                    label: 'Voice',
                    value: 'eleventh',
//                    emoji: '<:x_mute:1239384548064624671>',
                    emoji: '<:xD:1243229987172126720>',
                    description: 'Get all the voice commands'
                },
                {
                    label: 'Settings',
                    value: 'fourth',
//                    emoji: '<:x_setting:1239384634958155777>',
                    emoji: '<:idk:1044796824793387008>',
                    description: 'Get all the setting commands'    
                },
            ])
    ]);
    let row2 = new ActionRowBuilder()
        .addComponents([
            new ButtonBuilder()
                .setLabel("Add me")
                .setEmoji('1056925359750262824')
                .setStyle(ButtonStyle.Link)
                .setURL(`${config.links.invite}`),

            new ButtonBuilder()
                .setLabel("Support")
                .setStyle(ButtonStyle.Link)
                .setEmoji('1056925477849284608')
                .setURL(`${config.links.support}`)
        ]);

    // send message if embeds is 1
    if (embeds.length === 1) {
        if (interaction.deferred) {
            return interaction.followUp({
                embeds: [embeds[0]],
            });
        } else {
            return interaction.reply({
                embeds: [embeds[0]],
                fetchReply: true,
            });
        }
    }

    embeds = embeds.map((embed, index) => {
        return embed.setFooter({
            text: `Requested by ` + interaction.author.tag,
            iconURL: interaction.author.displayAvatarURL({ dynamic: true }),
        });
    });

    let sendMsg;
    if (interaction.deferred) {
        sendMsg = await interaction.followUp({
            embeds: [embeds[0]],
            components: [row, row2],
        });
    } else {
        sendMsg = await interaction.reply({
            embeds: [embeds[0]],
            components: [row, row2],
        });
    }

    let filter = (m) => m.member.id === interaction.member.id;

    const collector = await sendMsg.createMessageComponentCollector({
        filter: filter,
        // time: 30000/2,
    });
    let currentPage = 0;
    collector.on("collect", async (b) => {
        if (b.isButton()) {
            await b.deferUpdate().catch((e) => null);
            // page first
            switch (b.customId) {
                case "0":
                    {
                        if (currentPage != 0) {
                            currentPage = 0;
                            await sendMsg
                                .edit({
                                    embeds: [embeds[currentPage]],
                                    components: [row, row2],
                                })
                                .catch((e) => null);
                        }
                    }
                    break;
                case "1":
                    {
                        if (currentPage != 0) {
                            currentPage -= 1;
                            await sendMsg
                                .edit({
                                    embeds: [embeds[currentPage]],
                                    components: [row, row2],
                                })
                                .catch((e) => null);
                        } else {
                            currentPage = embeds.length - 1;
                            await sendMsg
                                .edit({
                                    embeds: [embeds[currentPage]],
                                    components: [row, row2],
                                })
                                .catch((e) => null);
                        }
                    }
                    break;
                case "2":
                    {
                        row, row2.components.forEach((btn) => btn.setDisabled(true));
                        await sendMsg
                            .delete({
                                embeds: [embeds[currentPage]],
                                components: [row, row2],
                                //  fetchReply: false,
                            })
                            .catch((e) => null);

                    }
                    break;
                case "3":
                    {
                        if (currentPage < embeds.length - 1) {
                            currentPage++;
                            await sendMsg
                                .edit({
                                    embeds: [embeds[currentPage]],
                                    components: [row, row2],
                                })
                                .catch((e) => null);
                        } else {
                            currentPage = 0;
                            await sendMsg
                                .edit({
                                    embeds: [embeds[currentPage]],
                                    components: [row, row2],
                                })
                                .catch((e) => null);
                        }
                    }
                    break;
                case "4":
                    {
                        currentPage = embeds.length - 1;
                        await sendMsg
                            .edit({
                                embeds: [embeds[currentPage]],
                                components: [row, row2],
                            })
                            .catch((e) => null);
                    }
                    break;

                default:
                    break;
            }
        }
    });

    collector.on("end", async () => {
        row, row2.components.forEach((btn) => btn.setDisabled(true));
        await sendMsg
            .edit({
                embeds: [embeds[currentPage]],
                components: [row, row2],
            })
            .catch((e) => null);
    });

};