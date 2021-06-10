var race_Id;

document.querySelectorAll("input[class=checkbox__race]").forEach((checkbox_rc) => {
	checkbox_rc.addEventListener('change', function() {
		if(this.checked){
			race_Id = this.getAttribute('id');
		}
	});
});

	document.querySelectorAll("input[class=checkbox__profession]").forEach((checkbox_prf_) => {
					document.getElementById('profession_container__subelement-' + checkbox_prf_.getAttribute('id')).style.display = 'none';
				});
	
	secondClassActive();


	document.querySelectorAll("input[class=checkbox__profession]").forEach((checkbox_prf) => {
		checkbox_prf.addEventListener('change', function() {
			
			var isChecked = this.checked;

			
			if(document.getElementById('secondClass').checked){
				var isChecked = this.checked;
				if (this.checked) {
					document.querySelectorAll("input[class=checkbox__profession]").forEach((checkbox_prf_) => {
						if(this == checkbox_prf_) {
							checkbox_prf_.checked = isChecked;

							//console.log(checkbox_prf_.getAttribute('id'));
							
							document.getElementById('profession_container__subelement-' + checkbox_prf_.getAttribute('id')).style.display = 'grid';

							document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.add('activeCheckbox');
							document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.remove('unactiveCheckbox');
							document.getElementById("character__summary_profession1").innerHTML = checkbox_prf_.getAttribute("value");
						
							//document.getElementById('div_' + checkbox_prf_.getAttribute('id')).style.backgroundColor = 'red';

						}
						else{
							checkbox_prf_.checked = !isChecked;

							document.getElementById('profession_container__subelement-' + checkbox_prf_.getAttribute('id')).style.display = 'none';

							document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.remove('activeCheckbox');
							document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.add('unactiveCheckbox');

							//document.getElementById('div_' + checkbox_prf_.getAttribute('id')).style.backgroundColor = 'blue';
					
						}
					});
				}
				else if(!this.checked){
					//document.getElementById('div_' + this.getAttribute('id')).style.backgroundColor = 'green';
					subprofessionCheckboxDeactiveAll();

					document.getElementById('profession_container__subelement-' + this.getAttribute('id')).style.display = 'none';
					document.getElementById("character__summary_profession1").innerHTML ="";
					document.getElementById("character__summary_profession2").innerHTML ="";

					document.querySelectorAll("input[class=checkbox__profession]").forEach((checkbox_prf_) => {
						document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.remove('activeCheckbox');
						document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.remove('unactiveCheckbox');
						checkbox_prf_.checked = false;
					});
				}
			} //
			else if (this.checked) {
				document.querySelectorAll("input[class=checkbox__profession]").forEach((checkbox_prf_) => {
					if(this == checkbox_prf_) {
						checkbox_prf_.checked = isChecked;
						
						document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.add('activeCheckbox');
						document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.remove('unactiveCheckbox');

						document.getElementById("character__summary_profession1").innerHTML = checkbox_prf_.getAttribute("value");
					}
					else{
						checkbox_prf_.checked = !isChecked;

						document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.remove('activeCheckbox');
						document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.add('unactiveCheckbox');
					}
				});
			}

			else if(!this.checked){
				//document.getElementById('div_' + this.getAttribute('id')).style.backgroundColor = 'orange';

				document.getElementById("character__summary_profession1").innerHTML ="";
				
				document.querySelectorAll("input[class=checkbox__profession]").forEach((checkbox_prf_) => {
					document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.remove('activeCheckbox');
					document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.remove('unactiveCheckbox');
					checkbox_prf_.checked = false;
				});
			}


		});
	});


function secondClassActive() {
		document.querySelectorAll("input[class=checkbox__class]").forEach((checkbox_cls) => {
			checkbox_cls.addEventListener('change', function() {
				var isChecked = this.checked;
				if (this.checked) {
						document.querySelectorAll("input[class=checkbox__class]").forEach((checkbox_cls_) => {
							if(this == checkbox_cls_) {
								checkbox_cls_.checked = isChecked;

								professionCheckboxDeactiveAll();
								subprofessionCheckboxActive();

								document.querySelectorAll("input[class=checkbox__profession]").forEach((checkbox_prf_) => {
									document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.remove('activeCheckbox');
									document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.remove('unactiveCheckbox');
									checkbox_prf_.checked = false;
								});
								
							}
							else{
								checkbox_cls_.checked = !isChecked;
							}
						});
				}
				else if(!this.checked){
					subprofessionCheckboxDeactiveAll();
	
					document.querySelectorAll("input[class=checkbox__profession]").forEach((checkbox_prf_) => {
						document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.remove('activeCheckbox');
						document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.remove('unactiveCheckbox');
						checkbox_prf_.checked = false;
					});
	
					document.querySelectorAll("input[class=checkbox__profession]").forEach((checkbox_prf_) => {
						document.getElementById('profession_container__subelement-' + checkbox_prf_.getAttribute('id')).style.display = 'none';
					});
	
					document.getElementById("character__summary_profession1").innerHTML = " —";
					document.getElementById("character__summary_profession2").innerHTML = "";
				}
				
			});
		});
	}

function secondClass() {
	document.querySelectorAll("input[class=checkbox__class]").forEach((checkbox_cls) => {
		checkbox_cls.addEventListener('change', function() {
			var isChecked = this.checked;
			if (this.checked) {
					document.querySelectorAll("input[class=checkbox__class]").forEach((checkbox_cls_) => {
						if(this == checkbox_cls_) {
							checkbox_cls_.checked = isChecked;

							subprofessionCheckboxActive();
							
							document.querySelectorAll("input[class=checkbox__profession]").forEach((checkbox_prf_) => {
								document.getElementById('profession_container__subelement-' + checkbox_prf_.getAttribute('id')).style.display = 'grid';
							});

						}
						else{
							checkbox_cls_.checked = !isChecked;
						}
					});
			}
			else if(!this.checked){
				subprofessionCheckboxDeactiveAll();

				document.querySelectorAll("input[class=checkbox__profession]").forEach((checkbox_prf_) => {
					document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.remove('activeCheckbox');
					document.getElementById('div_' + checkbox_prf_.getAttribute('id')).classList.remove('unactiveCheckbox');
					checkbox_prf_.checked = false;
				});

				document.querySelectorAll("input[class=checkbox__profession]").forEach((checkbox_prf_) => {
					document.getElementById('profession_container__subelement-' + checkbox_prf_.getAttribute('id')).style.display = 'none';
				});

				document.getElementById("character__summary_profession1").innerHTML = " —";
				document.getElementById("character__summary_profession2").innerHTML = "";
			}
			
		});
	});
}
	
	
subprofessionCheckboxActive = () => {
	document.querySelectorAll("input[class=checkbox__subprofession]").forEach((checkbox_sub) => {
		checkbox_sub.addEventListener('change', function() {
			var isChecked = this.checked;
			if (this.checked) {
					document.querySelectorAll("input[class=checkbox__subprofession]").forEach((checkbox_sub_) => {
						if(this == checkbox_sub_) {
							checkbox_sub_.checked = isChecked;
							document.getElementById("character__summary_profession2").innerHTML = "/" + checkbox_sub_.getAttribute("value");
							
						}
						else{
							checkbox_sub_.checked = !isChecked;
						}
					});
			}
			else if(!this.checked){
				document.getElementById("character__summary_profession2").innerHTML = "";
			}
			
		});
	});
}

subprofessionCheckboxDeactiveAll = () => {
	document.querySelectorAll("input[class=checkbox__subprofession]").forEach((checkbox_sub) => {
		checkbox_sub.checked = false;
	});
}

professionCheckboxDeactiveAll = () => {
	document.querySelectorAll("input[class=checkbox__profession]").forEach((checkbox_prof) => {
		checkbox_prof.checked = false;
	});
}