const { SlashCommandBuilder } = require("discord.js");

let pingResponse = [
  "Pong!",
  "Hello",
  "Good morning sir",
  "I am Optimus Prime, and I send this message to any surviving Autobots taking refuge among the stars: We are here. We are waiting.",
  "I am a bot, and I have been created by Star Wars' Jabba the Hutt.",
  "Konnichiwa",
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Random replies!"),
  async execute(interaction) {
    await interaction.reply(
      pingResponse[Math.floor(Math.random() * pingResponse.length)]
    );
  },
};
