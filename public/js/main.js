     //Nav-bar//
      function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
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

  tl.fromTo('.ham-container',{
    x:100,
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
    height:500,
    duration: 1.4,
    ease:'power2.inOut'
  },
  ">-.5"
  );

  tl.fromTo('.marketing',{
    height: 0
  },{
    height:500,
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


const midScreen500 = () => {
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
    x:-200
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

const midScreen768 = () => {
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
    x: 1000,
    opacity: 0
  },{
    x:100,
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
    x:-200
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
    x:-90
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

const loadingLeave = () => {
  let timeline = gsap.timeline();
  timeline.fromTo('.loading-bg', {
    y: "100%",
    // opacity:1,
    background: 'blue'
  }, {
    y: 0,
    // opacity:0,
    background: 'white',
    ease:'sine.inOut',
    duration: 1
  });
};

const loadingEnter = () => {
  let timeline = gsap.timeline();
  timeline.fromTo('.loading-bg', {
    y: 0,
    background: 'white',
  }, {
    y: "100%",
    background: 'blue',
    duration: 1
  });
};

const delay = (n) => {
  return new Promise((done) =>{
    setTimeout(() =>{
      done();
    }, n);
  });
};


const mobileViews = () => {
  if (window.screen.width <= 375){
  mobile();
} else if(window.screen.width <= 500){
  midScreen500();
}else if(window.screen.width <= 768){
  midScreen500();
}else{
  initialPageAnimation();
  }
}


barba.init({
  sync: true,
  transitions: [{
      name:'page-wipe',
      async leave(data){
        const done = this.async();
        console.log('leaving page animation');
        loadingLeave();
        await delay(2000);
        done();
      },
      async enter(data){
        mobileViews();
        console.log('Entering page animation');
        loadingEnter();

      },
    //   async once(data){
    //     initialPageAnimation();
    //   }
    },
    {
        name:'gallery-transition',
        from: {
          namespace: ['home','about']
        },
        to: {
          namespace: ['gallery']
        },
        async leave(data){
          const done = this.async();
          console.log('leaving page animation');
          loadingLeave();
          await delay(2000);
          done();
        },
        async enter(data){
          console.log('Entering page animation');
          // galleryEnter();
          loadingEnter();

        }
      },

      {
          name:'home-transition',
          from: {
            namespace: ['about','gallery']
          },
          to: {
            namespace: ['home']
          },
          async leave(data){
            const done = this.async();
            console.log('leaving page animation');
            loadingLeave();
            await delay(2000);
            done();
          },
          async enter(data){
            console.log('Entering page animation');
            mobileViews();
            loadingEnter();

          }
        },
      {
      name:'about-transition',
      from: {
        namespace: ['home','gallery']
      },
      to: {
        namespace: ['about']
      },
      async leave(data){
        const done = this.async();
        console.log('leaving page animation');
        loadingLeave();
        await delay(2000);
        done();
      },
      async enter(data){
        console.log('Entering page animation');
        // aboutPageAnimation();
        loadingEnter();

      }
    }

  ],
    views: [
  //     {
  //   namespace: 'home',
  //   beforeLeave(data) {
  //     //do something before leaving the current `index` namespace
  //   }
  // },
  {
   namespace: 'home',
   afterEnter(data) {
    mobileViews();
     loadingEnter();
   }
 },
//   {
//    namespace: 'about',
//    afterEnter(data) {
//      aboutPageAnimation();
//      loadingEnter();
//    }
//  },
//    {
//     namespace: 'gallery',
//     afterEnter(data) {
//       galleryEnter();
//       loadingEnter();
//     }
//   }
]
});
