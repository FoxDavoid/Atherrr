const { prefix } = require("../../config.js");
const { ActivityType } = require("discord.js");
const User = require("../../schema/User");

module.exports ={
name: "ready",
run: async (client) => {
    client.manager.init(client.user.id);
    // client.logger.log(`${client.user.username} online!`, "ready");
//    client.logger.log(`Ready on Familia Zallomon server, for a total of 13 users (online=5)`, "ready");

    client.logger.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} users`, "ready");
  
// premium system loader
  const users = await User.find();
  users.forEach((user) => client.userSettings.set(user.Id, user));
  
    //Game
    let statuses = ['Dakku - Aerial Cloudy','Dakku - Alba','Dakku - Euphoria','Dakku - Lost in Paradise','Dakku - Rest','Dakku - Candy','Dakku - Abstract','Dakku - You and Me','Dakku - Aiko','Dakku - Galaxy','Dakku - Sweetness','Dakku - Starlight','Dakku - Lost','Dakku - Ather','Dakku - Hysteria','seld, TriangleReality - Kokkabiel (Dakku Remix)','Dakku - Anyway','Dakku - Stay','Dakku - Incandescent','Dakku - Healing','Dakku - Apotheosic','Dakku - Ephemeral'];
    setInterval(function() {
  		let status = statuses[Math.floor(Math.random()*statuses.length)];
  		client.user.setActivity(`${status}`, {type: ActivityType.Listening});
  	}, 240000)
 }
}
