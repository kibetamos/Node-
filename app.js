const express = require("express");
const app = express();
 
//Sets the public folder as the external file folder
app.use(express.static("public"));
 
//Officially sets the view engine as ejs, therefore setting the default file type for readering to .ejs
app.set("view engine", "ejs");
 
app.get("/", function(req, res){
    res.render("homepage"); 
});
 
app.get("/game/:gameTitle/:gameCreator", function(req, res){
    const title = req.params.gameTitle;
    const creator = req.params.gameCreator;
    res.render("game", {
        title: title,
        creator: creator
    });
});
 
app.get("/list", function(req, res){ 
 
    const games = [
        {title: "Fortnite", creator: "Epic Games"},
        {title: "Dirty Bomb", creator: "Splash Damage"},
        {title: "Battlefield 1", creator: "EA"}
    ]
 
    res.render("list", {
        gamesList: games
    });
});
app.listen("3000", function(){
    console.log("we are live now");
});
