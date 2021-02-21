var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=c4c17f7487428c23c01090220e623f3b')
. then(response => response.json())
.then(data => console.log(data))
