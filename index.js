const TelegramBot = require('node-telegram-bot-api');
const token = '6473719227:AAFBCIuXLcAveb_6uEDWVI5cQWABBXjEDsU';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Merhaba, hoş geldiniz!');
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Mesajınızı aldım: ' + msg.text);
});
