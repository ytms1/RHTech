const CreateMenu = require('../modules/createMenu')

module.exports = {
    name: 'menu',
    description: 'Меню с кнопками',
    roles: [
        {"id": 0, "name": "0 role", "description": "desc 0"},
        {"id": 1, "name": "1 role", "description": "desc 1"},
        {"id": 2, "name": "2 role", "description": "desc 2"},
        {"id": 3, "name": "3 role", "description": "desc 3"},
        {"id": 4, "name": "4 role", "description": "desc 4"},
        {"id": 5, "name": "5 role", "description": "desc 5"},
        {"id": 6, "name": "6 role", "description": "desc 6"},
        {"id": 7, "name": "7 role", "description": "desc 7"},
        {"id": 8, "name": "8 role", "description": "desc 8"},
        {"id": 9, "name": "9 role", "description": "desc 9"},
    ],
    async execute(message) {
        const row = await CreateMenu(this.roles)
        await message.channel.send({ components: [row] });
    },
};
