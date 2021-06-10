console.log('chapter3');

function k100(){
	return Math.floor(Math.random() * 100) + 1;
}

document.querySelectorAll(`button[id=k100_button_section3_disabilities1]`).forEach((k100_btn) => {
	k100_btn.addEventListener('click', k100_button_section3_disabilities);
});

document.querySelectorAll(`button[id=k100_button_section3_abilities1]`).forEach((k100_btn) => {
	k100_btn.addEventListener('click', k100_button_section3_abilities);
});


var chanceForDisability = 20;
var c1 = 1;
function k100_button_section3_disabilities(){
	var k;
	k= k100();

	var element = document.getElementById("section3_disabilities_result" +(c1));
	if(element != null) element.innerHTML ="->" + k;

	if(k<=chanceForDisability){
		if(chanceForDisability!=5) chanceForDisability -=5;

		const tmpl = document.createElement('div');
		var element = document.getElementById("tmpl1");

		tmpl.innerHTML = `
				<p>
					Czy postać ma ułomność (`+chanceForDisability+ `% szansa)->
					<button id="k100_button_section3_disabilities`+(c1+1)+`" class="button_inline"><span class="type_dice2">k100</span></button>
					<span id="section3_disabilities_result`+(c1+1)+`">0</span>
					<div>
						ułomność: 
						<span id="section3_disabilitiesName`+(c1+1)+`"> brak</span>;
					</div>
				</p>
		  	`
			element.appendChild(tmpl);	
			

			var idButton1 = "k100_button_section3_disabilities" +c1;
			var idButton2 = "k100_button_section3_disabilities" +(c1+1);
			
			
			document.getElementById(idButton1).removeEventListener('click', k100_button_section3_disabilities);
			
			document.getElementById(idButton2).addEventListener('click', k100_button_section3_disabilities);

			c1++;
		}
		else {
			document.getElementById("k100_button_section3_disabilities" +c1).removeEventListener('click', k100_button_section3_disabilities);
		}
	
}

var chanceForAbility = 10;
var c2 = 1;
function k100_button_section3_abilities(){
	var k;
	k= k100();

	var element = document.getElementById("section3_abilities_result" +(c2));
	if(element != null) element.innerHTML ="->" + k;

		if(k<=chanceForAbility){
			if(chanceForAbility!=5) chanceForAbility -=5;

			const tmpl = document.createElement('div');
			var element = document.getElementById("tmpl2");

			tmpl.innerHTML = `
				<p>
					Czy postać ma zdolność nadnaturalną (`+chanceForAbility+ `% szansa)->
					<button id="k100_button_section3_abilities`+(c2+1)+`" class="button_inline"><span class="type_dice2">k100</span></button>
					<span id="section3_abilities_result`+(c2+1)+`">0</span>
					<div>
						zdolność nadnaturalna: 
						<span id="section3_abilitiesName`+(c2+1)+`"> brak</span>;
					</div>
				</p>
		  	`
			element.appendChild(tmpl);	
			

			var idButton1 = "k100_button_section3_abilities" +c2;
			var idButton2 = "k100_button_section3_abilities" +(c2+1);
			
			
			document.getElementById(idButton1).removeEventListener('click', k100_button_section3_abilities);
			
			document.getElementById(idButton2).addEventListener('click', k100_button_section3_abilities);

			c2++;
		}
		else {
			document.getElementById("k100_button_section3_abilities" +c2).removeEventListener('click', k100_button_section3_abilities);
		}
}

let disabilities = [
	{
		id: 1, 
		name:"karzeł",
		description:"wzrost postaci jest mniejszy od minimalnego wzrostu jego rasy o 20 + k10 cm (patrz punkt V oraztabela V.a) konsekwencją tego jest zmniejszenie SZ postaci o połowę tej różnicy", 
		modStatsId1: 1,
		modStatsValue: 20,
		modStatsDice: 10
	},
	{
		id: 2, 
		name:"kulawy", 
		description:"dwukrotnie zmniejsza szybkość poruszania się postaci oraz o 2k10 pkt. jej PR", 
		modStatsId: 7,
		modStatsValue: 20,
		modStatsDice: 10
	},
	{
		id: 3, 
		name:"platfus", 
		description:"o 10 + k10 zmniejsza szybkość poruszania się postaci", 
		modStatsId: 7,
		modStatsValue: 10,
		modStatsDice: 10
	},
	{
		id: 4, 
		name:"zezowaty", 
		description:"zmniejsza PR o 10 + k10 pkt. oraz powoduje, że każda podjęta przez postać akcja ma o 1 segment większe opóźnienie",
		modStatsId: 12,
		modStatsValue: 10,
		modStatsDice: 10
	},
	{
		id: 5, 
		name:"kulawy", 
		description:"",modStatsId: 1,
		modStatsId: 1,
		modStatsValue: 20,
		modStatsDice: 10
	},
	{
		id: 6, 
		name:"kulawy", 
		description:"",
		modStatsId: 1,
		modStatsValue: 20,
		modStatsDice: 10
	},
	{
		id: 7, 
		name:"kulawy", 
		description:"",
		modStatsId: 1,
		modStatsValue: 20,
		modStatsDice: 10
	},
	{
		id: 8, 
		name:"kulawy", 
		description:"",
		modStatsId: 1,
		modStatsValue: 20,
		modStatsDice: 10
	}
]
