// display typeof
document.write("The type of \"Hi\" is: " + typeof "Hi" + "<br>");
document.write("The type of (\"10\" + 5) is: " + typeof ("10" + 5) + "<br>");

// display infinity
function showInfinity() {
    document.getElementById('infinity').innerHTML = 2E310;
}

//display // negative infinity
function showNegInfinity() {
    document.getElementById('neg_infinity').innerHTML = -2E310;
}

// display logic operators
document.write("The result of 4 > 2: ");
document.write(4 > 2);
document.write("<br>");

// print to console log
console.log(10 + 5);
console.log(5 > 10);

// display double
document.write("The result of 120 + 60 = 190: ");
document.write(120 + 60 == 190);
document.write("<br>");

// display triple =
document.write("Is 10 === 10: ");
document.write(10 === 10);
document.write("<br>");

document.write("Is 10 === 'space': ");
document.write(10 === 'space');
document.write("<br>");

document.write("Is 10 === '10': ");
document.write(10 === '10');
document.write("<br>");

document.write("Is 10 === 20: ");
document.write(10 === 20);
document.write("<br>");

// display AND operator
document.write("5 === 5 && 10 === 10: ");
document.write(5 === 5 && 10 === 10);
document.write("<br>");

document.write("5 === 5 && 10 === '10': ");
document.write(5 === 5 && 10 === '10');
document.write("<br>");

// display OR operator
document.write("5 === 5 || 10 === '10': ");
document.write(5 === 5 || 10 === '10');
document.write("<br>");

document.write("5 === '5' || 10 === '10': ");
document.write(5 === '5' || 10 === '10');
document.write("<br>");

// display NOT operator
document.write("!(5 > 2): ");
document.write(!(5 > 2));
document.write("<br>");

document.write("!(5 < 2): ");
document.write(!(5 < 2));
document.write("<br>");