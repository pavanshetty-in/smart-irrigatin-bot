const { Composer } = require('micro-bot')
const bot = new Composer()

bot.start((ctx) => ctx.reply('Welcome by pavan Shetty'))

module.exports = bot

// guarded-anchorage-02020
// https://guarded-anchorage-02020.herokuapp.com/