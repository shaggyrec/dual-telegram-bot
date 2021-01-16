const { Telegraf } = require('telegraf');

class Bot {
    constructor (token) {
        this.bot = new Telegraf(token);
        this.greeting = 'Hi';
    }

    setGreeting (greeting) {
        this.greeting = greeting;
        return this;
    }

    onStart (handler) {
        this.startHandler = handler;
        return this;
    }

    onError (handler) {
        this.errorHandler = handler;
        return this;
    }

    run () {
        this.bot.start((ctx) => ctx.reply(this.greeting));
        this.bot.launch().then(() => this.startHandler()).catch(err => this.errorHandler(err));
    }
}

module.exports = Bot;
