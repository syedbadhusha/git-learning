var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    for(i=0;i<res.length;i++){
        // var comm = res[i].name
        //console.log(comm.common);
        console.log("Capital : " + res[i].capital + " Area : " + res[i].area)
    }
}