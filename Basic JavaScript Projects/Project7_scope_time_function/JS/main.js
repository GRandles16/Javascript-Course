// global variable
var X = 10;

// adds global and local variables
function add_number_1() {
    // local variable
    var y = 10;
    console.log(X + y + "<br>");
}

// creates console error as y is not initiated in function
function add_number_2() {
    console.log(X + y)
}

add_number_1();
add_number_2();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// funtion that check to see if user is tall enough
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    if (Height < 52) {
        Can_ride = "You are too short to ride.";
    }
    else {
        Can_ride = "You are tall enough to ride.";
    }
    document.getElementById("Ride").innerHTML = Can_ride;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}