var xmlHttp = createHttpRequestObject();

//create object
function createHttpRequestObject() {
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlHttp;
}

//called onload
function process() {
    if (xmlHttp) {
        try {
            xmlHttp.open("GET", "tuna.xml", true);
            xmlHttp.onreadystatechange = handleStateChange;
            xmlHttp.send(null);
        } catch (error) {
            alert(error.toString());
        }
    }
}

//whenever state chages
function handleStateChange() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            try {
                handleResponse();
            } catch (error) {
                alert(error.toString());
            }
        }else {
            alert(xmlHttp.statusText);
        }
    }else{
        alert(xmlHttp.readyStateText());
    }
}

//handle the response from the server
function handleResponse() {
    var xmlResponse =xmlHttp.responseXML;
    root = xmlResponse.documentElement;
    names = root.getElementsByTagName("name");
    ssns = root.getElementsByTagName("ssn");

    var stuff ="";
    for (var i=0; i<names.length; i++) {
        stuff = names.item(i).firstChild.data + " - " +ssns.item(i).firstChild.data + "<br>";
    }
    theDiv = document.getElementById("theDiv");
    theDiv.innerHTML = stuff;
}