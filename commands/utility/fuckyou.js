const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fuckyou')
        .setDescription("Well now,,,"),
    async execute(interaction) {
        await interaction.reply('Well, fuck you too! Asshole.');
    },
};