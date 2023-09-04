const sendMessage = require("../../sendMessage");

let um = require("../../UserMessage");

let ec = require("../../controllers/elastisity.controller")



exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  let userMessage = new um(message.text)
  
  await sendMessage(message.chat.id, userMessage.answer());
  console.log(ec.getElasticity)
  return { statusCode: 200 };
  }


// req = `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}/sendMessage`






// exports.handler = async (event) => {
//     console.log("Received an update from Telegram!", event.body);

//     await axios.post(req, {
//         chat_id: JSON.parse(event.body).message.chat.id,
//         text: "I got your message!",
//     });
    
//     return { statusCode: 200 };
//   };

