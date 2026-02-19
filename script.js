const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function spawnSoldiers() {
    const blueButton = document.getElementById("spawn_blue");
    const redButton = document.getElementById("spawn_red");

    blueButton.addEventListener("click", () => {
        // Logic to spawn blue soldiers
        ctx.fillStyle = "blue";
        randomSoldierX = Math.random() * canvas.width;
        randomSoldierY = Math.random() * canvas.height;
        ctx.fillRect(randomSoldierX, randomSoldierY, 3, 3); // Example drawing of a blue soldier
        ctx.fillRect(2, 2, 3, 3); // Example drawing of a blue soldier


        console.log("Spawning blue soldiers...");
    });

    redButton.addEventListener("click", () => {
        // Logic to spawn red soldiers
        ctx.fillStyle = "red";
        randomSoldierX = Math.random() * canvas.width;
        randomSoldierY = Math.random() * canvas.height;
        ctx.fillRect(randomSoldierX, randomSoldierY, 3, 3); // Example drawing of a red soldier
        ctx.fillRect(2, 2, 3, 3);
        console.log("Spawning red soldiers...");
    });
}

spawnSoldiers();