const path = require('path');
const Hapi = require('@hapi/hapi');
// const TelegramBot = require('node-telegram-bot-api');
const TG = require('telegram-bot-api')

const token = '5094623202:AAENP1keUX-FJe7Dp5lAcpPOCu3ze1hsIGU';
// const chatId = '-777552229';
const api = new TG({
  token: '5094623202:AAENP1keUX-FJe7Dp5lAcpPOCu3ze1hsIGU'
})

api.getMe()
  .then(console.log)
  .catch(console.err)
// const bot = new TelegramBot(token, {polling: true});
const port = process.env.PORT || 3000;

const FILES = /\.(js|js.map|woff|woff2|svg|bmp|jpg|jpeg|gif|png|ico)(\?v=\d+\.\d+\.\d+)?$/;

const PATH = {
  '/': 'index.html'
}

// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
// });

const init = async () => {
  const server = Hapi.server({
    port
  })

  await server.register(require('@hapi/inert'));

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: (request, h) => {
      if (FILES.test(request.path)) {
        return h.file(path.join(process.cwd(), 'dist', request.path))
      }

      return h.file(path.join(process.cwd(), 'dist', PATH[request.path]))
    }
  })

  await server.start();

  console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();