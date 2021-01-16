# Dual Telegram bot

Two telegram bots using one NodeJS instance

# Run it

    git clone https://github.com/shaggyrec/dual-telegram-bot.git
    cd dual-telegram-bot
    cp .env.example .env

Set your bot tokens in `.env` file
    
    BOT_TOKEN_0=enter_your_token
    BOT_TOKEN_1=enter_your_token
    ...

Optional you can set the greetings in this file

    ...
    GREETING_0=Hello! I am the first bot.
    GREETING_1=Ahoy! I am the second bot.

Install dependencies and run it
    
    npm build
    npm start

On command `/start` in Telegram the bot with token `BOT_TOKEN_0` will say `GREETING_0`.
The bot with token `BOT_TOKEN_1` will say `GREETING_1` 
