const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription("provides info on the user"),
    async execute(interaction) {
        await interaction.reply(`According to my records, you (${interaction.user.username}) have been 
        here with us since ${interaction.member.joinedAt}. Gee, how I've enjoyed your presence...`);
    },
};