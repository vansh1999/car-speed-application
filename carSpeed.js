var interval = []

function initMovement(car,speed) {
    
  var carObj = document.getElementById(car)
  var left = 0

  interval.car = setInterval(function(){

       left += speed/100
       carObj.style.left = left + "px"

       if(left >= 630) //finish
        {
            for(var i in interval) 
            {
                clearInterval(interval[i]);
            }
            document.getElementById("start").disabled = false;
            document.getElementById("stop").disabled = true;
        }


      

  },1)

 }


function start() {
    var speed1 = document.getElementById("speed1").value
    var speed2 = document.getElementById("speed2").value

    if(speed1 > 1000 || speed2 > 1000){
        alert("speed limit of cars is 1000 px/sec")
        return false
    }


    initMovement("car1",speed1)
    initMovement("car2",speed2)
        document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;

   

    return true
    
}


 function stop() 
 {
     for(var i in interval) 
    {
         clearInterval(interval[i]);
     }
     document.getElementById("start").disabled = false;    
     document.getElementById("stop").disabled = true;
 }

 function reset() {

    for(var i in interval) 
    {
         clearInterval(interval[i]);
     }
    
    document.getElementById("car1").style.left = "0px";
    document.getElementById("car2").style.left = "0px";

    document.getElementById("start").disabled = false;    
    document.getElementById("stop").disabled = true;

 }

 



 

 
