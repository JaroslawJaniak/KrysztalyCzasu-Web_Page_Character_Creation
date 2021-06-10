(function() {
	  const headings = document.querySelectorAll('h4');

	  Array.prototype.forEach.call(headings, h => {
			let btn = h.querySelector('button');
			let target = h.nextElementSibling;
			let subtarget = target.firstElementChild;

			target.classList.add('target-unexpanded');

			btn.onclick = () => {
			  let expanded = btn.getAttribute('aria-expanded') === 'true';
			  btn.setAttribute('aria-expanded', !expanded);

			  if(expanded == true) {
				  //console.log(" if -> target: " + target);
				  target.classList.add('target-unexpanded');
				  target.classList.remove('target-expanded');
			  }
			  else {
				  //console.log(" else -> target: " + target);
				  target.classList.add('target-expanded');
				  target.classList.remove('target-unexpanded');
			  }
			}
	  });
})()
