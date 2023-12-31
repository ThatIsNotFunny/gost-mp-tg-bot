const Controller = require('./controllers/DatabaseController')

const controller = new Controller.DatabaseController()

class UserMessage {

    constructor(message) {
      this.message = message
      this.validProps = ['mu']
      this.validCommands = ['/help', '/showSteels']
      this.validSteels = ['Ст3']
      this.validTempRange = [20,500]
    }

    showDB() {
      return controller.getPropertyBySteelName(this.message)
    }

    showSteels() {
      return controller.getAllSteels()
    }

  
    showHelp() {
      return `Привет!
      Я бот, который поможет тебе быстро найти значения механических свойств согласно ГОСТ.
      Вот список того, что я умею:
      /help - вызов справки
    
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
      }

      else if (this.message =='/showSteels') {
        return this.showSteels()
      }

      else {
  
        let [reqProp, reqSteel, reqTemp] = this.message.split(' ')
        
        if (!(this.validProps.includes(reqProp))) {
            return `Такого свойства ${reqProp} нет`
        } else if(!(this.validSteels.includes(reqSteel))) {
            return `Такой стали ${reqSteel} нет`
        } else if(!(reqTemp>=this.validTempRange[0] && reqTemp<=this.validTempRange[1])) {
            return `Температура вне допустимого диапазона`
        }
        else {
            return `Показать ${reqProp} для стали ${reqSteel} при температуре ${reqTemp}?`
        }
      }
    }
  }

  module.exports = UserMessage