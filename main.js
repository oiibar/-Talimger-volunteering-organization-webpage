/* ============LOADER=========== */
document.body.onload = function () {

	setTimeout(() => {
		let preloader = document.getElementById('page-preloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 1000);
}
/* ==================ONLOAD============= */
$(document).ready(function () {
	$(window).scrollTop(0);
});
/* ============POPUP============ */
const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
let span = document.getElementsByClassName("close")[0];

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});

span.addEventListener('click', (e) => {
	if (e.target == span) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});
/* ==================ANIMATION============== */
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 300);	
}
/* ============SIDEBAR=========== */
/*document.querySelectorAll('.scrolly').forEach(a =>
	a.addEventListener('click', function () {
		var $current = $('.scrolly');
		$current.removeClass('active');
		$current.next('.scrolly').addClass('active');
	}));
document.querySelectorAll('.scrolly').forEach(a =>
	a.addEventListener('click', function () {
		var $current = $('.scrolly');
		if (this.classList.contains('active')) {
			this.classList.removeClass('active');
		} else {
			this.classList.add('active');
		}
	}));
*/





$(function () {
	document.getElementById('form').addEventListener('submit', function (evt) {
		var http = new XMLHttpRequest(), f = this;
		var th = $(this);
		evt.preventDefault();
		http.open("POST", "sendMail.php", true);
		http.onreadystatechange = function () {
			if (http.readyState == 4 && http.status == 200) {
				alert(http.responseText);
				if (http.responseText.indexOf(f.nameFF.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
					th.trigger("reset");
				}
			}
		}
		http.onerror = function () {
			alert('Ошибка, попробуйте еще раз');
		}
		http.send(new FormData(f));
	}, false);

});




$(document).ready(function () {
	$('.icon-one').click(function () {
		$('.icon-one').toggleClass('active-one');
	});
})





$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		dots: true,
	});
});