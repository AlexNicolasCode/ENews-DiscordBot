const Discord = require("discord.js");
const client = new Discord.Client();
const fs  = require('fs');

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login('ODIwNzkwNzc1MTU4ODAwMzk1.YE6S-g.dG8Nrs57_ZiFl0RpWTDut0ESfA8');

setTimeout(function() {
  console.log('ready!');

  client.on("message", msg => {
    if (msg.content == "!lol") {
      let dataLoL = fs.readFileSync('./requests/links/linksLoL.txt', 'utf8');
      msg.channel.send(dataLoL);  
      console.log("New message has been sended!")
    }
  });
  
  client.on("message", msg => {
    if (msg.content == "!csgo") {
      let dataCSGO = fs.readFileSync('./requests/links/linksCSGO.txt', 'utf8');
      msg.channel.send(dataCSGO);  
      console.log("New message has been sended!")
    }
  });

  client.on("message", msg => {
    if (msg.content == "!r6") {
      let dataR6 = fs.readFileSync('./requests/links/linksR6.txt', 'utf8');
      msg.channel.send(dataR6);  
      console.log("New message has been sended!")
    }
  });

  client.on("message", msg => {
    if (msg.content == "!valorant") {
      let dataValorant = fs.readFileSync('./requests/links/linksValorant.txt', 'utf8');
      msg.channel.send(dataValorant);  
      console.log("New message has been sended!")
    }
  });
}, 40000);

client.on("message", msg => {
  if (msg.content == "!commands") {
    msg.channel.send("My commands: !font !about !news !lol !r6 !csgo !valorant");
    console.log("New message has been sended!")
  }
});

client.on("message", msg => {
  if (msg.content == "!about") {
    msg.channel.send("Hi! My name is E-News, I'm a bot developed for Alex Nicolas. Se my documentation on GitHub: ");
    console.log("New message has been sended!")
  }
});

client.on("message", msg => {
  if (msg.content == "!font") {
    msg.channel.send("Font: https://news.google.com");
    console.log("New message has been sended!")
  }
});