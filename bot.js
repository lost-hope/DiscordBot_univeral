const Discord = require('discord.js');
const{
    prefix,
    token,
} = require('./config.json');
const ytdl = require('ytdl-core');

const client = new Discord.client();
client.login(token);

client.once('ready',() =>{
    console.log("Ready!");
});
client.once('reconnecting',() =>{
    console.log("Reconnecting!");
});
client.once('disconnect',() =>{
    console.log("Disconnect!");
});

client.on('message',async message =>{
    
if(message.author.bot) return;

})