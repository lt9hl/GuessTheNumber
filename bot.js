
const { Bot } = require('grammy');

const bot = new Bot('8136988777:AAG-gKiiwyH56vhSbh4zWKtaOZE2QVd7-6g');

bot.command('start', (ctx) =>{
    ctx.reply('Привет! Я простой бот. Напиши /help, чтобы узнать, что я умею!');
});

bot.command('help', (ctx) => {
ctx.reply('/start - приветсвие\n/help - помощь\n/echo - повторить сообщение\n/joke - расскажи шутку\n/play - играть');
});

bot.command('echo', (ctx) => {
    const message = ctx.message.text.split(' ').slice(1).join(' ');
    ctx.reply(message || "Пожалуйста, введите сообщение повторения.");
    });

bot.command('joke', async (ctx) => {
    const jokes = [
        '- Вчера долго пыталась объяснить бабуле, что работаю программистом.\n-Удалось?\n- Короче, сошлись на том, что чиню телевизоры и развожу мышей.',
        'Почему ваши дети всё время ссорятся? \n- Конфликт версий.',
        'Программисту нужно попасть на двенадцатый этаж. Он заходит в лифт, нажимает кнопку "1", затем "2" и долго ещё безуспешно ищет глазами клавишу Enter...',

    ];

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    await ctx.reply(randomJoke);
});
let randomNum = 0;
bot.command("play", async (ctx) => {
    randomNum = Math.floor(Math.random() * (600 - 1 + 1)) + 1;
    await ctx.reply('Число загадано. Игра началась..');
  });

    bot.on("message", async (ctx) => {
    
        let text = Number(ctx.msg.text);
        if(randomNum != 0 ){
        if (text < randomNum){
            await ctx.reply('Загаданное число больше');}  
        else if (text > randomNum){
            await ctx.reply('Загаданное число меньше');}
        else {
            randomNum = 0;
            await ctx.reply('Вы выиграли!\nПоздравляем!');
        } 
        }
        
      });
bot.start();
console.log('Бот запущен...')