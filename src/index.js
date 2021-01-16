const Bot = require('./Bot');

const { BOT_TOKEN_0, BOT_TOKEN_1 } = process.env;
const consoleErrorBg = '\x1b[41m';

if (!BOT_TOKEN_0 || !BOT_TOKEN_1) {
    console.error(consoleErrorBg, 'Tokens for bots are not set');
    process.exit(1);
}

function errorHandler ({ response: { description } }) {
    console.error(consoleErrorBg, 'Bot error: ' + description);
    process.exit(1);
}

(new Bot(BOT_TOKEN_0))
    .onError(errorHandler)
    .setGreeting('Hello! I am the first bot.');

(new Bot(BOT_TOKEN_1))
    .onError(errorHandler)
    .setGreeting('Ahoy! I am the second bot.');
