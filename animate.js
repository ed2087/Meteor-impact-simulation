/////////////////////////////////////////
//          GLOBAL.JS 
// contains all of the glabal resources
/////////////////////////////////////////

const animate = () => {

    animationID = requestAnimationFrame(animate);  

    c.fillStyle ="rgba(0, 0, 0, 0.1)";
    c.fillRect(0, 0, width, height);


    //draw planet
    //console.log(planet_)
    sun_.atmosphereColor = false; 

    //animate meteoros
    animate_meteoros();
    //particles
    animateParticles();

    sun_.update()

    //planets
    rotate_planets();
    moonImpact();


    //check years and close calls 
    if(dayTick > 365){// if days more then 365 then it will be a year 
        years++;       
        writeHTML("data1", `Years : ${years} Y-PS : ${years - 2012}`)        
        dayTick = 0;
    }
    dayTick++
    
}

animate()



/// controll meteors
meteorSpeed
id("spawnSpeed").value = spawnSpeed_m;
id("meteorSize").value = meteorsSize;
id("meteorSpeed").value = meteorSpeed;

id("spawnSpeed").addEventListener("change", (e) => spawnSpeed_m = e.target.value);
id("meteorSize").addEventListener("change", (e) => meteorsSize = e.target.value);
id("meteorSpeed").addEventListener("change", (e) => meteorSpeed = e.target.value);

