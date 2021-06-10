window.addEventListener('DOMContentLoaded', () => {
	document.getElementById("main").scrollIntoView();
	document.getElementById("window__InnerHeight").innerHTML = window.innerHeight;
	document.getElementById("window__InnerWidth").innerHTML = window.innerWidth;

  const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          	const id = entry.target.getAttribute('id');

		        if (entry.intersectionRatio > 0.0) {
								if (window.innerWidth > 920) {
									document.getElementById(id).style.transition = "all 2000ms ease";
									document.getElementById(id).style.paddingTop = "6.5rem"
									document.getElementById(id).style.opacity = "1";
								}

				        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
						document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('unactive');

						//right-side summary panel
						document.querySelector(`li[id="character__summary_${id}"]`).parentElement.classList.add('character__summary_active');
						document.querySelector(`li[id="character__summary_${id}"]`).parentElement.classList.remove('character__summary_unactive');
		        }
				else {
								if (window.innerWidth > 920) {
									document.getElementById(id).style.opacity = "0";
								}

					document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('unactive');
		          	document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
		        }
        });
    });

	// Track all sections that have an `id` applied
	// 'adds an element to the set of target elements being watched by the IntersectionObserver'
  document.querySelectorAll('section[id]').forEach((section) => {
		section.style.color = "	#333";
        observer.observe(section);
  });

	//jesli dokument otwarto w oknie mnijszym równym 920
	if (window.innerWidth <= 920) {
			document.querySelectorAll(`nav li a`).forEach((navlink) => {
				navlink.addEventListener('click', opencloseNav);
			});
	}

	window.onscroll = function(ev) {
			if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {

			}
	};

	//przy zmianie rozmiarow okna dokumentu nadaj funkcjonalnosci ponizej
	window.addEventListener("resize", function(){
			if (window.innerWidth <= 920) {
				document.querySelectorAll(`nav li a`).forEach((navlink) => {
					navlink.addEventListener('click', opencloseNav);
				});
			}
			else {
				document.querySelectorAll(`nav li a`).forEach((navlink) => {
					navlink.removeEventListener('click', opencloseNav);
				});
			}

			document.getElementById("window__InnerHeight").innerHTML = window.innerHeight;
			document.getElementById("window__InnerWidth").innerHTML = window.innerWidth;
	});
});
