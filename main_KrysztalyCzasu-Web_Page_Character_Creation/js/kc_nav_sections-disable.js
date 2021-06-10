console.log('kc_nav_section.js')

document.getElementById('section2').onclick = function (){
	//document.getElementById('chapter_section2').style.visibility ="visible";
}


//ukrywamy sykcje procz pierwszej
document.querySelectorAll("section").forEach((element) => {
	if(element.classList.contains("nav_section")){
		if(element.getAttribute('id')!="chapter_section1"){
			element.style.visibility ="hidden";
			console.log(element.getAttribute('id') + ' is hidden');
		}
	}
});

//na klikniecie
document.querySelectorAll("a[class=menu__link]").forEach((elementNav) => {
	var anchorId;
	if(elementNav!=null && elementNav.getAttribute('id')!=null){
		anchorId = elementNav.getAttribute('id');
		//console.log(anchorId);
		//console.log(elementNav.getAttribute('id'));
		elementNav.onclick = function (){
			//sprawdzamy wszystkie sekcje jesli id sekcji odpowiada temu ktorego szukamy (przez kliknięcie) to pokazujemy ta sekcje inaczej chowamy
			document.querySelectorAll("section").forEach((element) => {
				if(element.classList.contains("nav_section")){
					if(element.getAttribute('id') == 'chapter_' + anchorId){
						element.style.visibility ="visible";
						//console.log(element.getAttribute('id') + ' should be visible');
					}
					else{
						element.style.visibility ="hidden";
					}
				}
			});

		console.log('start:')

		document.querySelectorAll("ul[class=sublist]").forEach((elementUl) => {
			console.log('asasa');
			
		});



		}
	}
});
