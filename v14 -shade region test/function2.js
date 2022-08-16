function myFunction2() {
    let userInput2 = document.querySelector("#userInput2");
    let message2 = document.querySelector("#message2");
    //let message3 = document.querySelector("#message3");

       message2.innerHTML = "Your q value is: " + userInput2.value ;
    
    if (userInput2.value > 0.216)
           message2.innerHTML = "Moon is easily visible in your location";
    if (0.216 >= userInput2.value > -0.014)
           message2.innerHTML = "Moon is visible under perfect consitions in your location";
    if (-0.014 >= userInput2.value > -0.160)
           message2.innerHTML = "You may need to use optical aid to find the new crescent in your location";
    if (-0.160 >= userInput2.value > -0.232)
           message2.innerHTML = "You will need to use optical aid to find the new crescent in your location";
    if (-0.232 >= userInput2.value > -0.293)
           message2.innerHTML = "You will not be able to see the crescent with a telescope in your location";
    if (userInput2.value <= -0.293)
           message2.innerHTML = "Moon is not visible in your location";
    else 
       message2.innerHTML = "q must be between -0.293 and 0.216 to show visibility criteria";
 
}

