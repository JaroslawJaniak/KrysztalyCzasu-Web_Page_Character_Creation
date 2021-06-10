class RaceHeightObj {
    constructor(id, minHeight, avrHeight1, avrHeight2, maxHeight) {
        this.id = id;
        this.minHeight = minHeight;
        this.avrHeight1 = avrHeight1;
        this.avrHeight2 = avrHeight2;
        this.maxHeight = maxHeight;
    }
}

var T1 = [
    new RaceHeightObj('race1',150, 170, 180, 200),
    new RaceHeightObj('race2',150, 170, 180, 200),
    new RaceHeightObj('race3',160, 180, 190, 210),

    new RaceHeightObj('race4',180, 200, 210, 230),
    new RaceHeightObj('race5',150, 170, 180, 150),
    new RaceHeightObj('race6',100, 120, 130, 150),

    new RaceHeightObj('race7',100, 120, 130, 150),
    new RaceHeightObj('race8',90, 110, 120, 140),
    new RaceHeightObj('race9',150, 170, 180, 200)
]
  
class RaceWeightObj {
    constructor(id, minWeight, avrWeight1, avrWeight2, maxWeight) {
        this.id = id;
        this.minWeight = minWeight;
        this.avrWeight1 = avrWeight1;
        this.avrWeight2 = avrWeight2;
        this.maxWeight = maxWeight;
    }
}

var T2 = [
    new RaceWeightObj('race1',50, 70, 80, 100),
    new RaceWeightObj('race2',50, 70, 80, 100),
    new RaceWeightObj('race3',40, 50, 70, 90),

    new RaceWeightObj('race4',80, 100, 110, 130),
    new RaceWeightObj('race5',50, 70, 80, 100),
    new RaceWeightObj('race6',50, 70, 80, 100),

    new RaceWeightObj('race7',50, 70, 80, 100),
    new RaceWeightObj('race8',30, 50, 60, 80),
    new RaceWeightObj('race9',50, 70, 80, 100)
]



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

document.querySelectorAll(`button[id=k100_button_height]`).forEach((k100_btn) => {
	k100_btn.addEventListener('click', k100_btn_height);
});

document.querySelectorAll(`button[id=k100_button_weight]`).forEach((k100_btn) => {
	k100_btn.addEventListener('click', k100_btn_weight);
});

var race_Id;
var raceName;
var indeks;

//która rasa została wybrana
    document.querySelectorAll("input[class=checkbox__race]").forEach((checkbox_rc) => {
	checkbox_rc.addEventListener('change', function() {
		if(this.checked){
			race_Id = this.getAttribute('id');
            raceName = this.getAttribute('value');
		}

//test objektu
        for (i in T1) {
            if(race_Id == T1[i].id) indeks = i;
        }

        //console.log('active Race Checkbox: ' + raceName);
        //console.log('active Race Obj T1 indeks: ' + indeks);
	});
});

function k100_btn_height(){
	var k = k100();
	var s=0;
    var totalHeight=0;

    var minHeight = 0;
    var avrHeight1 = 0;
    var avrHeight2 = 0;
    var maxHeight = 0;

    //wynik rzutu k100 jesli rasa postaci została wybrana
    if(race_Id!=null){
        document.getElementById("result4").innerHTML = "-> " + k;
    }
    else{
        console.error('no active Race Checkbox!');
    }

	if(k>=1 && k<21){
		totalHeight = T1[indeks].minHeight + k;
	}
	else if(k>=21 && k<81){
		var dig = k - Math.floor(k/10) * 10;
        totalHeight = T1[indeks].avrHeight1 + dig;
        //console.log('dig: ' + dig);
	}
	else if(k>=81 && k<100){
		totalHeight = T1[indeks].avrHeight2 + (k-80);
	}
	else if(k==100){
        create_k10_button_premium();
	}
    
    document.getElementById('k100_button_height').removeEventListener('click', k100_btn_height);
    
    //jesli kobieta i nie półolbrzym to -> totalHeight = totalHeight -10
    if(document.getElementById('female').checked){
        if(document.getElementById('race4').checked){
            totalHeight = totalHeight + 10;
        }
        else{
            totalHeight = totalHeight -10;
        }
    }
	document.getElementById("height_character").innerHTML = totalHeight + "cm";
    document.getElementById("character__summary_height").innerHTML = totalHeight + "cm";
    
}

var q1 = 0;
var total_k10 = 0;

function create_k10_button_premium(){  
    const tmpl = document.createElement('div');
    var element = document.getElementById("tmpl3");
    //console.log("q1 (id_k10_premium): " + (q1))

    tmpl.innerHTML = `
                    <p>
                        Premiowany rzut k10:<br>
                        <button id="k10_button_premium_height`+(q1)+`" class="button_inline"><span class="type_dice2">k10</span></button>
                        <span id="section5_k10_height_result`+(q1)+`"></span>
                    </p>
                `
    element.appendChild(tmpl);	

    var element2 = document.getElementById("section5_k10_height_result" +(q1));
    element2.innerHTML = "->"
    
    var id_k10_button_premium_height = "k10_button_premium_height" +q1;
    //console.log("idButton1: " + id_k10_button_premium_height)
    
    document.getElementById(id_k10_button_premium_height).addEventListener('click', k10_button_premium);

    q1++;
    
}

function k10_button_premium(){
    var k = k10();
    total_k10 = total_k10 + k;
    var element = document.getElementById("section5_k10_height_result" +(q1-1));
    if(element!=null){element.innerHTML = "->" + k;}

    if(k==10) {
        create_k10_button_premium();
    }
    //console.log("q1++: " + (q1));
    //console.log("total_k10: " + (total_k10));
    totalHeight = T1[indeks].maxHeight + total_k10;
    //console.log("totalHeight: " + (totalHeight));


    //jesli kobieta i nie półolbrzym to -> totalHeight = totalHeight -10
    if(document.getElementById('female').checked){
        if(document.getElementById('race4').checked){
            totalHeight = totalHeight + 10;
        }
        else{
            totalHeight = totalHeight -10;
        }
    }
    document.getElementById("height_character").innerHTML = totalHeight + "cm";
    document.getElementById("character__summary_height").innerHTML = totalHeight + "cm";

}

//WAGA
function k100_btn_weight(){
	var k = k100();
	var s=0;
    var totalWeight=0;

    //wynik rzutu k100 jesli rasa postaci została wybrana
    if(race_Id!=null){
        document.getElementById("result5").innerHTML = "-> " + k;
    }
    else{
        console.error('no active Race Checkbox!');
    }

	if(k>=1 && k<21){
		totalWeight = T2[indeks].minWeight + k;
	}
	else if(k>=21 && k<81){
		var dig = k - Math.floor(k/10) * 10;
        totalWeight = T2[indeks].avrWeight1 + dig;
        //console.log('dig: ' + dig);
	}
	else if(k>=81 && k<100){
		totalWeight = T2[indeks].avrWeight2 + (k-80);
	}
	else if(k==100){
        create_k10_button_premium2();
	}
    
    document.getElementById('k100_button_weight').removeEventListener('click', k100_btn_weight);
    
    //jesli kobieta i nie półolbrzym to -> totalHeight = totalHeight -10
    if(document.getElementById('female').checked){
        if(document.getElementById('race4').checked){
            totalWeight = totalWeight + 10;
        }
        else{
            totalWeight = totalWeight -10;
        }
    }
	document.getElementById("weight_character").innerHTML = totalWeight  + "kg";
    document.getElementById("character__summary_weight").innerHTML = totalWeight  + "kg";
}

var q1 = 0;
var total_k10 = 0;

function create_k10_button_premium2(){  
    const tmpl = document.createElement('div');
    var element = document.getElementById("tmpl3");
    console.log("q1 (id_k10_premium): " + (q1))

    tmpl.innerHTML = `
                    <p>
                        Premiowany rzut k10:<br>
                        <button id="k10_button_premium_weight`+(q1)+`" class="button_inline"><span class="type_dice2">k10</span></button>
                        <span id="section5_k10_weight_result`+(q1)+`"></span>
                    </p>
                `
    element.appendChild(tmpl);	

    var element2 = document.getElementById("section5_k10_weight_result" +(q1));
    element2.innerHTML = "->"
    
    var id_k10_button_premium_weight = "k10_button_premium_weight" +q1;
    console.log("idButton1: " + id_k10_button_premium_weight)
    
    document.getElementById(id_k10_button_premium_weight).addEventListener('click', k10_button_premium);

    q1++; 
}

function k10_button_premium(){
    var k = k10();
    total_k10 = total_k10 + k;
    var element = document.getElementById("section5_k10_height_result" +(q1-1));
    if(element!=null){element.innerHTML = "->" + k;}

    if(k==10) {
        create_k10_button_premium();
    }
    console.log("q1++: " + (q1));
    console.log("total_k10: " + (total_k10));
    totalWeight = T1[indeks].maxWeight + total_k10;
    console.log("totalWeight: " + (totalWeight));


    //jesli kobieta i nie półolbrzym to -> totalHeight = totalHeight -10
    if(document.getElementById('female').checked){
        if(document.getElementById('race4').checked){
            totalWeight = totalWeight + 10;
        }
        else{
            totalWeight = totalWeight -10;
        }
    }
    document.getElementById("weight_character").innerHTML = totalWeight  + "kg";
    document.getElementById("character__summary_weight").innerHTML = totalWeight + "kg";
}