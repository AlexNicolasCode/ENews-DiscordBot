const Discord = require("discord.js");
const client = new Discord.Client();
const fs  = require('fs');

client.login('TOKEN');

loadNews();
setInterval(loadNews, 600000);

function loadNews() {
  require('./requests/commands.js');
  require('./requests/searchLoL.js');
  setTimeout(function(){require('./requests/searchCSGO.js');}, 10000);
  setTimeout(function(){require('./requests/searchR6.js');}, 20000);
  setTimeout(function(){require('./requests/searchValorant.js');}, 30000);
  console.log("reloading...")
};