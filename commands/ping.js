const { SlashCommandBuilder } = require("discord.js");

function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Responde com 'Pong!'"),

    async execute(interaction) {
        var numeroSorteado = sortearNumero(1, 10); 
        console.log(numeroSorteado);

        if (numeroSorteado === 10) {
            await interaction.reply({ content: '```Parabéns, você acaba de receber uma mensagem secreta!!!```', ephemeral: true });
        } else {
            await interaction.reply("```Pong!```");
        }
    }
};

