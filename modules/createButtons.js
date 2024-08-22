const { ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");

module.exports = async (array) => {
  const buttons = [];
  array.forEach((el) => {
    buttons.push(
      new ButtonBuilder()
        .setCustomId(el["id"].toString())
        .setLabel(el["name"])
        .setStyle(ButtonStyle.Primary)
    );
  });

  const rows = [];
  for (let i = 0; i < buttons.length; i += 5) {
    const row = new ActionRowBuilder()
    row.addComponents(buttons.slice(i, i + 5));
    rows.push(row);
  }

  return rows
};
