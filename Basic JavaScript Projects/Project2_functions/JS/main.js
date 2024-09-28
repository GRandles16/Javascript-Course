function getDate() {
    var day = 28;
    var month = "September";
    var date = day + " " + month + " "; //combine date and month
    document.getElementById("date").innerHTML = date + "<br>"; //display day and month together when button is clicked

    var year = 2024
    date += year; //add year to the end of the date
    document.getElementById("fullDate").innerHTML = date; //display full date when button is clicked
}