const swiper = new Swiper('.swiper', {
    // Optional parameters
   
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

//  video cards

const videoCards = [...document.querySelectorAll('.video-card')];
videoCards.forEach(item=> {
    item.addEventListener('mouseover', ()=>{
        let video = item.children[1];
        video.play();
    });

    item.addEventListener('mouseleave', ()=>{
        let video = item.children[1];
        video.pause();
    });
})