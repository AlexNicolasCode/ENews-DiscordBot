const Discord = require("discord.js");
const client = new Discord.Client();
const request = require('request');
const cheerio  = require('cheerio');

// login
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
  })

// commands
client.on("message", msg => {
   if (msg.content == "!commands") {
    msg.reply("My commands: !font !about !news !lol !r6 !csgo !valorant");
    }
})

// about
client.on("message", msg => {
   if (msg.content == "!about") {
    msg.reply("Hi! My name is E-News, I'm a bot developed for Alex Nicolas. Se my documentation on GitHub: ");
    }
})

// font: Mais Esports
client.on("message", msg => {
   if (msg.content == "!font") {
    msg.reply("Font: https://maisesports.com.br");
    }
})


// all news
var arr = [];

request("https://maisesports.com.br", function(err, res, body){
  if(!err && res.statusCode == 200) {
    let $ =  cheerio.load(body);

    $('h4').each(function(){
    arr.push($(this).html());
    })
  }

  if (arr.length > 20) {
    arr.length = 20;
  }

  client.on("message", msg => {
    if (msg.content == "!news") {
      msg.reply("As notícias de hoje são: ");
      msg.reply(arr);
    }
  })

})

// all news about Valorant
var arrValorant = [];

request("https://maisesports.com.br/valorant/", function(err, res, body){
  if(!err && res.statusCode == 200) {
    let $ =  cheerio.load(body);

    $('h4').each(function(){
    arrValorant.push($(this).html());
    })
  }

  if (arrValorant.length > 20) {
    arrValorant.length = 20;
  }

  client.on("message", msg => {
    if (msg.content == "!valorant") {
      msg.reply("As notícias de hoje são: ");
      msg.reply(arrValorant);
    }
  })

})

// all news about CSGO
var arrCSGO = [];

request("https://maisesports.com.br/cs-go/", function(err, res, body){
  if(!err && res.statusCode == 200) {
    let $ =  cheerio.load(body);

    $('h4').each(function(){
    arrCSGO.push($(this).html());
    })
  }

  if (arrCSGO.length > 20) {
    arrCSGO.length = 20;
  }

  client.on("message", msg => {
    if (msg.content == "!csgo" ) {
      msg.reply("As notícias de hoje são: ");
      msg.reply(arrCSGO);
    }
  })

})

// all news about League of Legends
var arrLoL = [];

request("https://maisesports.com.br/league-of-legends/", function(err, res, body){
  if(!err && res.statusCode == 200) {
    let $ =  cheerio.load(body);

    $('h4').each(function(){
    arrLoL.push($(this).html());
    })
  }

  if (arrLoL.length > 20) {
    arrLoL.length = 20;
  }

  client.on("message", msg => {
    if (msg.content == "!lol") {
      msg.reply("As notícias de hoje são: ");
      msg.reply(arrLoL);
    }
  })

})

// all news about Rainbow Six
var arrR6 = [];

request("https://maisesports.com.br/rainbow-six/", function(err, res, body){
  if(!err && res.statusCode == 200) {
    let $ =  cheerio.load(body);

    $('h4').each(function(){
    arrR6.push($(this).html());
    })
  }

  if (arrR6.length > 20) {
    arrR6.length = 20;
  }

  client.on("message", msg => {
    if (msg.content == "!r6") {
      msg.reply("As notícias de hoje são: ");
      msg.reply(arrR6);
    }
  })

})

// client login
client.login('TOKEN') // you need to get a token, please create a bot: https://discord.com/developers/applications