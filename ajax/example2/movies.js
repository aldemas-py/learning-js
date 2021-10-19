function createList(){
    var s;
    s = "<ul>"
        +"<li>Taken</li>"
        +"<li>Missin Imposible</li>"
        +"<li>Jonny english</li>"
        +"</ul>"

    divMovies =document.getElementById('divMovies');

    divMovies.innerHTML = s
}

function gametime() {
    title = document.createTextNode("here are some things! ");
    list =document.createElement("ul");

    item1 = document.createElement("li");
    text1 = document.createTextNode("Old Dan");
    item1.appendChild(text1);

    item2 = document.createElement("li");
    text2 = document.createTextNode("the new dan");
    item2.appendChild(text2);

    item3 = document.createElement("li");
    text3 = document.createTextNode("patric sweyzy");
    item3.appendChild(text3); 

    list.appendChild(item1);
    list.appendChild(item2);
    list.appendChild(item3);

    theDiv = document.getElementById("theDiv");
    theDiv.appendChild(title);
    theDiv.appendChild(list);

}