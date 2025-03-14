const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("download")
    .setDescription("Download resources from internet!"),
  async execute(interaction) {
    await interaction.reply("Downloading!");
  },
};
