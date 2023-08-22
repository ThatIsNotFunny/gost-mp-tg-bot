class UserMessage {

    constructor(message) {
      this.message = message
      this.validProps = ['mu']
      this.validCommands = ['/help']
      this.validSteels = ['Ст3']
      this.validTemp = [20,500]
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
      else {
  
        let [reqProp, reqSteel, reqTemp] = this.message.split(' ')
        
        if (!(reqProp in this.validProps)) {
            return `Такого свойства нет`
        } else if(!(reqSteel in this.validSteels)) {
            return `Такой стали нет`
        } else if(!(reqTemp>=this.validTemp)) {
            return `Температура вне допустимого диапазона`
        }
        else {
            return `Показать ${reqProp} для стали ${reqSteel} при температуре ${reqTemp}?`
        }
      }
    }
  }

  module.exports = UserMessage