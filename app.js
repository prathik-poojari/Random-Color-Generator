let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let strings = randomColor();
    h3.innerText = strings;
    console.log(strings);
    let div = document.querySelector("div");
    div.style.backgroundColor = strings;
});

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red} , ${green} , ${blue})`;
    return color;

}

btn.addEventListener("keydown",function(event){
    console.log("Key : ",event);
    console.log("Code : ",event.code);

});