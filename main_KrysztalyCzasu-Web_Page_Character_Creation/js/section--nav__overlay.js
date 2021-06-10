window.addEventListener('DOMContentLoaded', () => {
	document.getElementById("openbtn").classList.add('menu__button__openbtn__active');
});

(function() {
		let openBtn = document.getElementById("openbtn");
		let closeBtn = document.getElementById("closebtn");

		openBtn.onclick = () => {
		  let expanded = document.getElementById("openbtn").getAttribute('aria-expanded') === 'true';
		  openBtn.setAttribute('aria-expanded', !expanded);

		  if(expanded == false) {
			  openNav();
		  }
		  else {
			  closeNav();
		  }
		}

		closeBtn.onclick = () => {
		  let expanded = document.getElementById("openbtn").getAttribute('aria-expanded') === 'true';
		  openBtn.setAttribute('aria-expanded', !expanded);

		  if(expanded == false) {
			  openNav();
		  }
		  else {
			  closeNav();
		  }
		}
})()

//ta funkcja uzyta jest w pliku 'menu__active--track.js' i podpieta jest pod linki nawigacji przy rozdzielczosci mniejszej niz 920px
opencloseNav = () => {
	let expanded = document.getElementById("openbtn").getAttribute('aria-expanded') === 'true';
	document.getElementById("openbtn").setAttribute('aria-expanded', !expanded);
	if(expanded == false) {
			openNav();
	}
	else {
			closeNav();
	}
}

openNav = () => {
	document.getElementById("section--nav__overlay").style.height = "100%";
	document.getElementById("section--nav__overlay").style.opacity = "1";
	document.getElementById("section--nav__overlay").style.visibility = "visible";
	//document.getElementById("openbtn").classList.add('menu__button__openbtn__active'); //do wywalenia raczej
	document.getElementById("section--nav__overlay").style.display = "block";
	document.getElementById("closebtn").style.display = "block";

	document.getElementById("openbtn").style.color = "#111";
}

closeNav = () => {
	document.getElementById("section--nav__overlay").style.height = "0%";
	document.getElementById("section--nav__overlay").style.opacity = "0";
	document.getElementById("section--nav__overlay").style.visibility = "hidden";
	document.getElementById("closebtn").style.display = "none";
	document.getElementById("openbtn").style.color = "#efefef";
	
	if (window.innerWidth <= 920) {
		document.getElementById("section--nav__overlay").style.display = "none";
	}
}
