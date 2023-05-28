var tl1=gsap.timeline();

tl1.to("#video-1",{
    y:200,
    width:"80%",
    left:"5%",
    borderRadius: "1000px",
    scrollTrigger:{
        scroll:"#main",
        trigger:"#video-1",
        start:"top 80%",
        scrub:true,
        
    }
  
})
gsap.from("#pg3-video",{
     
    width:"30%",
    height:"30%",
    left:"45%",
    borderRadius: "50%",
    scrollTrigger:{
        scroll:"#main",
        trigger:"#pg3-video",
        start:"top 80%",
        end:"top 50%",
        scrub:true,
        
    }
  
})
gsap.to("#pg3-video",{
     y:970,
    width:"30%",
    height:"30%",
    left:"45%",
    borderRadius: "50%",
    scrollTrigger:{
        scroll:"#main",
        trigger:"#pg3-video",
        start:"top 10%",
        
        scrub:true,
         
    }
  
})
gsap.to("#box-5",{
    y:-200,
    width:"1250px",
    height:"600px",
    left:"8%",
    borderRadius:"1000px",
    scrollTrigger:{
        scroll:"#main",
        trigger:"#box-5",
        start:"top 80%",
        end:"top 50%",
        scrub:true,
         
    }

})
gsap.to("#box-5 video",{
   
    left:"54%",
    top:"13%",
    borderRadius:"1000px",
    scrollTrigger:{
        scroll:"#main",
        trigger:"#box-5 video",
        start:"top 80%",
        end:"top 50%",
        scrub:true,
        
    }

})
gsap.to("#box-5",{
    y:1100,
    width:"400px",
    height:"400px",
    left:"40%",
    borderRadius:"1000px",
    scrollTrigger:{
        scroll:"#main",
        trigger:"#box-5",
        start:"top 10%",
      
        scrub:true,
         
    }

})
 
gsap.to("#box-5 video",{
    
    left:"3%",
    top:"4%",
    borderRadius:"50%",
    scrollTrigger:{
        scroll:"#main",
        trigger:"#box-5 video",
        start:"top 80%",
        end:"top 50%",
        scrub:true,
        // markers:true
    }

})
 
gsap.from("#cont1",{
    y:400,
    scale:0,
    scrollTrigger:{
        scroll:"#main",
        trigger:"#cont1",
        // markers:true,
        start:"top 90%",
        // scrub:true
    }
})
gsap.from("#cont2",{
    y:200,
    scale:0,
    scrollTrigger:{
        scroll:"#main",
        trigger:"#cont2",
        
    }
})
gsap.from("#cont3",{
    y:200,
    scale:0,
    scrollTrigger:{
        scroll:"#main",
        trigger:"#cont3",
        
    }
})

gsap.from("#pg8-line",{
    
    width:"0%",
    scrollTrigger:{
        scroll:"#main",
        trigger:"#pg8-line",
        
    }
})
gsap.from("#line",{
     
    width:"0%",
    scrollTrigger:{
        scroll:"#main",
        trigger:"#line",
        
    }
})
gsap.from("#line-3",{
    
    width:"0%",
    scrollTrigger:{
        scroll:"#main",
        trigger:"#line-3",
        
    }
})
gsap.from("#line-4",{
     
    width:"0%",
    scrollTrigger:{
        scroll:"#main",
        trigger:"#line-4",
        
    }
})
gsap.from("#line-5",{
     
    width:"0%",
    scrollTrigger:{
        scroll:"#main",
        trigger:"#line-5",
        
    }
})
gsap.from("#page-1 h3",{
    y:100,
    opacity:0,
    delay:.5,
    scrollTrigger:{
        scroll:"#main",
        trigger:"#page-1 h3",
        
    }
})
gsap.from("#pg2-right",{
    y:100,
    opacity:0,
    delay:.5,
    scrollTrigger:{
        scroll:"#main",
        trigger:"#pg2-right",
        
    }
})
gsap.from("#page-3 h3",{
    y:100,
    opacity:0,
    delay:.5,
    scrollTrigger:{
        scroll:"#main",
        trigger:"#page-3 h3",
        
    }
})
gsap.from("#pg4-right",{
   
    opacity:0,
    delay:.5,
    scrollTrigger:{
        scroll:"#main",
        trigger:"#pg4-right",
        
    }
}) 

var a=document.querySelector(".rect")
var b=document.querySelector(".rectin")
a.addEventListener("mouseenter",function(){
   b.style.height="100%"
    
    b.style.backgroundColor="#E0FD60"
})
a.addEventListener("mouseleave",function(){
    b.style.height="0%"
    b.style.backgroundColor="#E0FD60"
 })

 var a=document.querySelector("#content span");
 a.addEventListener("mouseenter",function(){
    a.style.padding="40px 80px";
 })
 a.addEventListener("mouseleave",function(){
    a.style.padding="20px 30px";
 })