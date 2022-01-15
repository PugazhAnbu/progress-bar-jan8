const prev = document.getElementById("prev")
const next = document.getElementById("next")
const progress = document.getElementById("progress")
const circles = document.querySelectorAll(".circle")

let currentActive = 1
let noofcircles = circles.length
next.addEventListener("click", ()=>{
    if(currentActive<noofcircles){
        currentActive++;    
       
    }
     console.log(currentActive)
     updateCSS()
    
})

prev.addEventListener("click", ()=>{
    currentActive--;
    if(currentActive<1){
          currentActive=1;
    }
  
    console.log(currentActive)
    updateCSS()

})

function enableDisable(){
    if(currentActive === 1){
        prev.disabled = true
    }else if(currentActive === noofcircles){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}

function updateCSS(){
    for(var i=0;i<noofcircles;i++){
        const circle = circles[i]

        if(i<currentActive){
            circle.classList.add("active")
        }else{
            circle.classList.remove("active")
        }

        const activexyz = document.querySelectorAll(".active")

        //calculate width
        //set progress bar width = formula

        const widthxyz = (activexyz.length-1)/(circles.length-1)*100
        progress.style.width = widthxyz + "%"
        enableDisable()
    }
}