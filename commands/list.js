/* importing files */
import Command from './commands'
import { MusicHandler } from '../handlers/music-handler.js'

export default new (class extends Command {
  name = 'list'

  async excute(msg) {
    const player = MusicHandler.get(msg)
    const details = player.q.items
      .map((track) => `\`${track.title}\` - ${track.requestor}`)
      .join('\n')

    await msg.channel.send(`>>> **Queue**: \n${details}`)
  }
})()
