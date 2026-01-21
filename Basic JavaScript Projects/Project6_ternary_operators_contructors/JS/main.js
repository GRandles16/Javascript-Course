// funtion that check to see if user is tall enough
function ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// function to create a shape of any type
function Shape(type) {
    this.Shape_type = type;
}

// function that creates shape and displays type
function create_Shape() {
    var shape = new Shape("square");
    document.getElementById("New_and_This").innerHTML = "You have created a " + shape.Shape_type;
}

// nested function example
function count_Function() {
    document.getElementById("Counting").innerHTML = count();
    function count() {
        var starting_point = 9;
        function plus_one() {starting_point += 1;}
        plus_one();
        return starting_point;
    }
}