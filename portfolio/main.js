console.log("test")
// alert("this is an alert")
let response = prompt("What's your name?")

let greet = document.getElementById("greet").innerHTML = response
greet.innerHTML = "hi " + response

var image = document.getElementById('image')
image.src = "cat.png"
console.log("hi " + response)