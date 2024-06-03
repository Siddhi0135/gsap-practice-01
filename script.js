// gsap.to is used to move our element from intial to final
// gsap.from is used to move our element from final to intial


gsap.to(".box",{
    x:1200,
    duration:2 ,
    delay:1,
    backgroundColor:"blue",
    rotate:360,
    borderRadius:"50%",
    scale: 0.5,
})

gsap.from(".box1",{
    x:1200, //this is for the axiz we want to move our element
    duration:2, // for how many sec we want it to move
    delay:1, // the delay it would take
    backgroundColor:"olive", // what should be the background color
    rotate:360, // rotation of the element
    borderRadius:"60%", // border radius is easy to understand
    scale: 0.5, // it tells us about the final size of the element
})