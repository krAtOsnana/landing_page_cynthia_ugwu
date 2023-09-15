//document.querySelector("#minicircle")
//var maindiv=document.querySelector("#main")
var xscale=1;
var yscale=1;

var xprev=0;
var yprev=0;

window.addEventListener("mousemove",function(dets){
   
    
    clearTimeout(timeOut)
   
   var xval=gsap.utils.clamp(0.7,1.4,dets.clientX-xprev)
   var yval=gsap.utils.clamp(0.7,1.4,dets.clientY-yprev)
   
    xprev=dets.clientX
    yprev=dets.clientY

    
     
    gsap.to("#minicircle",{
        left:dets.clientX + "px",
        top:dets.clientY + "px",
        scaleX:xval,
        scaleY:yval,
        
     })

     var timeOut=setTimeout(function(){
        gsap.to("#minicircle",{
            scaleX:1,
            scaleY:1
        })

     },100)
})


 function pageOneAnimation(){
    var tl=gsap.timeline()

    tl.from("#nav",{
        y:"-10",
        opacity:0,
        ease:Expo.easeInOut,
        duration:1.5
    })

    .to(".boundingelem",{
        y:"0",
        ease:Expo.easeInOut,
        duration:1.5,
        delay:-1,
        stagger:.1
    })
    .from("#page1footer",{
        y:-10,
        opacity:0,
        delay:-1,
        ease:Expo.easeInOut,
        duration:1.5,
        
    })
 }

 pageOneAnimation() 


 //page2 animation
 

document.querySelectorAll(".elem").
forEach(function(elem){
   elem . addEventListener("mousemove",function(dets){
    
    })
})
