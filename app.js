



// let nr = document.getElementById("nr");

// nr.style.maxWidth = "1440px"
// nr.style.marginInline = "auto"
// nr.style.marginBlock = "0"
// nr.style.padding = "20px"
// nr.style.width = "85%"


let  btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    let header = document.querySelector("header")
    header.classList.toggle("active")
})