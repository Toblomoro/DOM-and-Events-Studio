// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    console.log("Window loaded.");
const takeOff = document.getElementById('takeoff');
const landing = document.getElementById("landing");
const missionAbort = document.getElementById("missionAbort"); 
const shuttleBackground = document.getElementById("shuttleBackground")
const spaceShuttleHeight = document.getElementById("spaceShuttleHeight")

takeOff.addEventListener('click', function(){
let input = window.confirm("Confirm that the shuttle is ready for takeoff.")
if (input) {flightStatus.innerHTML = "Shuttle in flight." ;
shuttleBackground.backgroundColor = "blue";
spaceShuttleHeight = 10000
 }
else {
        flightStatus.innerHTML = "Space shuttle ready for takeoff"; 
        shuttleBackground.backgroundColor = ""  } ;
 }
    )
   /* takeOff.addEventListener('click', function(){
        let input = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (input) {   shuttleBackground.backgroundColor = "blue" ;
    }
        else {
            
            shuttleBackground.backgroundColor = "" }
        })*/
    })
    
/*takeOff.addEventListener('click', function() {
    if ( window.confirm("Confirm that the shuttle is ready for takeoff.")){
        flightStatus.innerHTML = "Shuttle in flight"; 
        color = 'blue';
        } else {flightStatus.innerHTML = "Space shuttle ready for takeoff" } ;

    })*/
