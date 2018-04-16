var linebot = require('linebot')

function startServer() {
  require('dotenv').config()
  //  LINE
  var bot = linebot({
    channelId: process.env.channelId,
    channelSecret: process.env.channelSecret,
    channelAccessToken: process.env.channelAccessToken
  });

  bot.on('message', function (event) {
    event.reply(event.message.text).then(function (data) {
      // success
    }).catch(function (error) {
      // error
    });
  });
  
  bot.listen('/linewebhook', 3000, function () {
    console.log('bot is running')
  })

}
startServer()