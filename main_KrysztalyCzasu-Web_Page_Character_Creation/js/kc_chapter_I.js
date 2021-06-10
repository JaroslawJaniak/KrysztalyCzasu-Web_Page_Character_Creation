
console.log('chapter1');
console.log('chapter1' + 'er1');

var genderId;
var raceId;

	document.querySelectorAll("input[class=checkbox__gender]").forEach((checkbox_gnd) => {
		checkbox_gnd.addEventListener('change', function() {
			var isChecked = this.checked;
			genderId = this.getAttribute('id');

			if (this.checked) {

				console.log('---1gender.checked start---');
					document.querySelectorAll("input[class=checkbox__gender]").forEach((checkbox_gnd_) => {
						if(this == checkbox_gnd_) {
							checkbox_gnd_.checked = isChecked;

							document.getElementById("character__summary_gender").innerHTML = checkbox_gnd_.getAttribute("value");
							
							//UKRYWAMY TABELE: WZROST I WAGA MEZCZYNA/KOBIETA
							document.getElementById("table1_height_weight_" + checkbox_gnd_.getAttribute('id')).hidden = false;
							document.getElementById("paragraph_height_weight_" + checkbox_gnd_.getAttribute('id')).hidden = false;
							document.getElementById("warning1").hidden = false;

							//---dodaj klase modyfikujaca styl tabeli WSPOLCZYNNIKOW PODTAWOWYCH---
							//---start---
							genderId = getGenderId();
							
							document.querySelectorAll("input[class=checkbox__race]").forEach((checkbox_rc) => {
								checkbox_rc.addEventListener('change', function() {
									if (this.checked) {
										raceId = this.getAttribute('id');
										console.log('_racedId: '+ raceId);
									}
									else{
										raceId = this.getAttribute('id');
										console.log('_racedId: '+ raceId);
									}
								});
							});

							if(genderId!=null && genderId == 'male' && raceId!=null){
								document.getElementById('table_base-stats_tr_'+raceId+'_'+genderId).classList.add('activeTrTable');
								document.getElementById('table_base-stats_tr_'+raceId+'_'+'female').classList.remove('activeTrTable');
							}
							else if (genderId!=null && genderId == 'female' && raceId!=null){
								document.getElementById('table_base-stats_tr_'+raceId+'_'+genderId).classList.add('activeTrTable');
								document.getElementById('table_base-stats_tr_'+raceId+'_'+'male').classList.remove('activeTrTable');
							}
							//---end---
						}
						else{
							console.log('---2gender.checked else start---');
							checkbox_gnd_.checked = !isChecked;
							console.log('co to jest: ' + checkbox_gnd_.getAttribute('id'))
							
							//UKRYWAMY TABELE: WZROST I WAGA MEZCZYNA/KOBIETA
							document.getElementById("table1_height_weight_" + checkbox_gnd_.getAttribute('id')).hidden = true;
							document.getElementById("paragraph_height_weight_" + checkbox_gnd_.getAttribute('id')).hidden = true;
							
						}
					});
			}
			else if (!this.checked) {
				console.log('---0gender.checked else_if start---');
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
				console.log('---1race.checked start---');
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

							genderId = getGenderId();
							raceId = checkbox_rc_.getAttribute('id');

							

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
				console.log('---0race.checked else_if start---');
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
		document.querySelectorAll("input[class=checkbox__gender]").forEach((checkbox_gnd) => {
			checkbox_gnd.addEventListener('change', function() {
				var genderId = this.getAttribute('id');
	
				if (this.checked) {
					genderId = this.getAttribute('id');
					console.log('fi_gndId: '+ genderId)
				}
				else{
					genderId = this.getAttribute('id');
					console.log('fe_gndId: ' + genderId)
				}
			});
		});
		
		return genderId;
	}

	function getRaceId(){
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