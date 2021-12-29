function slider() {
	const controlItems = document.querySelector(".control-box");

	let initialSlide = 1;

	function showSlide(n) {
		const slides = document.querySelectorAll(".slide");
		if (n < 1) {
			initialSlide = slides.length;
		}
		if (n > slides.length) {
			initialSlide = 1;
		}
		for (let slide of slides) {
			slide.style.display = "none";
		}

		slides[initialSlide - 1].style.display = "flex";
	}
	controlItems.addEventListener("click", (e) => {
		if (e.target.classList.contains("prev")) {
			initialSlide -= 1;
			showSlide(initialSlide);
		} else if (e.target.classList.contains("next")) {
			initialSlide += 1;
			showSlide(initialSlide);
		}
	});
	document.addEventListener("keydown", (e) => {
		if (e.key === "ArrowLeft") {
			initialSlide -= 1;
			showSlide(initialSlide);
		} else if (e.key === "ArrowRight") {
			initialSlide += 1;
			showSlide(initialSlide);
		}
	});

	showSlide(initialSlide);

	setInterval(() => {
		showSlide((initialSlide += 1));
	}, 5000);
}

slider();
