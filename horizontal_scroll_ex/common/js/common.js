$(document).ready(function(){

  gsap.registerPlugin(ScrollTrigger);

  var container = document.getElementById("fixed_box");

    function scroll_effect(){

        var timeline = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                invalidateOnRefresh: true,
                pin: true,
                scrub: 1,
                start: function start() {
                    return "top top";
                  },
                  end: function end() {
                    return "+=".concat(container.offsetWidth + 7000, "px");
                  },
              }
          });

          timeline.addLabel('scrollevent').fromTo('#fixed_box', {
            xPercent: 0,
            x: 0
          }, {
            xPercent: -100,
            x: - container.offsetWidth * 2.27,
            ease: 'none',
            delay: 0.05
          }).fromTo('#fixed_box', {
            delay: 0
          }, {
            delay: 0.01
          }, 'scrollevent+=0.15');

    }

    function scroll_effect2(){
        gsap.timeline({  
            scrollTrigger: {
            trigger: ".section_01 p", // 객체기준범위
            start: "top top", // 시작점
            
            end: function end() {
              $(".section_01").height();
            },
            scrub: 1.5, // 모션바운스
            }
        })
        .to('.section_01 p', {opacity: 1, x:0})
      }
    scroll_effect2();

    function scroll_effect3(){
      gsap.timeline({  
          scrollTrigger: {
          trigger: ".section_02 .txt_box", // 객체기준범위
          start: "top -260%",
          end: "bottom bottom",
          scrub: 1.5, // 모션바운스
          }
      })
      .to('.section_02 h2', {opacity: 1, x:0})
      .to('.section_02 p', {opacity: 1, x:0})
      }
    scroll_effect3();

    function scroll_effect4(){
      gsap.timeline({  
          scrollTrigger: {
          trigger: ".section_03 .txt_box", // 객체기준범위
          start: "top -470%",
          end: "bottom bottom",
          scrub: 1.5, // 모션바운스
          }
      })
      .to('.section_03 h2', {opacity: 1, x:0})
      .to('.section_03 p', {opacity: 1, x:0})
      }
    scroll_effect4();

    function scroll_effect5(){
      gsap.timeline({  
          scrollTrigger: {
          trigger: ".section_04 .txt_box", // 객체기준범위
          start: "top -570%",
          end: "bottom bottom",
          scrub: 1.5, // 모션바운스
          }
      })
      .to('.section_04 .left_box h2', {opacity: 1, x:0})
      .to('.section_04 p', {opacity: 1, x:0})
      }
    scroll_effect5();


    function scroll_effect6(){
      gsap.timeline({  
          scrollTrigger: {
          trigger: ".section_04 .txt_box", // 객체기준범위
          start: "top -720%",
          end: "bottom bottom",
          scrub: 1.5, // 모션바운스
          }
      })
      .to('.section_04 .right_box h2', {opacity: 1, y:0})
      }
    scroll_effect6();

    function scroll_effect7(){
      gsap.timeline({  
          scrollTrigger: {
          trigger: ".bottom", // 객체기준범위
          start: "top -940%",
          end: "top top",
          scrub: 1.2, // 모션바운스
          }
      })
      .to('.bottom p', {opacity: 1, scale:1})
      }
    scroll_effect7();


    ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
            scroll_effect();
            scroll_effect2();
            scroll_effect3();
            scroll_effect4();
            scroll_effect5();
            scroll_effect6();
            scroll_effect7();
        }
    });
});