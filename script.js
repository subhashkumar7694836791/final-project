var line1=document.querySelector("#line1");
var line2=document.querySelector("#line2");
var menu=document.querySelector("#menu");
var change=0;
menu.addEventListener('click',function(){
    if(change==0){
        document.querySelector('#menu').style.height='24px';
        line1.style.transform='rotate(48deg)';
    

        line2.style.transform='rotate(-48deg)';
change=1;
    }else{
      document.querySelector('#menu').style.height='12px';

        line1.style.transform='rotate(0deg)'
    line2.style.transform='rotate(0deg)'
    change=0;
    }
    

})

var flage=0;

        document.querySelector('#menu').addEventListener('click',function(){
          if(flage==0){
            document.querySelector('.menu-page').style.top='0%';
flage=1;
          }else{
            document.querySelector('.menu-page').style.top='-100%';
            flage=0;
          }
        })


               //  cursure moving

               document.addEventListener('mousemove',function(dets){
                   document.querySelector('.circle').style.left=`${dets.x + 20}px`
                   document.querySelector('.circle').style.top=`${dets.y + 20}px`
                  //  document.querySelector('.circle').style.innerHTML="Move"

               })


gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("body", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




      // gsap page2
gsap.to('#page2 #img',{
  duration:1,
  width:"100%",
  stagger:3,
  scrollTrigger:{
    trigger:"#page2 #img",
    scroller:"#main",
    scrub:true,
    // markers:true,
    start:"top 20%",
    end:"top 10%",
    // pin:'#page2'

  }
})
gsap.from('.nva-t',{
  opacity:0,
  // top:0,
  duration:1,
  delay:1.2
})

gsap.to('.nav-t h2',{
  top:0,
  duration:1,
  delay:1,
  onStart:function(){
    $(".nav-t h2").textillate({in:{effect: 'fadeInUp'}})
    // $("#page3 h1").textillate({out:{effect: 'foldUnfold',sync:true}})
    
  }
})

gsap.from('#page3 h1',{
  rotate:5,
  y:100,
  stagger:1,
  scrollTrigger:{
    trigger:'#page3 h1',
    scroller:'#main',
    // markers:true,
    start:'top 60%',
    end:'top 20%',
    scrub:true,
    

  }
})




// page4
  var page4=gsap.timeline({
    scrollTrigger:{
      trigger:"#page4",
      scroller:'#main',
      // markers:true,
      start:'top 10%',
      end:'top -20%',
      scrub:3,
      pin:true
      
  
    }
  })
page4.from('#page4 h1',{
      // fontSize:'42vw',
      scale:1.5,
      lineHeight:'50vh',
transform:"translateScale(2.1)",
  
},'anim')
page4.from('#page4 h3',{
    // fontSize:'40vw',
    scale:1.2,

 
},'anim')

  // page5

  page4.to('#page5',{
    y:'-180vh'
    
  },'anim')

var load=gsap.timeline();
load.to('#kuch-bhi h5',{
  y:-70,
  stagger:.3,
  // duration:.6,
  delay:.4
  // rotateX:90
})
load.to('#text-enime',{
  y:-35,
  stagger:3,
  duration:.6,
  // delay:1,
  rotateX:90
})
load.to('#loader1',{
  height:0,
  y:'-100vh',
  duration:.8,
  delay:.3,
})
load.to('#loader2',{
  height:0,
  duration:.7,
  // delay:.2,
},'-=.2')
load.to('#loader3',{
  height:0,
  duration:.6,
  // delay:.3,
},'-=.3')
load.to('#loader4',{
  height:0,
  duration:.5,
  // delay:.2,
},'-=.1')
load.to('#loader',{
  height:0,
  duration:.1,
  // delay:.2,
},'-=.1')



var all=document.querySelectorAll('.box');
all.forEach(function(e){
  e.addEventListener('mouseenter',function(){
    document.querySelector('.circle').innerHTML="Move";
    document.querySelector('.circle').style.color="black";

    document.querySelector('.circle').style.scale=2.2;
    document.querySelector('.circle').style.backgroundColor='white';
    document.querySelector('.circle').style.border='2px solid white'
  })
  e.addEventListener('mouseleave',function(){
    document.querySelector('.circle').innerHTML="";
    document.querySelector('.circle').style.scale=1;

    document.querySelector('.circle').style.backgroundColor='transparent';
    document.querySelector('.circle').style.border='2px solid lightyellow'
  })
})


var page5=gsap.timeline(
  {
    scrollTrigger:{
      trigger:'#page6',
      scroller:'#main',
      // start:'top 80%',
      // end:'top 10%',
      // markers:true,
      pin:true,
      scrub:2
      
    }
  }
)
page5.to('#page6 h1',{
  scale:4,
  duration:1,
  filter:'blur(20px)',
  opacity:0,
  // delay:.5

 
})

page5.to('#para',{
  // scale:4,
  // filter:'blur(20px)',
  opacity:1,
  
 
})



gsap.from('#page7 h1',{
  y:20,
  stagger:.3,
  opacity:0,
  scrollTrigger:{
    trigger:'#page7',
    scroller:'#main',
    scrub:true,
    // markers:true,
    start:'top 82%',
    end:'top 10%'

  }
})
