function grid(){
    let gridSize = prompt("Input your grid size")

    let container = document.querySelector("#container")
    for(i = 0; i < gridSize; i++){
        let row = document.createElement('div');
        for(j = 0; j < gridSize; j++){
            let column = document.createElement('div');
            let boxSize = 500/ gridSize
            console.log(boxSize)
            column.setAttribute("class" ,"sqr-box")
            let box = document.querySelectorAll(".sqr-box")
            column.style.height = `${boxSize}px`
            column.style.width = `${boxSize}px`
            row.appendChild(column);
        }
        container.appendChild(row)
    }
    let box = document.querySelectorAll(".sqr-box")
    box.forEach((item)=>{item.addEventListener('mouseover',(e)=>{
        item.style.backgroundColor = "black"
        console.log(e.target);})
    })
}

grid()