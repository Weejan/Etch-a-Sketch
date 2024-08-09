let container = document.querySelector("#container")
let boxSize = 33.2
let gridSize = 19
//function to create the grid
function grid(gridSize){
        let boxSize = 500/ gridSize
    for(i = 0; i < gridSize; i++){
        let column = document.createElement('div');
        for(j = 0; j < gridSize; j++){
            let row = document.createElement('div');
            row.setAttribute("class" ,"sqr-box")
            boxSizing(row,boxSize);
            column.appendChild(row);
        }
        container.appendChild(column)
    }
}

//function to set box size of the grid
function boxSizing(row,boxSize){
    row.style.height = `${boxSize}px`
    row.style.width = `${boxSize}px`
}

//hover effect of each grid
function hover(){
    let box = document.querySelectorAll(".sqr-box")
    box.forEach((item)=>{item.addEventListener('mouseover',()=>{
        item.style.backgroundColor = "black"})
    })
}

//function to change grid after initial grid
function gridButton(){
    let button = document.createElement('button');
    button.textContent = "Change Grid";
    button.addEventListener('click',()=>{
        gridSize = prompt("Input your grid size up to 100")

        if (gridSize <= 100 && gridSize >= 1){
            let div = document.querySelectorAll('div');
            div.forEach((item)=>{item.remove();})
            grid(gridSize)
            hover()
        }else{
                alert("Invalid grid size! Should be less that 100!!")
            }
        }
    )
    button.style.marginLeft = "127.31px";
    document.body.appendChild(button)
}

//function to clear scribble on the grid
function clearButton(){
    let button = document.createElement('button');
    button.textContent = "Clear";
    button.addEventListener(
        'click',()=>{
            let div = document.querySelectorAll('div');
            div.forEach((item)=>{item.style.backgroundColor = 'transparent'});
        }
    )   
    document.body.appendChild(button)
}

function rainbowHover(){
    let box = document.querySelectorAll(".sqr-box")
    box.forEach((item)=>{item.addEventListener('mouseover',()=>{
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        console.log(red)
        item.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
;})
    })
}

function rainbowButton(){
    let button = document.createElement('button');
    button.textContent = "Rainbow";
    button.addEventListener('click',rainbowHover)   
    document.body.appendChild(button)
}

function blackButton(){
    let button = document.createElement('button');
    button.textContent = "Black";
    button.addEventListener('click',hover)   
    document.body.appendChild(button)
}

gridButton()
clearButton()
grid(gridSize)
hover()
blackButton()
rainbowButton()

