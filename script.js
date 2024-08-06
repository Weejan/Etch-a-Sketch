let container = document.querySelector("#container")

function grid(){
    let gridSize = prompt("Input your grid size")
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

function boxSizing(row,boxSize){
    row.style.height = `${boxSize}px`
    row.style.width = `${boxSize}px`
}

function hover(){
    let box = document.querySelectorAll(".sqr-box")
    box.forEach((item)=>{item.addEventListener('mouseover',(e)=>{
        item.style.backgroundColor = "black"
        console.log(e.target);})
    })
}

function gridButton(){
    let button = document.createElement('button');
    button.textContent = "Change Grid";
    button.addEventListener('click',()=>{
        let div = document.querySelectorAll('div');
        div.forEach((item)=>{item.remove();})
        grid()})
    document.body.appendChild(button)
}
grid()
hover()
gridButton()