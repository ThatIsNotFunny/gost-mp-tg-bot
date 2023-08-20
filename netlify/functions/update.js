const sendMessage = require("../../sendMessage");


class UserMessage {

  constructor(message) {
    this.message = message
  }

  showHelp() {
    return `Привет!
    Я бот, который поможет тебе быстро найти значения механических свойств согласно ГОСТ.
    Вот список того, что я умею:
    help - вызов справки
  
    Наберите сообщение в формате (без квадратных скобок с пробелом между словами): 
    [свойство] [сталь] [температура]
  
    сталь - название стали (можно посмотреть весь список командой steels)
    температура - необходимая расчетная температура
    свойство - выбранное свойство для отображения`
  }

  showError() {
    return `Я не понимаю команду "${this.message}". Узнайте что я умею командой /help`
  }

  answer() {
    if (this.message =='/help') {
      return this.showHelp()
    } else {
      return this.showError()
    }
  }

}







exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  let userMessage = new UserMessage(message.text)
    
  await sendMessage(message.chat.id, userMessage().answer());
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

