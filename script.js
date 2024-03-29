const paintArea = document.getElementById("paint-area-container")
const inputBtn = document.getElementById("input-btn")
const desiredArea = document.getElementById("area-value")



function drawBox(){

    const div_ = document.createElement("div");
    div_.classList.add("box")
    div_.style.setProperty('--box-width', `${960 / desiredArea.value}px`)
    div_.style.setProperty('--box-height', `${960 / desiredArea.value}px`)
    paintArea.appendChild(div_)
}

function clearArea(box){
    box.forEach(element => {
        paintArea.removeChild(element)
    });
}

function drawArea(){
    let isPainted = document.querySelectorAll(".box");
    
    if (isPainted){
        clearArea(isPainted)
    }

    for (let i = 0 ; i < desiredArea.value ; i++ ){
        drawBox()
    }
}

inputBtn.addEventListener("click", drawArea)

