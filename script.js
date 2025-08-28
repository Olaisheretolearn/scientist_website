
    document.addEventListener('DOMContentLoaded', function() {
      
      setTimeout(function() {
        
        const tags = document.querySelectorAll('.tag');
        
       
        gsap.set(tags, { opacity: 1, y: -200 });
        
    
        tags.forEach((tag, index) => {
         
          setTimeout(() => {
            gsap.to(tag, {
              y: 0,
              duration: 2.5,
              ease: "bounce.out",
              opacity: 1,
              rotation: gsap.utils.random(-10, 10),
              onComplete: function() {
             
                gsap.to(tag, {
                  y: '+=10',
                  duration: 2,
                  ease: "sine.inOut",
                  repeat: -1,
                  yoyo: true
                });
              }
            });
          }, index * 200); 
        });
      }, 500);
    });








