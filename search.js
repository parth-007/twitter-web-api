console.log("example is up now");
var Twit = require('twit'); // this is how we import the twit package

var config = require('./config') //this is we import the config 



var T = new Twit(config); //this is the object of twit which 


var params = {
q: 'vatsal',
count: 100
} // this is the param variable which will have key and value 



T.get('search/tweets', params,searchedData); // get is the 



function searchedData(err, data, response) {
console.log(data);
} // searchedData function is a callback function which 

