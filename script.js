document.getElementById("changeText").addEventListener("click", function() {
    document.getElementById("text").textContent = "You clicked the button!";
});

document.getElementById("changeColor").addEventListener("click", function() {
    let colors = ["red", "blue", "green", "yellow", "purple"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("colorBox").style.backgroundColor = randomColor;
});
