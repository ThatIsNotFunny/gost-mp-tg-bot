class UserMessage {

    constructor(message) {
      this.message = message
      this.props = ['mu']
      this.validCommands = ['/help']
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
  
        let message = this.message.split(' ')[0]
        console.log(message)
        let [reqProp, reqSteel, reqTemp] = message
  
        return `Показать ${reqProp} для стали ${reqSteel} при температуре ${reqTemp}?`
      }
    }
  }

  module.exports = UserMessage