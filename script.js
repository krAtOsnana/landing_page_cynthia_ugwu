//document.querySelector("#minicircle")
//var maindiv=document.querySelector("#main")
window.addEventListener("mousemove",function(dets){
    gsap.to("#minicircle",{
        left:dets.clientX + "px",
        top:dets.clientY + "px"
    })
})