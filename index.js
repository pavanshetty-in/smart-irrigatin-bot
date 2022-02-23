const { Composer } = require('micro-bot')
const https = require('https');
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
        https.get('https://rnsit-mca-miniproject.herokuapp.com/latest', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).date);
    console.log(JSON.parse(data).temp);
    ctx.reply('last Update on: '+ JSON.parse(data).date +'\nTemprature: '+ JSON.parse(data).temp)
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
    })
    bot.action('cat', ctx => {
        ctx.reply('cat👍')
    })

module.exports = bot

