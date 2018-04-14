
var pos = {
   
};

let url = ("https://api.darksky.net/forecast/a1e2c034cc0988736d3da59909cc21f6/" + lat + "," + lng );
function weatherdata() {
    $.ajax({
        url : url,
        dataType : 'JSONP',
        success : function (data) {
            console.log(data);
        }
    })
}
weatherdata();

// function getWeather() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET','https://api.darksky.net/forecast/a1e2c034cc0988736d3da59909cc21f6/' + 'lat' + ',' + 'lng'  ,false);
//     output.innerHTML = '<p>'xhr'</p>';
// }
// xhr.send();




//https://api.darksky.net/forecast/a1e2c034cc0988736d3da59909cc21f6/37.8267,-122.4233