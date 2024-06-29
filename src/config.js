require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",
    clientID: process.env.CLIENT_ID || "1254187366789415024", 
    prefix: process.env.PREFIX || ".", 
    ownerID: process.env.OWNER_ID || "927049723599265822",
    guildID: process.env.GUILD_ID || "1253190482301816932",
    SpotifyID: process.env.SPOTIFY_ID || "aece5b4d7d27426ebef592a75bd43a2c",
    SpotifySecret: process.env.SPOTIFY_SECRET || "79a8a54525324e9aa3291eeb880ff287",
    mongourl: process.env.MONGO_URL || "mongodb+srv://rlx:rlx@rlx2.yulr9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    embedColor: process.env.EMBED_COLOR || 0xcc0000,
    logs: process.env.LOGS || "1253378480364585174",
    logs1: process.env.LOGS1 || "1253378480364585174",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "1253378480364585174",
    buglogschannel: process.env.BUG_LOGS_CHANNEL || "1253378480364585174",
    SearchPlatform: "youtube",
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER ||"youtube ,youtube music,youtube,soundcloud",
    links: {
        img: process.env.IMG || 'https://media.discordapp.net/attachments/1037057936960274532/1254231234448461934/visuals-000996518278-JtrWch-original.jpg?ex=6678bd5c&is=66776bdc&hm=c9f15c6a041592b2e40db30bb50cdc434a15d3b54ef47b56f7de93cb68d61eb1&=&format=webp&width=1080&height=226', 
        support: process.env.SUPPORT || 'https://discord.com/invite/4t2r9WB6qZ',
        invite: process.env.INVITE || 'https://discord.com/api/oauth2/authorize?client_id=1254187366789415024&permissions=36768832&scope=applications.commands%20bot' 
    },
    nodes: [
           {
            host: process.env.NODE_HOST || "85.88.163.80",
            port: parseInt(process.env.NODE_PORT || "3128"),
            password: process.env.NODE_PASSWORD || "saher.inzeworld.com",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
            }
           ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}