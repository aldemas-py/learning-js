var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlHttp;

    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
    else{ 
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlHttp;
}

function process() {
    if (xmlHttp) {
        try {
            xmlHttp.open("GET", "bacon.txt", true);
            xmlHttp.onreadystatechange = handleServerResponse;
            xmlHttp.send(null);
        } catch (e) {
            alert(e.toString());
        }
    }
}
function handleServerResponse() {
    theDiv = document.getElementById("theDiv");
    if (xmlHttp.readyState == 1) {
        theDiv.innerHTML += "Status 1: Server connection established <br>";
    }
    else if (xmlHttp.readyState == 2) {
        theDiv.innerHTML += "Status 2: Request recieved <br>";
    }
    else if (xmlHttp.readyState == 3) {
        theDiv.innerHTML += "Status 3: Processing youe request <br>";
    }
    else if (xmlHttp.readyState == 4) {
        if (xmlHttp.status==200) {
            try {
                texty = xmlHttp.responseText;
                theDiv.innerHTML += "Status 4: Request is finished and page is ready <br>";
                theDiv.innerHTML += texty;
            }  catch (e) {
                alert(e.toString());
            }
        }
        else{
            alert(xmlHttp.statusText);
        }
    }
}
