const { Telegraf } = require('telegraf');

class Bot {
    constructor (token) {
        this.bot = new Telegraf(token);
        this.greeting = 'Hi';
        this.init();
    }

    setGreeting (greeting) {
        this.greeting = greeting;
        return this;
    }

    onError (handler) {
        this.errorHandler = handler;
        return this;
    }

    init () {
        this.bot.start((ctx) => ctx.reply(this.greeting));
        this.bot.launch().then(() => {
            console.log('\x1b[42m', 'Bot launched', '\x1b[0m');
        }).catch(err => this.errorHandler(err));
    }
}

module.exports = Bot;
