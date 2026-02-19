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
        let randomSoldierX = Math.random() * (canvas.width)/4;
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
        soldier.x += (Math.random() - 0.1) * soldier.speed;
        //soldier.y += (Math.random() - 0.1) * soldier.speed;
        ctx.fillStyle = soldier.color;
        ctx.fillRect(soldier.x, soldier.y, 5, 5);
    })
    requestAnimationFrame(animate);
}

animate();
spawnSoldiers();