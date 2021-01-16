const Bot = require('./Bot');

const { BOT_TOKEN_0, BOT_TOKEN_1, GREETING_0, GREETING_1 } = process.env;
const consoleErrorBg = '\x1b[41m';

if (!BOT_TOKEN_0 || !BOT_TOKEN_1) {
    console.error(consoleErrorBg, 'Tokens for bots are not set');
    process.exit(1);
}

function errorHandler ({ response: { description } }) {
    console.error(consoleErrorBg, 'Bot error: ' + description);
    process.exit(1);
}

function startHandler (index) {
    return () => console.log('\x1b[42m', `Bot #${index} launched`, '\x1b[0m');
}

(new Bot(BOT_TOKEN_0))
    .onStart(startHandler(0))
    .onError(errorHandler)
    .setGreeting(GREETING_0)
    .run();

(new Bot(BOT_TOKEN_1))
    .onStart(startHandler(1))
    .onError(errorHandler)
    .setGreeting(GREETING_1)
    .run();
