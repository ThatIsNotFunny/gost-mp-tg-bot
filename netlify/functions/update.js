const sendMessage = require("../../sendMessage");




exports.handler = async (event) => {
    const { message } = JSON.parse(event.body);
    await sendMessage(message.chat.id, message);
    return { statusCode: 200 };
  };


// req = `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}/sendMessage`






// exports.handler = async (event) => {
//     console.log("Received an update from Telegram!", event.body);

//     await axios.post(req, {
//         chat_id: JSON.parse(event.body).message.chat.id,
//         text: "I got your message!",
//     });
    
//     return { statusCode: 200 };
//   };

