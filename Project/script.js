const tilesContainer = document.querySelector(".tiles");


const colors = ["red", "pink", "green", "orange", "cyan", "yellow", "white", "purple"];

const listofpicks = [...colors, ...colors];

const tilescount = listofpicks.length;


//game state 
let reveal = 0;
let activeTile = null;
let awaitingMovetoEnd = false;





// build of tiles


function buildtile(color) {

    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-color", color);
    element.setAttribute("data-revealed", "false")
    element.addEventListener("click", () => {
        const revealed = element.getAttribute("data-revealed", "false");
        if (awaitingMovetoEnd ||
            revealed == true
            || element == activeTile) {

            return;
        }
        element.style.backgroundColor = color

        if (!activeTile) {

            activeTile = element
            return;
        }

        const matchcolor = activeTile.getAttribute("data-color");

        if (matchcolor === color) {

            element.setAttribute("data-revealed", "true");
            activeTile.setAttribute("data-revealed", "true")
            awaitingMovetoEnd = false;
            activeTile = null;
            reveal += 2

            if (reveal === tilescount) {

                alert("you win! Refresh to start again")

            }
            return;
        }

        // down

        awaitingMovetoEnd = true;

        setTimeout(() => {
            element.style.backgroundColor = null;
            activeTile.style.backgroundColor = null;
            activeTile = null;
            awaitingMovetoEnd = false;
        }, 1000)
    })

    return element

}

for (let i = 0; i < tilescount; i++) {

    const randomNum = Math.floor(Math.random() * listofpicks.length);

    const color = listofpicks[randomNum];

    const tile = buildtile(color);

    listofpicks.splice(randomNum, 1)

    tilesContainer.appendChild(tile)

}