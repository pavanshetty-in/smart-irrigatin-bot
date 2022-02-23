const { Composer } = require('micro-bot')
const bot = new Composer()

bot.start((ctx) => { 
    ctx.reply('Welcome to Smart Irrigation Project');
    ctx.reply('select your options',{
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "latest status",
                        callback_data: 'dog'
                    },
                    {
                        text: "About US",
                        callback_data: 'cat'
                    }
                ],

            ]
        }
    })
})
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
        ctx.reply('dog👍 \n hello')
    
    })
    bot.action('cat', ctx => {
        ctx.reply('cat👍')
    })

module.exports = bot

