$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger);

    function scroll_effect(){
        gsap.timeline({  
            scrollTrigger: {
            trigger: ".txt_wrap", // 객체기준범위
            pin: true, // 고정
            start: "top top", // 시작점
            end: function end() {
               $(".event_section").height();
            },
            scrub: 1, // 모션바운스
            markers: true // 개발가이드선
            }
        })
        .to('.txt_01', {opacity: 0, y: 20})
        .to('.txt_02', {opacity: 1, y: 0})
        .to('.txt_02', {opacity: 0, y: 20})
        .to('.txt_03', {opacity: 1, y: 0}) 
        .to('.txt_03', {opacity: 0, y: 20}) 
        .to('.txt_04', {opacity: 1, y: 0}) 
        .to('.txt_04', {opacity: 0, y: 20}) 
        .to('.txt_05', {opacity: 1, y: 0}) 
    }
    scroll_effect();

    function scroll_effect2(){
        gsap.timeline({  
            scrollTrigger: {
            trigger: ".txt_wrap2", // 객체기준범위
            pin: true, // 고정
            start: "top top", // 시작점
            
            end: function end() {
               $(".big_section").height();
            },
            scrub: true, // 모션바운스
            markers: true // 개발가이드선
            }
        })
        .to('.big_txt_01 p', {opacity: 1, scale: 1, rotate: "0.001deg"})
    }
    scroll_effect2();

    function scroll_effect3(){
        gsap.timeline({  
            scrollTrigger: {
            trigger: ".txt_wrap3", // 객체기준범위
            pin: true, // 고정
            start: "top top", // 시작점
            end: function end() {
               $(".swipe_section").height();
            },
            scrub: 3, // 모션바운스
            markers: true // 개발가이드선
            }
        })
        .to('.swipe_txt_01 p', {left: "100%"})

        gsap.timeline({  
            scrollTrigger: {
            trigger: ".txt_wrap3", // 객체기준범위
            start: "top top", // 시작점
            pin: true, // 고정
            end: function end() {
                $(".swipe_section").height();
            },
            scrub: 5, // 모션바운스
            markers: true // 개발가이드선
            }
        })
        .to('.swipe_txt_02 p', {left: "100%"})

        gsap.timeline({  
            scrollTrigger: {
            trigger: ".txt_wrap3", // 객체기준범위
            start: "top top", // 시작점
            pin: true, // 고정
            end: function end() {
                $(".swipe_section").height();
            },
            scrub: 4, // 모션바운스
            markers: true // 개발가이드선
            }
        })
        .to('.swipe_txt_03 p', {left: "100%"})
    }
    scroll_effect3();

    function scroll_effect4(){
        gsap.timeline({  
            scrollTrigger: {
            trigger: ".cross_txt_01", // 객체기준범위
            start: "top 70%", // 시작점
            end: "+=300",
            scrub: 0.1, // 모션바운스
            markers: true // 개발가이드선
            }
        })
        .to('.cross_txt_01 p', {left: "45%"})

        gsap.timeline({  
            scrollTrigger: {
            trigger: ".cross_txt_01", // 객체기준범위
            start: "top 70%", // 시작점
            end: "+=300",
            scrub: 0.1, // 모션바운스
            markers: true // 개발가이드선
            }
        })
        .to('.cross_txt_03 p', {left: "55%"})
    }
    scroll_effect4();

    // ScrollTrigger.matchMedia({
    //       "(min-width: 768px)": function() {
    //           scroll_effect();
    //       }
    // });
});