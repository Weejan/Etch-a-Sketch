function grid(){
    let container = document.querySelector("#container")

    for(i = 0; i < 16; i++){
        let row = document.createElement('div');
        for(j = 0; j < 16; j++){
            let column = document.createElement('div');
            column.setAttribute("class" ,"sqr-box")
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