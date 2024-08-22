const { Client, Events, GatewayIntentBits } = require('discord.js');
const { TOKEN } = require('./config');
const fs = require('fs')


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.commands = new Map()

const commands = fs.readdirSync("./commands").filter(file => file.endsWith('.js'))
const events = fs.readdirSync("./events").filter(file => file.endsWith('.js'))

for (file of commands) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

for (file of events) {
    const event = require(`./events/${file}`)
    client.on(event.name, (...args) => event.execute(...args))
}

client.on('messageCreate', message => {
    if (!message.content.startsWith('/') || message.author.bot) return;

    const args = message.content.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);

    if (command) {
        command.execute(message, args);
    }
});


client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});


client.login(TOKEN);