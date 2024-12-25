function show(){
    var Food = {"starter":"Dumplings", "main":"Ramen", "dessert":"Chocolate mouse"};

    document.getElementById("obj").innerHTML = " For tonights meal we have prepared "+Food.starter +" for a starter and a simple bowl of " + Food["main"] +". For the last course we will serve a yummy dessert of " +Food.dessert;
}
show()