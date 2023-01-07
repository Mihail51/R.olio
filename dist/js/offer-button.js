
// Initialize Swiper 

	var swiper = new Swiper(".mySwiper", {
	     slidesPerView: 1,
	     spaceBetween: 30,
	     loop: true,
	     pagination: {
	       el: ".swiper-pagination",
	       clickable: true,
	     },
	     navigation: {
	       nextEl: ".swiper-button-next",
	       prevEl: ".swiper-button-prev",
	     },
	   });

	var swiper = new Swiper(".mySwiperReviews", {
	     slidesPerView: 3,
	     spaceBetween: 30,
	     slidesPerGroup: 3,
	     loop: true,
	     pagination: {
	       el: ".swiper-pagination",
	       clickable: true,
	     },
	     navigation: {
	       nextEl: ".swiper-button-next",
	       prevEl: ".swiper-button-prev",
	     },
	   });


//Скролл секции "maslo"	при нажатии кнопки "Подробнее"

	const smoothLinks = document.querySelectorAll('.offer__button_more');
	for (let smoothLink of smoothLinks) {
		   smoothLink.addEventListener('click', function (event) {
		       const id = '#maslo';

		       document.querySelector(id).scrollIntoView({
		           behavior: 'smooth',
		           block: 'start'  
		       });	
		   });
	};