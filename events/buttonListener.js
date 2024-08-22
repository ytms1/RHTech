const menu = require("../commands/menu");
const CreateButtons = require("../modules/createButtons")

module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    const role = menu.roles.find(
      (value) => value["id"].toString() === interaction["customId"]
    );

    const buttons = await CreateButtons(menu.roles)
    await interaction.message.edit({ content: "Выберите роль", components: buttons })
    
    await interaction.reply({
        embeds: [{
            color: 0x8000ff,
            title: `Роль: ${role.name}`,
            description: `Описание: ${role.description}`,
        }],
        ephemeral: true,
    });
},
};