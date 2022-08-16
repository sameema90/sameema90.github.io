function myFunction() {
    let userInput = document.querySelector("#userInput");
    let message = document.querySelector("#message");

    message.innerHTML = "Your Location is: " + userInput.value;
}