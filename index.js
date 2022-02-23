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
                        callback_data: 'status'
                    },
                    {
                        text: "About US",
                        callback_data: 'about'
                    }
                ],

            ]
        }
    })
})
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('Hi', (ctx) => {
     ctx.reply('Hey there',{
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "latest status",
                        callback_data: 'status'
                    },
                    {
                        text: "About US",
                        callback_data: 'about'
                    }
                ],

            ]
        }
    })
    });
    bot.hears('hi', (ctx) => {
        ctx.reply('Hey there',{
           reply_markup: {
               inline_keyboard: [
                   [{
                           text: "latest status",
                           callback_data: 'status'
                       },
                       {
                           text: "About US",
                           callback_data: 'about'
                       }
                   ],
   
               ]
           }
       })
       });
       bot.hears('Start', (ctx) => {
        ctx.reply('Hey there',{
           reply_markup: {
               inline_keyboard: [
                   [{
                           text: "latest status",
                           callback_data: 'status'
                       },
                       {
                           text: "About US",
                           callback_data: 'about'
                       }
                   ],
   
               ]
           }
       })
       });
       bot.hears('start', (ctx) => {
        ctx.reply('Hey there',{
           reply_markup: {
               inline_keyboard: [
                   [{
                           text: "latest status",
                           callback_data: 'status'
                       },
                       {
                           text: "About US",
                           callback_data: 'about'
                       }
                   ],
   
               ]
           }
       })
       });

    bot.action('status', ctx => {
                https.get('https://rnsit-mca-miniproject.herokuapp.com/latest', (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            
            ctx.reply('last Update on: '+ JSON.parse(data).date +'\nTemprature: '+ JSON.parse(data).temp +'C \n Humidity: '+ JSON.parse(data).humidity +'% \n Soli Moisture: '+ JSON.parse(data).soilmoist + '% \n Motor Status: '+ JSON.parse(data).motorstatus +'\n true indicates On \n false indicates OFF',{
                reply_markup: {
                    inline_keyboard: [
                        [{
                                text: "latest status",
                                callback_data: 'status'
                            },
                            {
                                text: "About US",
                                callback_data: 'about'
                            }
                        ],
        
                    ]
                }
            });
        });

        }).on("error", (err) => {
        console.log("Error: " + err.message);
        });
    })

    bot.action('about', ctx => {
        ctx.reply('Hi, \n This is Smart irrigation IOT projects status Bot!. \n \n My name: Smart Irrigation \n Language: JavaScript \n Framework: NodeJS \n Hosted on: Heroku \n Developers: Pavan Shetty and Nandan Jayant Hegde',{
            reply_markup: {
                inline_keyboard: [
                    [{
                            text: "latest status",
                            callback_data: 'status'
                        },
                        {
                            text: "About US",
                            callback_data: 'about'
                        }
                    ],
    
                ]
            }
        })
    })

module.exports = bot

