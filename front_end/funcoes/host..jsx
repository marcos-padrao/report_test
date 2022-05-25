    //funçoes que pegam os textos de cada tag <host> dentro do xml
var read = new XMLHttpRequest();
read.onreadystatechange = function() { {
    request(this);
    }
};
read.open("GET", "report_test.xml", true);
read.send();

var msg = ""  //variavél que irá receber os textos da tag <host> durante o loop a seguir

function request(text) {
    for (let i =0; i<=5; i++){
    var day = text.responseXML;
    var id = day.getElementsByTagName("host")[i].childNodes[0].nodeValue;
    
    msg = msg + id 
}

document.getElementById("output").innerHTML = msg  //colocando os valores desejados na tela

}

