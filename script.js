//Fala Omar && Ajbabdi Wissal // binome:B07 

var score_joueur1=document.getElementById('score-0');
var score_joueur2=document.getElementById('score-1');
var score_joueur_courent1=document.getElementById('courent-0');
var score_joueur_courent2=document.getElementById('courent-1');
var player0=document.querySelector('.panel-joueur-0');
var player1=document.querySelector('.panel-joueur-1');
var de=document.querySelector('.de');
var lance=document.querySelector('.btn-lancer');


//Question 1:
function init(){


	score_joueur1.innerText=0;
	score_joueur2.innerText=0;
	score_joueur_courent1.innerText=0;
	score_joueur_courent2.innerText=0;

	player0.classList.add("actif");
	player1.classList.remove("actif");

	//de.remove("de");
}init();
//Question 2:
lance.addEventListener("click",function(){
	var nbr_aleatoire = Math.floor(Math.random()*6)+1;
	
	switch(nbr_aleatoire){
		case 1 : de.setAttribute('src','de-1.png');break;
		case 2 : de.setAttribute('src','de-2.png');break;
		case 3 : de.setAttribute('src','de-3.png');break;
		case 4 : de.setAttribute('src','de-4.png');break;
		case 5 : de.setAttribute('src','de-5.png');break;
		case 6 : de.setAttribute('src','de-6.png');break;
	}
	var com=0;
	com+=nbr_aleatoire;

	if(nbr_aleatoire==1)
		score_joueur_courent1.innerText=0;




})


