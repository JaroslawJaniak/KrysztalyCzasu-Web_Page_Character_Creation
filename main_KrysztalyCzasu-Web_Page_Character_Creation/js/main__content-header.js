 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction (){
	  if (document.body.scrollTop > 18 || document.documentElement.scrollTop > 18) {
		document.getElementById("header").classList.add('main__content-header__on-scroll');
	  } else {
		document.getElementById("header").classList.remove('main__content-header__on-scroll');
	  }
}