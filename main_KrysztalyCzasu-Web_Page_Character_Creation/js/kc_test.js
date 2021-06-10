(function() {
	// Check for <template> support
	if ('content' in document.createElement('template')) {
	  const tmpl = document.createElement('template')
  
	  // Create the web component's template
	  // featuring a <slot> for the Light DOM content
	  tmpl.innerHTML = `
		<h2>
		  <button aria-expanded="false">
			<svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">
			  <rect class="vert" height="8" width="2" y="1" x="4"/>
			  <rect height="2" width="8" y="4" x="1"/>
			</svg>
		  </button>
		</h2>
		<div class="content" hidden>
		  <slot></slot>
		</div>
		<style>
		  h2 {
			margin: 0;
		  }
  
		  h2 button {
			all: inherit;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			width: 100%;
			padding: 0.5em 0;
		  }
  
		  h2 button:focus svg {
			outline: 2px solid;
		  }
  
		  button svg {
			height: 1em;
			margin-left: 0.5em;
		  }
  
		  [aria-expanded="true"] .vert {
			display: none;
		  }
  
		  [aria-expanded] rect {
			fill: currentColor;
		  }
		</style>
	  `
	  // Check for latest Shadow DOM syntax support
	  if (document.head.attachShadow) {
		class ToggleSection extends HTMLElement {
		  constructor() {
			super()
  
			// Make the host element a region
			this.setAttribute('role', 'region')
  
			// Create a `shadowRoot` and populate from template 
			this.attachShadow({ mode: 'open' })
			this.shadowRoot.appendChild(tmpl.content.cloneNode(true))
  
			// Assign the toggle button
			this.btn = this.shadowRoot.querySelector('h2 button')
  
			// Get the first element in Light DOM
			// and cast its heading level (which should, but may not, exist)
			const oldHeading = this.querySelector(':first-child')
			let level = parseInt(oldHeading.tagName.substr(1))
  
			// Get the Shadow DOM <h2>
			this.heading = this.shadowRoot.querySelector('h2')
			
			 // If there is no level, there is no heading.
			// Add a warning.
			if (!level) {
			  console.warn('The first element inside each <toggle-section> should be a heading of an appropriate level.')
			}
			
			// If the level is a real integer and not 2
			// set `aria-level` accordingly
			if (level && level !== 2) {
			  this.heading.setAttribute('aria-level', level)
			}
  
			// Add the Light DOM heading label to the innerHTML of the toggle button
			// and remove the now unwanted Light DOM heading
			this.btn.innerHTML = oldHeading.textContent + this.btn.innerHTML
			oldHeading.parentNode.removeChild(oldHeading)
  
			// The main state switching function
			this.switchState = () => {
			  let expanded = this.getAttribute('open') === 'true' || false
  
			  // Toggle `aria-expanded`
			  this.btn.setAttribute('aria-expanded', expanded)
			  // Toggle the `.content` element's visibility
			  this.shadowRoot.querySelector('.content').hidden = !expanded
			}
  
			// Change the component's `open` attribute value on click
			// (which will, in turn, trigger switchState(), see below)
			this.btn.onclick = () => { 
			  this.setAttribute('open', this.getAttribute('open') === 'true' ? 'false' : 'true')
			}
		  }
  
		  // Identify just the `open` attribute as an observed attribute
		  static get observedAttributes() {
			return ['open']
		  }
  
		  // When `open` changes value, execute switchState()
		  attributeChangedCallback(name) {
			if (name === 'open') {
			  this.switchState()
			}
		  }
		}
  
		// Add our new custom element to the window for use
		window.customElements.define('toggle-section', ToggleSection) 
		
		// Define the expand/collapse all template
		const buttons = document.createElement('div')
		buttons.innerHTML = `
		  <ul class="controls" aria-label="section controls">
			<li><button id="expand">expand all</button></li>
			<li><button id="collapse">collapse all</button></li>
		  </ul>
		  `
  
		// Get the first `toggle-section` on the page
		// and all toggle sections as a node list
		const first = document.querySelector('toggle-section')
		const all = document.querySelectorAll('toggle-section')
  
		// Insert the button controls before the first <toggle-section>
		first.parentNode.insertBefore(buttons, first)
  
		// Place the click on the parent <ul>...
		buttons.addEventListener('click', (e) => {
		  // ...then determine which button was the target 
		  let expand = e.target.id === 'expand' ? true : false
  
		  // Iterate over the toggle sections to switch
		  // each one's state uniformly
		  Array.prototype.forEach.call(all, (t) => {
			t.setAttribute('open', expand)
		  })
		})
	  }
	}
  })()


  class Disabilitie {
	constructor(id, name, description) {
		this.id = id;
		this.name = name;
		this.description = description;
	}
}
  
let d1 = new Disabilitie(1,'karzeł', 'wzrost postaci jest mniejszy od minimalnego wzrostu jego rasy o 20 + k10 cm (patrz punkt V oraztabela V.a) konsekwencją tego jest zmniejszenie SZpostaci o połowę tej różnicy');
console.log(d1.name);


//---kc_chapter_I.js---
//---start---


console.log('chapter1');

var genderId;
var raceId;

	document.querySelectorAll("input[class=checkbox__gender]").forEach((checkbox_gnd) => {
		checkbox_gnd.addEventListener('change', function() {
			var isChecked = this.checked;
			genderId = this.getAttribute('id');

			if (this.checked) {
					document.querySelectorAll("input[class=checkbox__gender]").forEach((checkbox_gnd_) => {
						if(this == checkbox_gnd_) {
							checkbox_gnd_.checked = isChecked;

							document.getElementById("character__summary_gender").innerHTML = checkbox_gnd_.getAttribute("value");
							
							//UKRYWAMY TABELE: WZROST I WAGA MEZCZYNA/KOBIETA
							document.getElementById("table1_height_weight_" + checkbox_gnd_.getAttribute('id')).hidden = false;
							document.getElementById("paragraph_height_weight_" + checkbox_gnd_.getAttribute('id')).hidden = false;
							document.getElementById("warning1").hidden = false;

							genderId = getGenderId();
							raceId = getRaceId2(); //tutaj jest generowany błąd!!!!!!!!!!!!!!!!!!!!!!!!!!!!

							console.log('raceId2: ' + raceId);
							console.log('genderId: ' + genderId)

							if(genderId!=null && raceId!=null){
								document.getElementById('table_base-stats_tr_'+raceId+'_'+genderId).classList.add('activeTrTable');
							}
							
						}
						else{
							checkbox_gnd_.checked = !isChecked;

							genderId = checkbox_gnd_.getAttribute('id');
							//raceId = getRaceId();

							//TO--DO!!!
							//genderId = getGenderId();
							//raceId = checkbox_rc_.getAttribute('id');

							//sukces!!! zdejmujemy klasę activeTrTable
							/*
							if(genderId!=null && raceId!=null){
								document.getElementById('table_base-stats_tr_'+raceId+'_male').classList.remove('activeTrTable');
								
							}
							*/
							document.querySelectorAll("input[class=checkbox__race]").forEach((checkbox_rc) => {
								document.getElementById('table_base-stats_tr_'+checkbox_rc.getAttribute('id')+'_'+genderId).classList.remove('activeTrTable');
							});


							//UKRYWAMY TABELE: WZROST I WAGA MEZCZYNA/KOBIETA
							document.getElementById("table1_height_weight_" + checkbox_gnd_.getAttribute('id')).hidden = true;
							document.getElementById("paragraph_height_weight_" + checkbox_gnd_.getAttribute('id')).hidden = true;
							
						}
					});
			}
			else if (!this.checked) {
				document.getElementById("character__summary_gender").innerHTML = "";

				//UKRYWAMY TABELE: WZROST I WAGA MEZCZYNA/KOBIETA
				document.getElementById("table1_height_weight_" + this.getAttribute('id')).hidden = true;
				document.getElementById("paragraph_height_weight_" + this.getAttribute('id')).hidden = true;

				document.querySelectorAll("input[class=checkbox__race]").forEach((checkbox_rc_) => {
					document.getElementById('div_' + checkbox_rc_.getAttribute('id')).classList.remove('activeCheckbox');
					document.getElementById('div_' + checkbox_rc_.getAttribute('id')).classList.remove('unactiveCheckbox');
					checkbox_rc_.checked = false;
				});
			}
			
		});
	});

	document.querySelectorAll("input[class=checkbox__race]").forEach((checkbox_rc) => {
		checkbox_rc.addEventListener('change', function() {
			var isChecked = this.checked;

			if (this.checked) {
					document.querySelectorAll("input[class=checkbox__race]").forEach((checkbox_rc_) => {
						if(this == checkbox_rc_) {
							raceId = this.getAttribute('id');
							
							checkbox_rc_.checked = isChecked;
							document.getElementById("character__summary_race").innerHTML = checkbox_rc_.getAttribute("value");

							document.getElementById('div_' + checkbox_rc_.getAttribute('id')).classList.add('activeCheckbox');
							document.getElementById('div_' + checkbox_rc_.getAttribute('id')).classList.remove('unactiveCheckbox');
							
							hideProfessionCheckboxContainersByClassName(checkbox_rc_.getAttribute('id'));
							hideSubProfessionCheckboxContainersByClassName(checkbox_rc_.getAttribute('id'));	


							genderId = getGenderId();
							raceId = getRaceId();

							//changeTabelRow (raceId, genderId);

							document.querySelectorAll("tr[class=table_base-stats_tr]").forEach((tr) => {
								tr.classList.remove('activeTrTable');
							});
							
							if(genderId!=null && raceId!=null){
								document.getElementById('table_base-stats_tr_'+raceId+'_'+genderId).classList.add('activeTrTable');
							}

						}
						else{
							checkbox_rc_.checked = !isChecked;

							//genderId = getGenderId();
							raceId = checkbox_rc_.getAttribute('id');

							//console.log( '   elseG: ' + genderId);
							//console.log( '   elseR: ' + raceId);
							//console.log( '   elseR*: ' + checkbox_rc_.getAttribute('id'));

							//changeTabelRow (raceId, genderId);

							//sukces!!! zdejmujemy klasę activeTrTable
							if(genderId!=null && raceId!=null){
								document.getElementById('table_base-stats_tr_'+raceId+'_male').classList.remove('activeTrTable');
								document.getElementById('table_base-stats_tr_'+raceId+'_female').classList.remove('activeTrTable');
							}

							document.getElementById('div_' + checkbox_rc_.getAttribute('id')).classList.remove('activeCheckbox');
							document.getElementById('div_' + checkbox_rc_.getAttribute('id')).classList.add('unactiveCheckbox');

							//getGenderId();
						}
					});
			}
			else if(!this.checked){
				document.getElementById("character__summary_race").innerHTML = "";

				document.querySelectorAll("input[class=checkbox__race]").forEach((checkbox_rc_) => {
					document.getElementById('div_' + checkbox_rc_.getAttribute('id')).classList.remove('activeCheckbox');
					document.getElementById('div_' + checkbox_rc_.getAttribute('id')).classList.remove('unactiveCheckbox');	
				});
			}
		});
	});

	
	
	//zaznacz w tabeli wspólczynnikow podstawowych
	function getGenderId(){
		console.log('   start getGenderId ->')
		document.querySelectorAll("input[class=checkbox__gender]").forEach((checkbox_gnd) => {
			checkbox_gnd.addEventListener('change', function() {
				var genderId = this.getAttribute('id');
	
				if (this.checked) {
					genderId = this.getAttribute('id');
					console.log('fi_gndId: '+ genderId)
				}
				else{
					genderId = this.getAttribute('id');
					console.log('fe_gndId: ' + genderId);
				}
			});
		});
		
		return genderId;
	}

	function getRaceId(){
		console.log('   start getRaceId ->')

		document.querySelectorAll("input[class=checkbox__race]").forEach((checkbox_rc) => {
			checkbox_rc.addEventListener('change', function() {
				var raceId = this.getAttribute('id');
	
				if (this.checked) {
					raceId = this.getAttribute('id');
					console.log('fi_racedId: '+ raceId)
				}
				else{
					raceId = this.getAttribute('id');
					console.log('fe_racedId: '+ raceId)
				}
			});
		});
		
		return raceId;
	}

	function getRaceId2(){
		console.log('   start getRaceId2 ->')

		document.querySelectorAll("input[class=checkbox__race]").forEach((checkbox_rc) => {
			checkbox_rc.addEventListener('change', function() {
				var raceId = this.getAttribute('id');
	
				if (this.checked) {
					raceId = this.getAttribute('id');
					console.log('fi_racedId2: '+ raceId)
				}
				else{
					raceId = this.getAttribute('id');
					console.log('fe_racedId2: '+ raceId)
				}
			});
		});
		
		return raceId;
	}


	//funkcja zmien wiersz odpowiednio do płci i rasy
	function addStyleTabelRow (raceId, genderId){

		//console.log('fun changeTabelRow!')
		document.querySelectorAll("tr[class=table_base-stats_tr]").forEach((tr) => {
			//console.log('remove!')
			
		});

		if(genderId!=null && raceId!=null){
			document.getElementById('table_base-stats_tr_'+raceId+'_'+genderId).classList.add('activeTrTable');
			
		}
	}

	function removeStyleTabelRow (raceId, genderId){

		//console.log('fun changeTabelRow!')
		document.querySelectorAll("tr[class=table_base-stats_tr]").forEach((tr) => {
			//console.log('remove!')
			tr.classList.remove('activeTrTable');
		});

		if(genderId!=null && raceId!=null){
			document.getElementById('table_base-stats_tr_'+raceId+'_'+genderId).classList.add('activeTrTable');
			
		}
	}

	

	//document.getElementById('table_base-stats_tr_'+raceId+'_'+genderId).classList.add('activeTrTable');

	/*

	var isChecked = this.checked;

				

				if (this.checked) {
					document.querySelectorAll("input[class=checkbox__race]").forEach((checkbox_rc_) => {
						if(this == checkbox_rc_) {
							checkbox_rc_.checked = isChecked;
							
							document.getElementById('div_' + checkbox_rc_.getAttribute('id')).classList.add('activeCheckbox');
							document.getElementById('div_' + checkbox_rc_.getAttribute('id')).classList.remove('unactiveCheckbox');

							document.getElementById('div_' + checkbox_rc_.getAttribute('id')).style.backgroundColor = 'red';

							

						}
						else{
							checkbox_rc_.checked = !isChecked;

							document.getElementById('div_' + checkbox_rc_.getAttribute('id')).classList.remove('activeCheckbox');
							document.getElementById('div_' + checkbox_rc_.getAttribute('id')).classList.add('unactiveCheckbox');

							document.getElementById('div_' + checkbox_rc_.getAttribute('id')).style.backgroundColor = 'blue';

						}
					});
				}
				else if(!this.checked){
					document.getElementById('div_' + this.getAttribute('id')).style.backgroundColor = 'green';
				}

*/

//----

hideSubProfessionCheckboxContainersByClassName = (id) => {
	//połelfy
	if(id == 'race2'){
		document.querySelectorAll("div.subprofession1").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession2").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession3").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession4").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession5").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession6").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession7").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession8").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession9").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession10").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession11").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession12").forEach((prf) => {
			prf.hidden = false;
		});

		document.querySelectorAll("div.race_exception").forEach((rc_exception) => {
			rc_exception.hidden = true;
		});
		document.querySelectorAll("div.subprofession13").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession14").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession15").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession16").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession17").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession18").forEach((prf) => {
			prf.hidden = false;
		});
	}
	//elfy
	else if(id == 'race3'){
		document.querySelectorAll("div.subprofession1").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession2").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession3").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession4").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession5").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession6").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession7").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession8").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession9").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession10").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession11").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession12").forEach((prf) => {
			prf.hidden = false;
		});

		document.querySelectorAll("div.race_exception").forEach((rc_exception) => {
			rc_exception.hidden = true;
		});
		document.querySelectorAll("div.subprofession13").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession14").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession15").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession16").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession17").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession18").forEach((prf) => {
			prf.hidden = false;
		});

	}
	//połolbrzymy
	else if(id == 'race4'){
		document.querySelectorAll("div.subprofession1").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession2").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession3").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession4").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession5").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession6").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession7").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession8").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession9").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession10").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession11").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession12").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession13").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession14").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession15").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession16").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession17").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession18").forEach((prf) => {
			prf.hidden = true;
		});

	}
	//półorkowie
	else if(id == 'race5'){
		document.querySelectorAll("div.subprofession1").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession2").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession3").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession4").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession5").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession6").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession7").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession8").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession9").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession10").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession11").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession12").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession13").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession14").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession15").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession16").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession17").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession18").forEach((prf) => {
			prf.hidden = false;
		});
	}
	//krasnoludy
	else if(id == 'race6'){
		document.querySelectorAll("div.subprofession1").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession2").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession3").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession4").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession5").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession6").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession7").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession8").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession9").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession10").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession11").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession12").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession13").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession14").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession15").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession16").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession17").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession18").forEach((prf) => {
			prf.hidden = true;
		});	
	}
	//gnomy
	else if(id == 'race7'){
		document.querySelectorAll("div.subprofession1").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession2").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession3").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession4").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession5").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession6").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession7").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession8").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession9").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession10").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession11").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession12").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession13").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession14").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession15").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession16").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession17").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession18").forEach((prf) => {
			prf.hidden = false;
		});

		
	}
	//hobbici
	else if(id == 'race8'){
		document.querySelectorAll("div.subprofession1").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession2").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession3").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession4").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession5").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession6").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession7").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession8").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession9").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession10").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession11").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession12").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession13").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession14").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession15").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession16").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession17").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession18").forEach((prf) => {
			prf.hidden = true;
		});

		
	}
	//reptilioni
	else if(id == 'race9'){
		document.querySelectorAll("div.subprofession1").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession2").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession3").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession4").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession5").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession6").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession7").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession8").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession9").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession10").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession11").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession12").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession13").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession14").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession15").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession16").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.subprofession17").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.subprofession18").forEach((prf) => {
			prf.hidden = false;
		});
		
	}
}

hideProfessionCheckboxContainersByClassName = (id) => {
	//połelfy
	if(id == 'race2'){
		document.querySelectorAll("div.profession1").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession2").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession3").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession4").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession5").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession6").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession7").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession8").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession9").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession10").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession11").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession12").forEach((prf) => {
			prf.hidden = false;
		});

		document.querySelectorAll("div.race_exception").forEach((rc_exception) => {
			rc_exception.hidden = true;
		});
		document.querySelectorAll("div.profession13").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession14").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession15").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession16").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession17").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession18").forEach((prf) => {
			prf.hidden = false;
		});
	}
	//elfy
	else if(id == 'race3'){
		document.querySelectorAll("div.profession1").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession2").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession3").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession4").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession5").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession6").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession7").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession8").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession9").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession10").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession11").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession12").forEach((prf) => {
			prf.hidden = false;
		});

		document.querySelectorAll("div.race_exception").forEach((rc_exception) => {
			rc_exception.hidden = true;
		});
		document.querySelectorAll("div.profession13").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession14").forEach((prf) => {
			prf.hidden = false;	
		});
		document.querySelectorAll("div.profession15").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession16").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession17").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession18").forEach((prf) => {
			prf.hidden = false;
		});

	}
	//połolbrzymy
	else if(id == 'race4'){
		document.querySelectorAll("div.profession1").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession2").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession3").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession4").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession5").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession6").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession7").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession8").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession9").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession10").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession11").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession12").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession13").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession14").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession15").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession16").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession17").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession18").forEach((prf) => {
			prf.hidden = true;
		});

	}
	//półorkowie
	else if(id == 'race5'){
		document.querySelectorAll("div.profession1").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession2").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession3").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession4").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession5").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession6").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession7").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession8").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession9").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession10").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession11").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession12").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession13").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession14").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession15").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession16").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession17").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession18").forEach((prf) => {
			prf.hidden = false;
		});
	}
	//krasnoludy
	else if(id == 'race6'){
		document.querySelectorAll("div.profession1").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession2").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession3").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession4").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession5").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession6").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession7").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession8").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession9").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession10").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession11").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession12").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession13").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession14").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession15").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession16").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession17").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession18").forEach((prf) => {
			prf.hidden = true;
		});	
	}
	//gnomy
	else if(id == 'race7'){
		document.querySelectorAll("div.profession1").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession2").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession3").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession4").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession5").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession6").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession7").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession8").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession9").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession10").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession11").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession12").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession13").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession14").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession15").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession16").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession17").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession18").forEach((prf) => {
			prf.hidden = false;
		});

		
	}
	//hobbici
	else if(id == 'race8'){
		document.querySelectorAll("div.profession1").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession2").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession3").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession4").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession5").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession6").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession7").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession8").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession9").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession10").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession11").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession12").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession13").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession14").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession15").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession16").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession17").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession18").forEach((prf) => {
			prf.hidden = true;
		});

		
	}
	//reptilioni
	else if(id == 'race9'){
		document.querySelectorAll("div.profession1").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession2").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession3").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession4").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession5").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession6").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession7").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession8").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession9").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession10").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession11").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession12").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession13").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession14").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession15").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession16").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession17").forEach((prf) => {
			prf.hidden = false;
		});
		document.querySelectorAll("div.profession18").forEach((prf) => {
			prf.hidden = false;
		});
		
	}
}

//---end---