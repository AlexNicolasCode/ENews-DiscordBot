const Discord = require("discord.js");
const client = new Discord.Client();
const fs  = require('fs');

client.login('TOKEN');

loadNews();
setInterval(loadNews, 600000);

function loadNews() {
  require('./requests/searchLoL.js');
  setTimeout(function(){require('./requests/searchCSGO.js');}, 10000);
  setTimeout(function(){require('./requests/searchR6.js');}, 20000);
  setTimeout(function(){require('./requests/searchValorant.js');}, 30000);
  console.log("reloading...")
};

setTimeout(function() {
  console.log('ready!');

  client.on("message", msg => {
    if (msg.content == "!lol") {
      let dataLoL = fs.readFileSync('./requests/links/linksLoL.txt', 'utf8');
      msg.reply(dataLoL);  
      console.log("New message has been sended!")
    }
  });
  
  client.on("message", msg => {
    if (msg.content == "!csgo") {
      let dataCSGO = fs.readFileSync('./requests/links/linksCSGO.txt', 'utf8');
      msg.reply(dataCSGO);  
      console.log("New message has been sended!")
    }
  });

  client.on("message", msg => {
    if (msg.content == "!r6") {
      let dataR6 = fs.readFileSync('./requests/links/linksR6.txt', 'utf8');
      msg.reply(dataR6);  
      console.log("New message has been sended!")
    }
  });

  client.on("message", msg => {
    if (msg.content == "!valorant") {
      let dataValorant = fs.readFileSync('./requests/links/linksValorant.txt', 'utf8');
      msg.reply(dataValorant);  
      console.log("New message has been sended!")
    }
  });
}, 40000);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content == "!commands") {
    msg.reply("My commands: !font !about !news !lol !r6 !csgo !valorant");
    console.log("New message has been sended!")
  }
});

client.on("message", msg => {
  if (msg.content == "!about") {
    msg.reply("Hi! My name is E-News, I'm a bot developed for Alex Nicolas. Se my documentation on GitHub: ");
    console.log("New message has been sended!")
  }
});

client.on("message", msg => {
  if (msg.content == "!font") {
    msg.reply("Font: https://news.google.com");
    console.log("New message has been sended!")
  }
});