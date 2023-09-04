const sendMessage = require("../../sendMessage");

let um = require("../../UserMessage");


exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  let userMessage = new um(message.text)
  
  await sendMessage(message.chat.id, userMessage.showDB());
  
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

