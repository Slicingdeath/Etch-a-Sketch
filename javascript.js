const GRID_SIZE = 800;

function initializeGrid(num_squares = 16) {
    const grid = document.querySelector(".grid");
    grid.innerHTML = "";
    let square_size = GRID_SIZE / num_squares;
    for (let i = 0; i < num_squares; i++) {
        for (let j = 0; j < num_squares; j++) {
            const square = document.createElement("div");
            square.style.width = `${square_size}px`;
            square.style.height = `${square_size}px`;
            square.addEventListener("mouseover", changeGrid);
            grid.appendChild(square);
        }
    }
}

function changeGrid(event) {
    event.target.style.backgroundColor = "black";
}

const grid_info = document.querySelector("#new_grid");
grid_info.addEventListener("click", function() {
    let user_input = prompt("Please enter the number of squares you want per side between 0 and 100");
    let num_squares = parseInt(user_input)
    if (num_squares > 0 && num_squares <= 100) {
        initializeGrid(num_squares);
    } else {
        alert("Entry invalid, must be a number between 0 and 100");
    }
});

initializeGrid();

