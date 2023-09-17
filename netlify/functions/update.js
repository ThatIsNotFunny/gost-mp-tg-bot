const sendMessage = require("../../sendMessage");

let um = require("../../UserMessage");


exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  let userMessage = new um(message.text)
  
  await sendMessage(message.chat.id, userMessage.answer());
  
  return { statusCode: 200 };
  }


// req = `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}/sendMessage`





