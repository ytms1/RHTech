const menu = require("../commands/menu");
const CreateMenu = require("../modules/createMenu")

module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    const role = menu.roles.find(
      (value) => value["id"].toString() === interaction["values"][0]
    );

    const buttons = await CreateMenu(menu.roles)
    await interaction.message.edit({ components: [buttons] })
    
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
