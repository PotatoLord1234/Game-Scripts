const slope = {
    gameTitle: "Slope",
    src: "https://samsclubdeals.ml",
    gameDesc: "Slope is an incredible game where you are a ball working your way down a never ending slope!",
}

function game({gameTitle, src, gameDesc}) {
    //changes the title
    document.getElementById("gameTitle").innerHTML = gameTitle;
    //changes the game SRC (embeds the game)
    document.getElementById("gameSrc").src = src;
    //changes the description 
    document.getElementById("gameDesc").innerHTML = gameDesc;
    //for testing purposes 
    console.log(gameTitle + " " + src + " " + gameDesc);
}