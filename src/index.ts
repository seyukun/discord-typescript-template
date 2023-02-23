import * as Discord from "discord.js";
import { Logger } from "tslog";

const console = new Logger();
process.on("uncaughtException", (err) => console.error(err));

const cli = new Discord.Client({
    intents: [
    Discord.GatewayIntentBits.DirectMessageReactions,
    Discord.GatewayIntentBits.DirectMessageTyping,
    Discord.GatewayIntentBits.DirectMessages,
    Discord.GatewayIntentBits.GuildEmojisAndStickers,
    Discord.GatewayIntentBits.GuildIntegrations,
    Discord.GatewayIntentBits.GuildInvites,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.GuildMessageReactions,
    Discord.GatewayIntentBits.GuildMessageTyping,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.GuildPresences,
    Discord.GatewayIntentBits.GuildScheduledEvents,
    Discord.GatewayIntentBits.GuildVoiceStates,
    Discord.GatewayIntentBits.GuildWebhooks,
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.MessageContent,
  ],
  partials: [Discord.Partials.Channel],
});

cli.on("ready", async () => {
  console.info("bot ready");
});

cli.login();
