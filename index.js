const { Composer } = require('micro-bot')
const bot = new Composer()

bot.start((ctx) => ctx.reply('Welcome by pavan Shetty'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => {
     ctx.reply('Hey there',{
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "dog",
                        callback_data: 'dog'
                    },
                    {
                        text: "cat",
                        callback_data: 'cat'
                    }
                ],

            ]
        }
    })
    });

    bot.action('dog', ctx => {
        ctx.reply('dog👍')
    
    })
    bot.action('cat', ctx => {
        ctx.reply('cat👍')
    })

module.exports = bot

