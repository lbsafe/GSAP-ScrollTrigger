$(document).ready(function(){
    function gsap_option(){
        gsap.timeline({  
            scrollTrigger: {
            trigger: "div", // 객체기준범위
            pin: true, // 고정
            start: "top top", // 시작점
            end: function end() {
               $("section").height();
            }, // 끝나는점 커스텀 가능
            // end: "bottom bottom 형식으로 작성 가능"
            scrub: true, // 모션바운스
            markers: true // 개발가이드선
            }
        })
        .to('.section p', {opacity: 1, scale: 1, rotate: "0.001deg"})
        //어느 지점까지 어떤 효과를 줄 것인지
    }
    gsap_option();
});