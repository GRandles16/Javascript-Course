var mclaren = { // initiate dictionary
    ceo: "Zac Brown",
    team_principle: "Andrea Stella",
    driver1: "Lando Norris",
    driver2: "Oscar Piastri",
    engine: "Mercedes"
}

function my_Dictionary() {
    document.getElementById("Dictionary").innerHTML = "McLarens first driver is " + mclaren.driver1; // print value in dictionary
}

function delete_Value() {
    delete mclaren.engine; // remove value from dictionary
    document.getElementById("deletion").innerHTML = "McLarens engine provider is " + mclaren.engine; // try print a deleted value from dictionary
}