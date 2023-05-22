$(document).ready(function(){

    gsap.registerPlugin(ScrollTrigger);

    var container = document.getElementById("fixed_box");

    function scroll_effect(){

        var timeline = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                markers: true,
                ease:'none',
                start: function start() {
                    return "top top";
                },
                end: function end() {
                    return "+=".concat(container.offsetWidth, "px");
                },
            }
        });

        timeline.addLabel('scrollevent').fromTo('#fixed_box', {
            xPercent: 0,
            x: 0
        }, {
            xPercent: -100,
            x: '100vw',
            ease: 'none',
            delay: 0.05
        }).fromTo('#fixed_box', {
            delay: 0
        }, {
            delay: 0.01
        }, 'scrollevent+=0.08'); /* 끝나는 지점 변경 */

    }

    ScrollTrigger.matchMedia({
      /* 768 까지만 가로스크롤 사용 그 아래는 사용하지 않는다. */
        "(min-width: 768px)": function() {
            scroll_effect();
        }
    });
});