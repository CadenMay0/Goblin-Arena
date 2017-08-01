var plUnit;
var enemyUnit;
var defendUnit;
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
			baseATK: Math.floor((Math.random()*2)+1)==1?1:95,
			def: 10,
			image: "assets/images/Gortaxzo.jpg"
		}

	},
	loadGoblin: function(){
		var goblin;
		var sHTMLOut;
		//var sHTMLOut = [];
		//console.log("goodbye");
		$.each(ga.goblins, function(key, goblin){
			sHTMLOut = ("<div id='gob_" + key + "' class='gBox'><span id = 'gobName_"+key+"' class='gName'>" + goblin.name + "</span><br><img class='gImage' id='gobImg_"+key+"' src='" + goblin.image + "'/><br><span id ='gobHP_"+key+"' class='gHP'>" + goblin.hp + "</span></div>");
			//sHTMLOut.push();
			//sHTMLOut.push("");
			//sHTMLOut.push(");
			//sHTMLOut.push(");
			//console.log("Hello");

			$("#player").append(sHTMLOut);
		});
	},
	enemyGoblin: function(key){
		$.each(ga.goblins, function(){
			$("#enemy").append("gob_"+key);			
		} )
	}
};



$(document).ready(function(){
			//$("#player").append(ga.loadGoblin());
	ga.loadGoblin();
	$(".gBox").on("click",function(event) {
    plUnit = (event.target.id.slice(-1));
    console.log(plUnit);
    //if(plUnit == 'gob_1'||plUnit=='gobImg_1'){
      // console.log("hello");
       //stop();
    //}
   	//});
   	switch(plUnit){
   		case "1": ga.enemyGoblin(,plUnit);
   			break;
   		case "2":
   		case "3":
   		case "4":
   //		break;
	}
  	});
});