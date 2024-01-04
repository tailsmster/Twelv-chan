const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Gives join date of user.'),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
        await interaction.reply(`According to my records, ${interaction.user.username} (aka you) have been left stranded at "${interaction.guild.name}", since:` 
        + "\n" + '```' + interaction.member.joinedAt + '```'
        + "\n" + `Wow.`);
    },
};