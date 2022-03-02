let score = 0;
const num_span = document.getElementById("num");
const green_div = document.getElementById("green");
const red_div = document.getElementById("red");


function scoreAddOrSubtract(choice) {
    if(choice == "add"){
        score++;
        num_span.innerHTML = score;
    } else if(choice == "minus" && score > 0) {
        score--;
        num_span.innerHTML = score;
    }
}
function main() {
    green_div.addEventListener("click", function() {
        scoreAddOrSubtract("add");
    });
    red_div.addEventListener("click", function() {
        scoreAddOrSubtract("minus");
    });
}
main();
