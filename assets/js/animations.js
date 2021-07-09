gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray('#hero').forEach((el, i) => {
    gsap.from(el, {
        opacity: 0, 
        y: -100, 
        duration: 2,
        ease: "power4"
    });
})

gsap.to("#call-to-scroll", {
    y: -5,
    repeat: -1,
    yoyo: true
});

gsap.utils.toArray('#about .info').forEach((el, i) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            scrub: i,
        },
        opacity: 0, 
        y: -100, 
        duration: 1,
        ease: "power4"
    });
});


gsap.utils.toArray('.card').forEach((el, i) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            scrub: 0.2
        },
        opacity: 0, 
        y: -50, 
        duration: 1,
        ease: "power4"
    });
});

gsap.utils.toArray('.icon-column').forEach((el, i) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            scrub: 0.2
        },
        opacity: 0, 
        y: +50, 
        duration: 1,
        ease: "power4"
    });
});
