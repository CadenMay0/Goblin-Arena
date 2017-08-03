var plUnit;
var enemyUnit;
var gobbosAr=[];
var defendUnit;
var pG=0;
var plStats;
var enStats;
var plIndex;
var enIndex;
var sHTMLOut;
var ga = {

	goblins: {
		1:{
			name: "Gobbo",
			hp: 150,
			baseATK: 3,
			def: 15, 
			image: "assets/images/gobbo.jpg"
		},
		2:{
			name: "Horatio",
			hp: 110,
			baseATK: 5,
			def: 20,
			image:"assets/images/horatio.jpg"
		},
		3:{
			name: "Eunox",
			hp: 100,
			baseATK: 8,
			def: 20,
			image: "assets/images/eunox.jpg"
		},
		4:{
			name: "Gortaxzo",
			hp: 180,
			baseATK: 2,
			def: 10,
			image: "assets/images/Gortaxzo.jpg"
		}

	},
	loadGoblin: function(){
		var goblin;
		$.each(ga.goblins, function(key, goblin){
			sHTMLOut = ("<div id='gob_" + key + "' class='gBox'><span id = 'gobName_"+key+"' class='gName'>" + goblin.name + "</span><br><img class='gImage' id='gobImg_"+key+"' src='" + goblin.image + "'/><br><span id ='gobHP_"+key+"' class='gHP'>" + goblin.hp + "</span></div>");
			$("#player").append(sHTMLOut);
		});
	},
	enemyGoblin: function(posit){
		if(pG===0){
			var picked = posit;
			var divfoc= document.getElementById("gob_"+posit);
			plUnit = divfoc;
			var goblin;
			posit=1;
			$.each(ga.goblins, function(key,goblin){
				if(posit != picked){
					divfoc= document.getElementById("gob_"+posit);
					$("#enemy").append(divfoc);	
					posit++;	
				}
				else{
					posit++;
				}

				})
			picked--;
			console.log(gobbosAr[picked]);
			plStats = gobbosAr[picked];
			//return ga.goblins.picked;	
			};
		},
	defendGoblin: function(posit){
		if(pG===1)
		{
		var divfoc = document.getElementById("gob_"+posit);
		$("#defender").append(divfoc);
		posit--;
		enStats = gobbosAr[posit];
		return;
		}
	}

}

function battle(obj1, obj2,posit1,posit2){
	obj2.hp = (obj2.hp) -(obj1.baseATK);
	obj1.baseATK = obj1.baseATK + obj1.baseATK;
	var hpSpan = document.getElementById("gobHP_"+posit1);
	$(hpSpan).text(obj1.hp);
	if(obj2.hp>0){
		obj1.hp = obj1.hp - obj2.def; 
		hpSpan = document.getElementById("gobHP_"+posit2);
		$(hpSpan).text(obj1.hp);
	}
	else{
		$("#defender").empty();
		pG=1;
		return;
	}
	//console.log(obj1);
	//console.log(obj2);
}

$(document).ready(function(){
	ga.loadGoblin();
	gobbosAr=[ga.goblins[1],ga.goblins[2],ga.goblins[3],ga.goblins[4]];
	$("#player .gBox").on("click",function(event) {
    var clicked = (event.target.id.slice(-1));
    console.log(clicked);
    if(pG===0){
    	ga.enemyGoblin(clicked);
    	plIndex=clicked;
    }
    else if(pG===1){
        ga.defendGoblin(clicked);
        enIndex=clicked;
    }
    else{
    	console.log("oop");
    }
    pG++;
   });
});