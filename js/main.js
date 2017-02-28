

function startTime() {
var today = new Date()
// function which gets the exact hours in the day
var h = today.getHours()
var m = today.getMinutes()
var s = today.getSeconds()

m = checkTime(m)
s = checkTime(s)
h = militaryTime(h)

document.getElementById("hours").innerHTML = (h)
document.getElementById("minutes").innerHTML = (m)
document.getElementById("seconds").innerHTML = (s)

var t = setTimeout(startTime, 500)

}

function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i
}

function militaryTime(i) {
    if (i > 12) {i = i - 12}  // add zero in front of numbers < 10
    return i
}

startTime()






