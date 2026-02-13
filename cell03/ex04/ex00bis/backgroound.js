function getRandomcolor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

$(document).ready(function() {
    $("#color-Btn").click(function() {
        $("body").css("background-color", getRandomcolor());
    });
});
    

console.log("Hello")