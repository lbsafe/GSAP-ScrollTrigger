# GSAP - ScrollTrigger

## GSAP - ScrollTrigger 에 대하여
>GSAP - ScrollTrigger는 최소한의 코드로 놀라운 **스크롤 기반의 애니메이션**을 제작하는 무료 플러그인이다. 또한 애니메이션과 무관하더라도 스크롤을 응용한 모든 것에 유용하게 사용된다.
***

### 1. Setting

* CDN 방식
    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
    ```
* Download 방식
    ```html
    <script src="/경로/gsap.min.js"></script>
    <script src="/경로/ScrollTrigger.min.js"></script>
    ```
* :link: 다운로드 링크: [GreenSock][greensock]

[greensock]: https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger
***

### 2. 기본 사용옵션

* 간략식
    ```js
    gsap.registerPlugin(ScrollTrigger);
    //사용 선언
    
    function gsap_option(){
        gsap.to(".test", {
            scrollTrigger: {
                trigger: ".test", // .test가 뷰포트에 도달 시 애니메이션 재생
                y: 300 // transform:translateY(300px); 이동
            }
        });
    });
    ```

* 고급식
    ```js
    gsap.registerPlugin(ScrollTrigger);
    //사용 선언

    var container = document.getElementById("test");
    // trigger 설정 - 옵션으로 빼거나 변수로 사용 가능

    function gsap_option(){
        gsap.timeline({  
            scrollTrigger: {
            trigger: container, // 대상 객채
            pin: true, // 고정여부
            ease:'none', // 애니메이션의 ease (기본 power3)
            start: "top center", // 시작하는 지점
            end: "bottom bottom", // 끝나는 지점
            // end: function end() {
            //    $("section").height();
            // } 끝나는 지점 커스텀 가능
            scrub: , // 모션바운스(되감기) true 또는 숫자로 설정 가능 ex) 1
            markers: true // 개발가이드선
            }
        })
        .to('.section p', {opacity: 1, scale: 1, rotate: "0.001deg"})
        //어느 지점까지 어떤 효과를 줄 것인지
    }
    ```