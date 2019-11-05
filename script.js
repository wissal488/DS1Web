//Fala Omar && Ajbabdi Wissal // binome:B07 

var score_joueur1=document.getElementById('score-0');
var score_joueur2=document.getElementById('score-1');
var score_joueur_courent1=document.getElementById('courent-0');
var score_joueur_courent2=document.getElementById('courent-1');
var player0=document.querySelector('.panel-joueur-0');
var player1=document.querySelector('.panel-joueur-1');
var de=document.querySelector('.de');
var lance=document.querySelector('.btn-lancer');
var passe=document.querySelector('.btn-passe');
//var activePlayer = [0,1];

var score=0;

//Question 1:

function init(){


	score_joueur1.innerText=0;
	score_joueur2.innerText=0;
	score_joueur_courent1.innerText=0;
	score_joueur_courent2.innerText=0;

	player0.classList.add("actif");
	player1.classList.remove("actif");

	de.style="display : none"
}init();
//Question 2:
lance.addEventListener("click",function(){
	de.style="display : yes"
	var nbr_aleatoire = Math.floor(Math.random()*6)+1;
	
	switch(nbr_aleatoire){
		case 1 : de.setAttribute('src','de-1.png');score+=1;break;
		case 2 : de.setAttribute('src','de-2.png');score+=2;break;
		case 3 : de.setAttribute('src','de-3.png');score+=3;break;
		case 4 : de.setAttribute('src','de-4.png');score+=4;break;
		case 5 : de.setAttribute('src','de-5.png');score+=5;break;
		case 6 : de.setAttribute('src','de-6.png');score+=6;break;
	}
	

	if(nbr_aleatoire!=1){
		score_joueur_courent1.innerText=score;score_joueur1.innerText=score;
	}
	
	else if(nbr_aleatoire==1){score_joueur_courent1.innerText=0;score=0;} 
 

});
function joueurSuivant(){
	de.style="display : none";
	player0.classList.remove("actif");
	player1.classList.add("actif");


 /* activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  score = 0;

  score_joueur_courent1.textContent = '0';
  score_joueur_courent2.textContent = '0';

  player0.classList.toggle('actif');
  player1.classList.toggle('actif');*/
}

passe.addEventListener('click',joueurSuivant());

