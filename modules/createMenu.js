const { StringSelectMenuBuilder, ActionRowBuilder } = require("discord.js");

module.exports = async (array) => {
  const roles = [];
  array.forEach((role) =>
    roles.push({ label: role["name"], value: role["id"].toString() })
  );

  const menu = new StringSelectMenuBuilder()
    .setCustomId("role_menu")
    .setPlaceholder("Выберите роль: ")
    .addOptions(roles);

  const row = new ActionRowBuilder().addComponents(menu)

  return row;
};
