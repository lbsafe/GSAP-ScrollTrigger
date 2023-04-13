$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".fixed_section", {
      scrollTrigger: {
        trigger: ".fixed_section",
        start: "top top",
        end: function end() {
          return $("#fixed_box").height();
        },
        scrub: true,
        pin: true,
        markers: true,
        id: "scrub"
      }
    });

});