
var clutter="";

document.querySelector("#page1 h1").textContent.split("").forEach((char)=>{

    clutter+=`<span>${char}</span>`;

})
document.querySelector("#page1 h1").innerHTML=clutter;
var tl= gsap.timeline();
tl
.from("#line",{
    width:"40%",
    duration:3,
    // opacity:"1",
    ease:Expo.easeInOut,
})
.from("span",{
    // top:"70%",
    opacity:.5,
    y:240,
    stagger:0.1,
    duration:.4,
    ease:"easeInOut",
},"-=1.3")

// var images=document.querySelector("#page1 img").style.top="-50%";

tl.to("#page1 img",{
scrollTrigger:{
    trigger:"#page2",
    // pin:true,
    start:"top 100%",
    end:"80% 75%",
    // markers:true,
    scrub:5,
},
top:"250%",
ease:"easeInOut"
}
)
.to("#page1 img",{
scrollTrigger:{
    trigger:"#page2",
    start:"top 0%",
    end:"80% 100%",
    // markers:true,
    scrub:2,
},
display:"none",
// top:"230%",
ease:"easeInOut"
}
)
.from("#l1,#l3,#l5,#h",{
    scrollTrigger:{
        trigger:"#page1",
        // pin:true,
        start:"60% 90%",
        end:"200% 0%",
        // markers:true,
        scrub:5,
    },
    x:3500,
    ease:"easeInOut"
})
.from("#l2,#l4,#m,#b",{
    scrollTrigger:{
        trigger:"#page2",
        // pin:true,
        start:"50% 100%",
        end:"top -50%",
        // markers:true,
        scrub:4,
    },
    x:-2500,
    ease:"easeInOut"
})
.from("#page3 h1",{
    scrollTrigger:{
        trigger:"#page3",
        // pin:true,
        start:"top 100%",
        end:"50% top",
        // markers:true,
        scrub:1,
    },
    y:1500,
    ease:"easeInOut"
})
// .from("#page4 #cover1,#imgs1",{
//     scrollTrigger:{
//         trigger:"#page4",
//         // pin:true,
//         start:"50% 100%",
//         end:"50% top",
//         // markers:true,
//         scrub:3,
//     },
//     y:800,
//     ease:"easeInOut"
// })
// .from("#page4",{
//     scrollTrigger:{
//         trigger:"#page4",
//         // pin:true,
//         start:"top 100%",
//         end:"50% top",
//         // markers:true,
//         scrub:3,
//     },
//     y:-1000,
//     ease:"easeInOut"
// })

gsap.to("#first", {
    scrollTrigger: {
        trigger: ".app-parent-wrap",
        // markers: true,
        start: "-5% 0%",
        end: "90% 40%",
        scrub:2,

    },
    top:"100%",
    duration: .5,
    ease: "slow(0.7, 0.7, false)",

})
gsap.to("#third", {
    scrollTrigger: {
        trigger: ".app-parent-wrap",
        // markers: true,
        start: "-5% 0%",
        end: "90% 40%",
        scrub:2,
    },
    top:"100%",
    duration: .5,
    ease: "slow(0.7, 0.7, false)",

})
gsap.to("#second", {
    scrollTrigger: {
        trigger: ".app-parent-wrap",
        // markers: true,
        start: "-5% 0%",
        end: "90% 40%",
        scrub:4,
    },
    top:"-120%",
    duration: 1.5,
    ease: "slow(0.7, 0.7, false)",

})
gsap.from("#third .app-screen-wrap", {
    scrollTrigger: {
        trigger: ".app-parent-wrap",
        // markers: true,
        start: "0% 0%",
        end: "40% 20%",
        scrub:5,
    },
    top:"-30%",
    duration:1.5,
    ease: "slow(1, 1, false)",

})
gsap.from("#first .app-screen-wrap", {
    scrollTrigger: {
        trigger: ".app-parent-wrap",
        // markers: true,
        start: "0% 0%",
        end: "40% 20%",
        scrub:5,
    },
    top:"-30%",
    // y:"100",
    duration:1.5,
    ease: "slow(1, 1, false)",
})

gsap.from("#second .app-screen-wrap", {
    scrollTrigger: {
        trigger: ".app-parent-wrap",
        // markers: true,
        start: "0% 0%",
        end: "40% 40%",
        scrub:5,
    },
    top:"30%",
    duration: .8,
    ease: "slow(1, 1, false)",

})


var p3=document.querySelector("#page5");


p3.addEventListener("mousemove",function(dets){
    // window.innerHeight=754
    // window.innerWidth=870
    var dim=document.querySelector("#video").getBoundingClientRect().top;
    var wd=convertRange(dets.clientX,[0,window.innerWidth],[-25,25]);
    var ht=convertRange(dets.clientY-dim,[0,window.innerHeight-dim],[-25,25]);
    console.log(dets.clientY-dim);
    // console.log(dim);
    // console.log(wd);
    // console.log(ht);
    document.querySelector("#video").style.transform=`rotateX(${-ht}deg) rotateY(${wd}deg)`;
})                                     

function convertRange( value, r1, r2 ) { 
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}


var flag=0;
document.querySelector("#btn").addEventListener("click", function(){
if(flag===0){
    document.querySelector("#div1").style.top="0";
    document.querySelector("#btn h2").style.zIndex="898989";
    document.querySelector("#btn").style.cursor="pointer";
    flag=1;
}
else if(flag===1){
    document.querySelector("#div2").style.top="0";
    document.querySelector("#btn h2").style.zIndex="898989";
    document.querySelector("#btn").style.cursor="pointer";

    flag=2;
}
else{
    document.querySelector("#div3").style.top="0"
    document.querySelector("#btn h2").style.zIndex="898989";
    document.querySelector("#btn").style.cursor="pointer";

    flag=0;
}
})
var cursor=document.querySelector("#cursor");
document.querySelector("#page5").addEventListener("mousemove",function(dets){ 
    cursor.style.top = `${dets.clientY}px`;
    cursor.style.left = `${dets.clientX}px`;
}) 
function mousemotion2() {
    document.querySelector("#img_part").addEventListener("mousemove", function (dets) {
        var pos=  document.querySelector("#img_part").getBoundingClientRect();
        document.querySelector("#mousedot").style.backgroundColor = "yellow";
        document.querySelector("#mousedot").style.top = `${dets.clientY-pos.top}px`;
        document.querySelector("#mousedot").style.left = `${dets.clientX-pos.left+30}px`;
    });
    document.querySelector("#img_part").addEventListener("mouseleave", function (dets) {
        document.querySelector("#mousedot").style.top = "50%";
        document.querySelector("#mousedot").style.left = "50%";
    });
}
mousemotion2();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

