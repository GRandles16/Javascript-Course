function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("addition").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("subtraction").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication_Function() {
    var multiplication = 6 * 8;
    document.getElementById("multiplication").innerHTML = "6 * 8 = " + multiplication;
}

function division_Function() {
    var division = 48 / 6;
    document.getElementById("division").innerHTML = "48 / 6 = " + division;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("multiple_operators").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("modulus").innerHTML = "When you divide 25 by 6 you have a remainder of:  " + simple_Math;
}

function negative_Operator() {
    var x = 10;
    document.getElementById("negative").innerHTML = -x + " is the negative version of " + x;
}

function incrementation() {
    var x = 5;
    document.getElementById("increment").innerHTML = x++ + " incremented is " + x; // the incrementation had to be done on the first X as is takes effect after the value is used
}

function decrementation() {
    var x = 5.25;
    document.getElementById("decrement").innerHTML = x-- + " decremented is " + x; // the decrementation had to be done on the first X as is takes effect after the value is used
}

function random_Number() {
    var x = Math.random() * 100;
    document.getElementById("random").innerHTML = "Here is a random number between 0 and 100: " + x;
}