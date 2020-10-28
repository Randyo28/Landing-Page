
      //Nav-bar//

      function navBar() {
        var x = document.getElementById("navbar");
        if (x.style.display === "flex") {
            x.classList.toggle("change");
            x.style.display = "none";
    } else {
            x.style.display = "flex";
            }
          }
  
  
            //Hamburger-transition
          function myFunction(x) {
    x.classList.toggle("change");
  }

/* Page transitions Animations */

const initialPageAnimation = () => {
  let tl = gsap.timeline();

  tl.fromTo('.logo',{
    x: -200,
    opacity: 0
  },{
    x:0,
    opacity: 1,
    delay: '.5',
    duration: 1.3
  });

  tl.fromTo('.menu',{
    x:500,
    opacity: 0
  },{
    x:400,
    opacity: 1,
    delay: '.5',
    duration: 1.3
  },
  ">-1.8"
  );

  tl.fromTo('.info-section h1',{
    x: 0,
    y:100,
    opacity: 0,
  },{
    x:0,
    y:0,
    opacity: 1,
    duration: 1.3
  });
  tl.addLabel("h1Show");

  tl.fromTo('.girl',{
    height: 0
  },{
    height:600,
    duration: 1.4,
    ease:'power2.inOut'
  },
  ">-.5"
  );

  tl.fromTo('.marketing',{
    height: 0
  },{
    height:600,
    duration: 1.4,
    ease:'power2.inOut'
  },
  ">-1"
  );
      //Shape1
  tl.fromTo('.shape1',{
    scale: 0,
    opacity: 0
  },{
    scale: 1,
    opacity: 0.3,
    ease:'power2.inOut'
  },
  ">-1"
  );

      //Shape3
  tl.fromTo('.shape3',{
    opacity:0
  },{
    opacity:0.6,
    duration:1,
    ease:'power2.inOut'
  },
  ">-.2"
  );

  tl.fromTo('.shape3',{
    y:500,
    x:-50
  },{
    y:465,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease:'sine.inOut'
  }
  );

  //Shape2
  tl.fromTo('.shape2',{
  opacity:0
  },{
  opacity:0.3,
  duration:0.5,
  ease:'power2.inOut'
  },
  ">-2"
  );

  tl.fromTo('.shape2',{
  x:550,
  y:-150,
  },{
  y:-185,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease:'sine.inOut'
  }
  );

  tl.fromTo('.info-section h4',{
    x: 50,
    opacity: 0
  },{
    x:0,
    opacity: 1,
    duration: 1.3
  },
  "h1Show"
  );

  tl.fromTo('.call-actions',{
    x: 50,
    opacity: 0
  },{
    x:0,
    opacity: 1,
    duration: 1.3
  },
  "h1Show+=1"
  );
};


const mobile = () => {
  let tl = gsap.timeline();

  tl.fromTo('.logo',{
    x: -200,
    opacity: 0
  },{
    x:0,
    opacity: 1,
    delay: '.5',
    duration: 1.3
  });

  tl.fromTo('.menu',{
    x: 200,
    opacity: 0
  },{
    x:0,
    opacity: 1,
    delay: '.5',
    duration: 1.3
  },
  ">-1.8"
  );

  tl.fromTo('.info-section h1',{
    x: 0,
    y:100,
    opacity: 0,
  },{
    x:0,
    y:0,
    opacity: 1,
    duration: 1.3
  });
  tl.addLabel("h1Show");

  tl.fromTo('.girl',{
    height: 0
  },{
    height:200,
    duration: 1.4,
    ease:'power2.inOut'
  },
  ">-.5"
  );

  tl.fromTo('.marketing',{
    height: 0
  },{
    height:200,
    duration: 1.4,
    ease:'power2.inOut'
  },
  ">-1"
  );
      //Shape1
  tl.fromTo('.shape1',{
    x: -200,
    opacity:0
  },{
    x: -100,
    opacity: 0.3,
    duration:1.5,
    yoyo: true,
    ease:'sine.inOut',
    repeat: -1,
  },
  ">-1"
  );

      //Shape3
  tl.fromTo('.shape3',{
    opacity:0
  },{
    opacity:0.3,
    duration:1,
    ease:'power2.inOut'
  },
  ">-.2"
  );

  tl.fromTo('.shape3',{
    y:400,
    x:-50
  },{
    y:350,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease:'sine.inOut'
  }
  );

  //Shape2
  tl.fromTo('.shape2',{
  opacity:0
  },{
  opacity:0.3,
  duration:0.5,
  ease:'power2.inOut'
  },
  ">-2"
  );

  tl.fromTo('.shape2',{
  x:550,
  y:-150,
  },{
  y:-185,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease:'sine.inOut'
  }
  );

  tl.fromTo('.info-section h4',{
    x: 50,
    opacity: 0
  },{
    x:0,
    opacity: 1,
    duration: 1.3
  },
  "h1Show"
  );

  tl.fromTo('.call-actions',{
    x: 50,
    opacity: 0
  },{
    x:0,
    opacity: 1,
    duration: 1.3
  },
  "h1Show+=1"
  );
};

if (window.screen.width <= 375){
  mobile();
} else{
  initialPageAnimation();
}
