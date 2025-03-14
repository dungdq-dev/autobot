const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios").default;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("freegames")
    .setDescription("Replies with list of free games!"),
  async execute(interaction) {
    const response = await axios.get("https://www.freetogame.com/api/game?id=222");
    await interaction.reply(`${response.data.title}`);
  },
};
