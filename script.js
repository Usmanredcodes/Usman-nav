var active = 3;

var mncircles = document.querySelectorAll(".mncircle");
var sec = document.querySelectorAll(".sec");
var first = document.querySelectorAll(".first");


gsap.to(mncircles[active -1], {
    opacity: .7
})

gsap.to(sec[active-1], {
    opacity: 1
})

gsap.to(first[active-1], {
    opacity: 1
})



 

mncircles.forEach(function(val, index) {
    val.addEventListener("click", function(){
        gsap.to("#circle", {
            rotate: (3-(index+1))*18,
            ease: Expo.easeInOut,
            duration: 1
        })
        greyout();
        gsap.to(this, {
            opacity: .7
        })
        gsap.to(sec[index], {
            opacity: 1
        })
         gsap.to(first[index], {
            opacity: 1
        })
           
    })
})



function greyout() {
    gsap.to(mncircles, {
        opacity: .08
    })

    gsap.to(sec, {
        opacity: .0
    })

     gsap.to(first, {
        opacity: .5
    })
}

gsap.to("#circle",{
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2
})