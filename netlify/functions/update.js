const axios = require("axios").default;

req = `https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage`






exports.handler = async (event) => {
    console.log("Received an update from Telegram!", event.body);

    await axios.post(req, {
        chat_id: JSON.parse(event.body).message.chat.id,
        text: "I got your message!",
    });
    
    return { statusCode: 200 };
  };

