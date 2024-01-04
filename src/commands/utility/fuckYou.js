const { SlashCommandBuilder } = require("discord.js");

const randomInsultGenerator = () => {
    const insults = [
        "Fattie!",
        "Asshole!",
        "Cock!",
        "Little shit!",
        "#!@%* you!",
        "Prick!",
        "Lickspittle!",
        "Mamaguevo!",
        "Cunt!",
        "Cabrón!",
        "Whore!",
        "Piss-licker!",
        "Lollygagger!",
    ];
    const ranIdx = Math.floor(Math.random()*insults.length);
    return insults[ranIdx];
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fuckyou')
        .setDescription("Well now..."),
    async execute(interaction) {
        await interaction.reply("Well, fuck you too! " + (randomInsultGenerator().toString()));
    },
};
