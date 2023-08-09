const axios = require("axios").default;

req = `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}/sendMessage`


module.exports = async (chat_id, text) => {
  await axios.post(req, {
    chat_id,
    text,
  });
  console.log(text)
  return true;
};