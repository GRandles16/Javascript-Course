function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Intruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Intruments.length; Y++) {
        Content += Intruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var fruits = [];
    fruits[0] = "apple";
    fruits[1] = "banana";
    fruits[2] = "pear";
    fruits[3] = "pineapple";
    fruits[4] = "tomato";
    document.getElementById("Array").innerHTML = fruits;
}

function constant_funciton() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "€900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.color + " " + Musical_Instrument.type +
        " was " + Musical_Instrument.price;
}

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "This car is a " + this.year + this.color + this.make +
            this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
