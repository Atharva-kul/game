const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const rect = canvas.getBoundingClientRect();

canvas.width = rect.width;
canvas.height = rect.height;

const soldiers = [];

function spawnSoldiers() {
    const blueButton = document.getElementById("spawn_blue");
    const redButton = document.getElementById("spawn_red");


    blueButton.addEventListener("click", () => {
        // Logic to spawn blue soldiers
        let randomSoldierX = Math.random() * (canvas.width / 10);
        let randomSoldierY = Math.random() * canvas.height;
        soldiers.push({
            x: randomSoldierX,
            y: randomSoldierY,
            color: "blue",
            speed: 2
        });
        // ctx.fillRect(randomSoldierX, randomSoldierY, 5, 5);
        }); // Example drawing of a blue soldier

        console.log("Spawning blue soldiers...");
    

    redButton.addEventListener("click", () => {
        // Logic to spawn red soldiers
        ctx.fillStyle = "red";
        // This spawns them in the last 10% of the right side
        let randomSoldierX = canvas.width - (Math.random() * (canvas.width / 10)) - 10;
        randomSoldierY = Math.random() * canvas.height;
        soldiers.push({
            x: randomSoldierX,
            y: randomSoldierY,
            color: "red",
            speed: -2
        });
        // ctx.fillRect(randomSoldierX, randomSoldierY, 5, 5); // Example drawing of a red soldier
        console.log("Spawning red soldiers...");
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    soldiers.forEach(soldier => {
        // Move soldiers randomly
        soldier.x += (Math.random()) * soldier.speed;
        //soldier.y += (Math.random() - 0.1) * soldier.speed;
        ctx.fillStyle = soldier.color;
        ctx.fillRect(soldier.x, soldier.y, 5, 5);
    })

    checkSoldierCollisions();

    requestAnimationFrame(animate);
}

function checkSoldierCollisions() {
    // Loop backward through the array
    for (let i = soldiers.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            const soldierA = soldiers[i];
            const soldierB = soldiers[j];

            // Safety check in case they were already removed
            if (!soldierA || !soldierB) continue;

            if (Math.abs(soldierA.x - soldierB.x) < 5 && 
                Math.abs(soldierA.y - soldierB.y) < 5) {
                
                // Remove the higher index first (i), then the lower (j)
                //soldiers.splice(i, 1);
                //soldiers.splice(j, 1);
                soldierA.color="purple"
                soldierB.color="purple"
                soldierA.speed=0
                soldierB.speed=0

                //console.log("Murasaki!")
                
                // Break inner loop, but outer loop will continue correctly
                break; 
                //console.log("Collision detected! Soldiers removed.");
            }
        }
    }
}


animate();
spawnSoldiers();