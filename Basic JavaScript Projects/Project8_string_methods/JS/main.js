// Example of concatenation
function full_Sentence() {
    var part_1 = "Hello ";
    var part_2 = "world! ";
    var part_3 = "This is ";
    var part_4 = "concatenation.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// Example of slicing strings
function slice_Method() {
    var Sentence = "Ferrari and McLaren are long time bitter F1 rivals.";
    var Section = Sentence.slice(12, 19);
    document.getElementById("Slice").innerHTML = Section;
}

// Example of toString
function toString_Method() {
    var X = "123456789";
    document.getElementById("Stringify").innerHTML = X.toString();
}

// Example of toPrecision
function precision_Method() {
    var pi = 3.14159265358979323846;
    document.getElementById("Precision").innerHTML = pi.toPrecision(10);
}