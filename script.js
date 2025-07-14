var tl = gsap.timeline();

tl.from(".line h1", {
    y: 150,
    stagger: 0.2,
    duration: .8,
    delay: 0.5,
})
tl.from("#line1-part1", {
    opacity: 0,
    y: 600,
    onStart: function () {
        var timerH5 = document.querySelector(".line h5");
        var timerGrow = 0;
        setInterval(() => {
            if (timerGrow < 100) {
                timerH5.innerHTML = timerGrow++;
            }
            else {
                timerH5.innerHTML = timerGrow;
            }
        }, 20);
    },
})
tl.to(".line h2",{
    animationName: "animeForNow",
    opacity:1

})
tl.to("#loader", {
    opacity: 0,
    delay: 1.7,
    duration: .4,
})

tl.from("#page1",{
    y:"100%",
    opacity:0,
    duration:.5,
    delay:.5,
    ease: "power4.out",
})

tl.to("#loader",{
    display:"none",
})