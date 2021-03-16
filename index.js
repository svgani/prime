var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var num = prime();
    console.log(num);
    // response.write(num);
    response.write(""+num, 'utf16', () => { 
        console.log("Writing string Data..."); 
    }); 
    response.end();
 }).listen(8080);

 function checkPrime(x){
    var j;
    for(j=2;j<x;j++){
        if(x%j==0){
            return false;
        }
    }
    return true;
}

function prime(){
    var pNum,i;
    for(i=2;i<5000;i++){
        if(checkPrime(i))
            pNum=i;
    }
    return pNum;
}
console.log('Server running at http://127.0.0.1:8080/');