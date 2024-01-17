const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
console.log(searchEl);
console.log(searchInputEl);

searchEl.addEventListener('click',function(){
    searchInputEl.focus();

});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');

})

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('.badges');
const topEl = document.querySelector('#to_top');

// ._throttel
// 마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 하는 것

window.addEventListener('scroll',_.throttle(function(){
    // console.log('스크롤된다고');
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //badge 숨겨줄게
        // 방법1 ) badgeEl.style.display ='none';
        gsap.to(badgeEl,0.5,{
            opacity:0,
            display:'none'
        });
        //tob 버튼 보이기
        gsap.to(topEl,0.2,{
            x:0
        
        });
    }else{
        //badge 보여줄게
        // 방법1 ) badgeEl.style.display ='block';
        gsap.to(badgeEl,0.5,{
            opacity:1,
            display:'block'
        });
        //top 버튼 숨기기
        gsap.to(topEl,0.2,{
            x:100
        });

    }

},300));

topEl.addEventListener('click',function(){
    gsap.to(window,0.7,{
        scrollTo:0
    });
});


const fadeEls=document.querySelectorAll(".section1 .fade-in");
console.log(fadeEls);



// foreach문의 기본사용
    // 배열명.forEach(콜백함수){
    //     실행문
    // }
// 콜백함수
    // 매개변수로 함수 객체를 전달해서 호출 함수 내에서 매개변수 함수를 실행하는 것


fadeEls.forEach(function(fadeEl,index){
    gsap.to(fadeEl,1,{
        delay:(index+1)*0.7,
        opacity:1
    })
});


new Swiper('.inner_left .swiper', {
    direction :'vertical',
    autoplay:true,
    loop:true,
    speed:100
});

new Swiper('.promotion .swiper', {
    slidesPerView : 3,
    spaceBetween: 10,
    centeredSlides:true,
    autoplay:true,
    loop:true,
    pagination:{
        el:'.promotion .swiper-pagination',
        clickable : true
    },
    navigation:{
        prevEl:'.promotion .swiper-button-prev',
        nextEl:'.promotion .swiper-button-next'

    }
});

const promotionToggleEl = document.querySelector('.toggle-promotion')
const promotionEl = document.querySelector(".promotion")
let isHidePromotion = false;

promotionToggleEl.addEventListener('click',function(){
    isHidePromotion=!isHidePromotion;
    if(isHidePromotion){
        promotionEl.classList.add('open');
        promotionToggleEl.classList.add('open');
    }else{
        promotionEl.classList.remove('open');
        promotionToggleEl.classList.remove('open');
    }
    console.log(isHidePromotion);
});


new Swiper('.section9 .swiper', {
    slidesPerView:5,
    spaceBetween:30,
    autoplay:true,
    loop:true,
    pagination:{
        el:'.section9 .swiper-pagination',
        clickable : true
    },
    navigation:{
        prevEl:'.section9 .swiper-button-prev',
        nextEl:'.section9 .swiper-button-next'

    }
});
