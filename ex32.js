let feu = ["_", "_", "_"]

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function program() {
    while(true){
        feu[0] = "x";
        feu[1] = "_";
        console.log(feu[0] + " | " + feu[1] + " | " + feu[2]);
        await sleep(2000);

        feu[0] = "_";
        feu[2] = "x";
        console.log(feu[0] + " | " + feu[1] + " | " + feu[2]);
        await sleep(2000);

        feu[2] = "_";
        feu[1] = "x";
        console.log(feu[0] + " | " + feu[1] + " | " + feu[2]);
        await sleep(500);
    }
}

program();