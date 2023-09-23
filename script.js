var tl = gsap.timeline()


gsap.from("#nav img,#nav #nav2 h3,#nav #nav3 h3,#nav #nav3 button",{
    y: -20,
    duration: 0.3,
    delay:1,
    opacity: 0,
    stagger: 0.2
})
tl.from("#bodd #part1 h1",{
    y:100,
    delay: 1,
    opacity: 0,
    stagger: 0.3
})
tl.from("#main>img",{
    scale: 0,
    opacity: 0,
    stagger:0.2
})
tl.from("#main>h3",{
    scale: 0,
    opacity: 0,
})
tl.to("#main>h3",{
    y: 30,
    repeat:-1,
    duration: 0.35,
    yoyo: true
})