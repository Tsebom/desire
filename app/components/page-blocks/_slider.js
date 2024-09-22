const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'slide',
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
});