
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

//Добавление стиля active при нажатии кнопки "Подробнее"	
	const buttons = document.querySelectorAll('.offer__button_more');
	const cards = document.querySelectorAll('.maslo__card_1, .maslo__card_2, .maslo__card_3, .maslo__card_4');

	buttons.forEach((button, index) => {
	button.addEventListener('click', () => {
		for (let i = 0; i < cards.length; i++) {
		cards[i].classList.remove(`maslo__card_${i + 1}_active`);
		cards.forEach(card => card.classList.remove('maslo__card_active'));
		}
		cards[index].classList.add(`maslo__card_${index + 1}_active`);
		cards[index].classList.add('maslo__card_active');
	});
	});