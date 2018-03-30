const Discord = require("discord.js");
var bot = new Discord.Client();
bot.on("ready",function(){
    bot.user.setGame("BricelaPute");
    console.log("le bot a bien été connecter")

});
bot.login("NDI5MzE5MzE3MzY1MDYzNjgw.DaAJuA.1J8HuC4E0AAKK_nbDhtcDg7Qtmo")
