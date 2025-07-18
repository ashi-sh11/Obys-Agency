document.body.style.overflow = "hidden";
var tl = gsap.timeline();

function loader() {

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
            }, 20);//20
        },
    })
    tl.to(".line h2", {
        animationName: "animeForNow",
        opacity: 1

    })
    tl.to("#loader", {
        opacity: 0,
        delay: 1.7,//1.7
        duration: .3,//.3
    })

    tl.to("#loader", {
        display: "none",
        onComplete: function() {
            document.body.style.overflow = "auto"; // Add this here
            window.scrollTo(0, 0); // fOptional: reset scroll position
        }
    })

};

function cursorMove() {
    document.addEventListener("mousemove", (dets) => {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y,
            ease: "bounce.Out"
        })
    })

    Shery.makeMagnet("#nav-part2 h3");
}
loader();
cursorMove();

tl.from("#nav",{
    y: -100,
    opacity:0,
    stagger:0.5,
})

tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:120,
    opacity:0,
    stagger:.1,
},"=-.85")