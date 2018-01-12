
var gameContainer = document.getElementById('game');
gameContainer.addEventListener('click',f);

function f(event) {
    var currentID = event.target.dataset.page
    if (currentID=='first'){
    gameContainer.innerHTML= "Let's check out desk.Desks always have something  <br> <br>"  + "It's a joke hahahaha :)))))"
    gameContainer.style.textAlign = "center";
    document.body.style.backgroundImage="url(wes.jpg)";
    console.log(document.body.style.backgroundImage.url)
}
else if (currentID=='second'){
    gameContainer.innerHTML= "batata"
    gameContainer.style.textAlign= "center";
    document.body.style.backgroundImage = "url(download.jpeg)";
}
else if(currentID=='third'){
    gameContainer.innerHTML= "RIP !! You are DEAD"
    gameContainer.style.textAlign= "center";
    document.body.style.backgroundImage = "url(images.jpeg)";
}
}

