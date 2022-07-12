// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    console.log("Window loaded.");
const takeOff = document.getElementById('takeoff');
const landing = document.getElementById("landing");
const missionAbort = document.getElementById("missionAbort"); 
const shuttleBackground = document.getElementById("shuttleBackground")
const spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
const up = document.getElementById("up");
const down = document.getElementById("down")
const right = document.getElementById("right")
const left = document.getElementById("left")
const rocket = document.getElementById("rocket")

takeOff.addEventListener('click', function(){
let input = window.confirm("Confirm that the shuttle is ready for takeoff.")
if (input) {flightStatus.innerHTML = "Shuttle in flight." ;
shuttleBackground.style.backgroundColor = "blue";
spaceShuttleHeight.innerHTML = "10000";
 }
else { flightStatus.innerHTML = "Space shuttle ready for takeoff"; 
        shuttleBackground.style.backgroundColor = ""  
    };
 })
 landing.addEventListener('click', function(){
  let input = window.confirm("The shuttle is landing. Landing gear engaged")
  if (input) {flightStatus.innerHTML = "The shuttle has landed.";
  shuttleBackground.style.backgroundColor = "";
  }  
 })
 missionAbort.addEventListener('click', function(){
    let input = window.confirm("Confirm that you want to abort the mission.")
    if (input) {flightStatus.innerHTML = "Mission aborted.";
    shuttleBackground.style.backgroundColor = "";
    spaceShuttleHeight.innerHTML = "0"
 }
 })
 up.addEventListener('click', function(){
    let movement= parseInt(spaceShuttleHeight.innerHTML);
    spaceShuttleHeight.innerHTML = (movement + movement)
    
 })
 down.addEventListener('click', function(){
    let movement= parseInt(spaceShuttleHeight.innerHTML);
    let tenK = "10000"
    let tenkDown = parseInt(tenK)
    spaceShuttleHeight.innerHTML = (movement - tenkDown)
     })
     left.addEventListener('click', function(){
        parseInt(rocket.style.left, 10)
     })
    

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
