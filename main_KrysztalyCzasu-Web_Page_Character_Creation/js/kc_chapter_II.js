function k100(){
	return Math.floor(Math.random() * 100) + 1;
}

function k50(){
	return Math.floor(Math.random() * 50) + 1;
}

function k10(){
	return Math.floor(Math.random() * 10) + 1;
}

function k5(){
	return Math.floor(Math.random() * 5) + 1;
}

document.querySelectorAll(`button[id=k100_button_place_of_birth]`).forEach((k100_btn) => {
	k100_btn.addEventListener('click', k100_btn_place_of_birth);
});

document.querySelectorAll(`button[id=k100_button_social_class]`).forEach((k100_btn) => {
	k100_btn.addEventListener('click', k100_btn_social_class);
});

function k100_btn_place_of_birth(){
	var k = k100();
	var srcImage;
	var plcBirth;
	var table_trId;

	document.getElementById("result1").innerHTML ="-> " + k;
	
	if(k>=1 && k<17){
		plcBirth = "Ostrogar;";
		srcImage = "images/map" + 1 + ".jpg";
		table_trId = 1 ;

	}
	else if(k>=17 && k<26){
		plcBirth = "Get-warr-gar;";
		srcImage = "images/map" + 2 + ".jpg";
		table_trId = 2 ;
	}
	else if(k>=26 && k<31){
		plcBirth = "Ranhar-gar;";
		srcImage = "images/map" + 3 + ".jpg";
		table_trId = 3 ;
	}
	else if(k>=31 && k<35){
		plcBirth = "Ora-gar;";
		srcImage = "images/map" + 4 + ".jpg";
		table_trId = 4 ;
	}
	else if(k>=35 && k<39){
		plcBirth = "Gasta;";
		srcImage = "images/map" + 5 + ".jpg";
		table_trId = 5 ;
	}
	else if(k>=39 && k<43){
		plcBirth = "Olgrion;";
		srcImage = "images/map" + 6 + ".jpg";
		table_trId = 6 ;
	}
	else if(k>=43 && k<46){
		plcBirth = "Tagara Ciemna;";
		srcImage = "images/map" + 7 + "c.jpg";
		table_trId = 7 ;
	}
	else if(k>=46 && k<49){
		plcBirth = "Ongir-gar;";
		srcImage = "images/map" + 8 + ".jpg";
		table_trId = 8 ;
	}
	else if(k>=49 && k<52){
		plcBirth = "Aria-gar;";
		srcImage = "images/map" + 9 + ".jpg";
		table_trId = 9 ;
	}
	else if(k>=52 && k<55){
		plcBirth = "Inchra-gar;";
		srcImage = "images/map" + 10 + ".jpg";
		table_trId = 10 ;
	}
	else if(k>=55 && k<57){
		plcBirth = "Tagara Szara;";
		srcImage = "images/map" + 7 + "b.jpg";
		table_trId = 11 ;
	}
	else if(k>=57 && k<59){
		plcBirth = "Tagara Biała;";
		srcImage = "images/map" + 7 + "a.jpg";
		table_trId = 12 ;
	}
	else if(k>=59 && k<61){
		plcBirth = "Ogragar;";
		srcImage = "images/map" + 11 + ".jpg";
		table_trId = 13 ;
	}
	else if(k>=61 && k<81){
		plcBirth = "rejony Orcusa oddalone od miast;";
		srcImage = "images/map" + 12 + ".jpg";
		table_trId = 14 ;
	}
	else if(k>=81 && k<100){
		plcBirth = "wyspy, leżące wokół Orcusa;";
		srcImage = "images/map" + 13 + ".jpg";
		table_trId = 15 ;
	}
	else if(k==100){
		plcBirth = "miejsce urodzenia nieznane;";
		srcImage = "images/map" + 14 + ".jpg";
		table_trId = 16 ;
	}

	document.getElementById("place_of_birth").innerHTML = plcBirth;
	document.getElementById("character__summary_birth").innerHTML = plcBirth;
	document.getElementById("map").setAttribute("src", srcImage);
	document.getElementById("table1_tr" + table_trId).classList.add('activeTrTable');

	document.getElementById("k100_button_place_of_birth").removeEventListener('click', k100_btn_place_of_birth);
}

function k100_btn_social_class(){
	var k = k100();
	var s=0;
	var sclClassName;
	var sclClassId = 0;
	var sclClassIdAtrb;

	document.getElementById("result2").innerHTML = "-> " + k;

	//klasa rycerska nidostępna ze względu na pochodzenie społeczne
	if(k<76){
		document.querySelectorAll("div.profession5").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession6").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.profession7").forEach((prf) => {
			prf.hidden = true;
		});
		document.querySelectorAll("div.cast2").forEach((prf) => {
			prf.hidden = true;
		});
	}

	if(k>=1 && k<6){
		sclClassName = "NKN;";
		sclClassId = 1;

		document.querySelectorAll(`button[id=k100_button_social_class_benefice]`).forEach((k_btn) => {
			document.getElementsByClassName("type_dice1")[0].innerHTML = "k10";
			k_btn.addEventListener('click', function(){
				s = k10();
				document.getElementById("social_class_benefice").innerHTML = s;
				document.getElementById("social_class_benefice_result").innerHTML = "->" + s;
				document.getElementById("character__summary_social_benefice").innerHTML = s;
			});
		});
		
	}
	else if(k>=6 && k<11){
		sclClassName = "ŚKN;";
		sclClassId = 2;

		document.querySelectorAll(`button[id=k100_button_social_class_benefice]`).forEach((k_btn) => {
			document.getElementsByClassName("type_dice1")[0].innerHTML = "2k10";
			k_btn.addEventListener('click', function(){
				s=0;
				var c = 0;

				while(c<2){
					s = s + k10();
					c++;
				}
				
				document.getElementById("social_class_benefice").innerHTML = s;
				document.getElementById("social_class_benefice_result").innerHTML = "->" + s;
				document.getElementById("character__summary_social_benefice").innerHTML = s;
			});
		});
		
	}
	else if(k>=11 && k<16){
		sclClassName = "WKN;";
		sclClassId = 3;
		
		document.querySelectorAll(`button[id=k100_button_social_class_benefice]`).forEach((k_btn) => {
			document.getElementsByClassName("type_dice1")[0].innerHTML = "5k10";
			k_btn.addEventListener('click', function(){
				s=0;
				var c = 0;

				while(c<5){
					s = s + k10();
					c++;
				}
				
				document.getElementById("social_class_benefice").innerHTML = s;
				document.getElementById("social_class_benefice_result").innerHTML = "->" + s;
				document.getElementById("character__summary_social_benefice").innerHTML = s;
			});
		});
		
	}
	else if(k>=16 && k<36){
		sclClassName = "NKŚ;";
		sclClassId = 4;

		document.querySelectorAll(`button[id=k100_button_social_class_benefice]`).forEach((k_btn) => {
			document.getElementsByClassName("type_dice1")[0].innerHTML = "k50";
			k_btn.addEventListener('click', function(){
				s = k50();
				document.getElementById("social_class_benefice").innerHTML = s;
				document.getElementById("social_class_benefice_result").innerHTML = "->" + s;
				document.getElementById("character__summary_social_benefice").innerHTML = s;
			});
		});
		
	}
	else if(k>=36 && k<56){
		sclClassName = "ŚKŚ;";
		sclClassId = 5;

		document.querySelectorAll(`button[id=k100_button_social_class_benefice]`).forEach((k_btn) => {
			document.getElementsByClassName("type_dice1")[0].innerHTML = "k100";
			k_btn.addEventListener('click', function(){
				s = k100();
				document.getElementById("social_class_benefice").innerHTML = s;
				document.getElementById("social_class_benefice_result").innerHTML = "->" + s;
				document.getElementById("character__summary_social_benefice").innerHTML = s;
			});
		});
		
	}
	else if(k>=56 && k<76){
		sclClassName = "WKŚ;";
		sclClassId = 6;

		document.querySelectorAll(`button[id=k100_button_social_class_benefice]`).forEach((k_btn) => {
			document.getElementsByClassName("type_dice1")[0].innerHTML = "2k100";
			k_btn.addEventListener('click', function(){
				s=0;
				var c = 0;

				while(c<2){
					s = s + k100();
					c++;
				}
				
				document.getElementById("social_class_benefice").innerHTML = s;
				document.getElementById("social_class_benefice_result").innerHTML = "->" + s;
				document.getElementById("character__summary_social_benefice").innerHTML = s;
			});
		});
		
	}
	else if(k>=76 && k<86){
		sclClassName = "NKW;";
		sclClassId = 7;

		document.querySelectorAll(`button[id=k100_button_social_class_benefice]`).forEach((k_btn) => {
			document.getElementsByClassName("type_dice1")[0].innerHTML = "k100";
			k_btn.addEventListener('click', function(){
				s = k100();
				document.getElementById("social_class_benefice").innerHTML = s;
				document.getElementById("social_class_benefice_result").innerHTML = "->" + s;
				document.getElementById("character__summary_social_benefice").innerHTML = s;
			});
		});
		
	}
	else if(k>=86 && k<91){
		sclClassName = "ŚKW;";
		sclClassId = 8;

		document.querySelectorAll(`button[id=k100_button_social_class_benefice]`).forEach((k_btn) => {
			document.getElementsByClassName("type_dice1")[0].innerHTML = "2k100";
			k_btn.addEventListener('click', function(){
				s=0;
				var c = 0;

				while(c<2){
					s = s + k100();
					c++;
				}
				
				document.getElementById("social_class_benefice").innerHTML = s;
				document.getElementById("social_class_benefice_result").innerHTML = "->" + s;
				document.getElementById("character__summary_social_benefice").innerHTML = s;
			});
		});
		
	}
	else if(k>=91 && k<96){
		sclClassName = "WKW;";
		sclClassId = 9;

		document.querySelectorAll(`button[id=k100_button_social_class_benefice]`).forEach((k_btn) => {
			document.getElementsByClassName("type_dice1")[0].innerHTML = "5k100";
			k_btn.addEventListener('click', function(){
				s=0;
				var c = 0;

				while(c<5){
					s = s + k100();
					c++;
				}
				
				document.getElementById("social_class_benefice").innerHTML = s;
				document.getElementById("social_class_benefice_result").innerHTML = "->" + s;
				document.getElementById("character__summary_social_benefice").innerHTML = s;
			});
		});
		
	}
	else if(k>=96 && k<=100){
		sclClassName = "EW;";
		sclClassId = 10;

		document.querySelectorAll(`button[id=k100_button_social_class_benefice]`).forEach((k_btn) => {
			document.getElementsByClassName("type_dice1")[0].innerHTML = "10k100";
			k_btn.addEventListener('click', function(){
				s=0;
				var c = 0;

				while(c<10){
					s = s + k100();
					c++;
				}

				document.getElementById("social_class_benefice").innerHTML = s;
				document.getElementById("social_class_benefice_result").innerHTML ="->" + s;
				document.getElementById("character__summary_social_benefice").innerHTML = s;
			});
		});
	}

	sclClassIdAtrb = "table2_row" + sclClassId;

	document.getElementById("social_class").innerHTML = sclClassName;
	document.getElementById("character__summary_social").innerHTML = sclClassName;
	document.getElementById("character__summary_social_benefice").innerHTML = s;
	document.getElementById("k100_button_social_class").removeEventListener('click', k100_btn_social_class);

	document.getElementById("table2_row" + sclClassId).classList.add('activeTrTable');


}