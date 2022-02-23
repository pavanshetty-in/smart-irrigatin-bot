const { Composer } = require('micro-bot')
const request = require('request');
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
        request('https://rnsit-mca-miniproject.herokuapp.com/latest', { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            ctx.reply(body.explanation)
            console.log(body.explanation);
          });
    })
    bot.action('cat', ctx => {
        ctx.reply('cat👍')
    })

module.exports = bot

