/* Importing library */
import { Client } from 'discord.js'
import tokenConfig from './config.json'
import { CommandHandler } from './handlers/command-hendler'
/* Create new Client */
const botClient = new Client()
const commandHandler = new CommandHandler()
/* commands */
botClient.on('ready', () => console.log('Bot is ready!'))
bot.on('message', async (msg) => {
  if (msg.author.bot) return

  await commandHandler.handle(msg)
})
/* Connnect with Token */
botClient.login(tokenConfig.token)
