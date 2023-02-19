
let state=0;//stan poczatkowy

beasts_in_1_team=2;  //ile 1 graczs ma bestii
open_cards_in_1_team=4;  //ile 1 gracz ma kart otwarcia
superpower_cards_in_1_team=6; //ile 1 gracz ma kart supermocy

let player1_beasts=[];
let player2_beasts=[];

let player1_open=[];
let player2_open=[];

let player1_superpower=[];
let player2_superpower=[];

let whoStartss=5;
let buttonStart=[];

const area_1=document.getElementById("area_1");
const area_2=document.getElementById("area_2");
const area_3=document.getElementById("area_3");
const area_4=document.getElementById("area_4");

const player_1_cards=document.getElementById("player_1_cards");
//let area= document.querySelector(".area");

let draggables;
let areas;
const table_of_beasts=[['skyress','Bakugan_assets/beasts/skyress_card.png'],['tigrerra','Bakugan_assets/beasts/tigrerra_card.png']]
const src_card_number_in_table=1; //ktory element w tablicy 'table of beasts' to asset karty
const reverse_of_beast_card='Bakugan_assets/beasts/reverse_beast.png'
const table_of_open_cards=[["open_card_1","Bakugan_assets/open_cards/open_card.png"],["open_card_2","Bakugan_assets/open_cards/opencard2.png"],["open_card_3","Bakugan_assets/open_cards/opencard3.png"]]

const table_of_superpower_cards=[]

let start=[0, 0];
let interval

let player1_cards_tab=[];
let player1_cards_tab1=[];
let player2_cards_tab=[];
let player2_cards_tab1=[];


nextStepButton=document.getElementById("next_step");


state_f(state);
// intervaly=setInterval(state_f,1000,state);


function state_f(state)
{console.log("funkcja stanu")
//console.log(document.getElementById("player_1_cards").classList.contains("draggable"))
  switch(state)
  {
    case 0:
      console.log("state 0");
      
  
      
      buttonStart[0]=document.getElementById('start_1');
      buttonStart[0].addEventListener('click',()=>{console.log("click");
      start[0]=1;

      if(start[0]==1 && start[1]==1 )
      {
      
        state+=1;
        state_f(state);
      }
      });
      
      buttonStart[1]=document.getElementById('start_2');
      buttonStart[1].addEventListener('click',()=>{console.log("click");
      start[1]=1;
console.log("stan 0")
      if(start[0]==1 && start[1]==1 )
      {
      
        state+=1;
        state_f(state);
      }
      });



      break;
    case 1:
      console.log("state 1");
      beastsForPlayers();
      showingBeasts();
      showingOpen();
      dragging();
      whoStarts();
      console.log("stan 1");
      state+=1;
        state_f(state);
      break;
      case 2:
      
      console.log("gracz "+whoStartss+" zaczyna");
      play(whoStartss);
      nextStepButton.addEventListener("click",()=>{
        console.log("stan 2");
        state=3;
        state_f(state);})
      
      break;
      case 3:
        play((whoStartss+1)%2);
console.log("whostart: "+(whoStartss+1)%2)
        nextStepButton.addEventListener("click",()=>{
          console.log("stan 3");
          state=2;
          state_f(state);
        })
      break;
      
  }
}


function beastsForPlayers()
{
  for(let i=0;i<beasts_in_1_team;i++)  //losowanie bestii dla graczy
{player1_beasts[i]=table_of_beasts[getRandomInt(table_of_beasts.length)];
  player2_beasts[i]=table_of_beasts[getRandomInt(table_of_beasts.length)];
}
console.log(player1_beasts);
console.log(player2_beasts);


for(let i=0;i<open_cards_in_1_team;i++)
{
  player1_open[i]=table_of_open_cards[getRandomInt(table_of_open_cards.length)];
  player2_open[i]=table_of_open_cards[getRandomInt(table_of_open_cards.length)];
}





}

function showingBeasts()
{
  for(let i=0;i<player1_beasts.length;i++) //showing on the player area beasts
  {
  
    player1_cards_tab[i] = document.createElement("img");
    player1_cards_tab[i].setAttribute('src',player1_beasts[i][src_card_number_in_table]) 
    player1_cards_tab[i].style.height='20%'
    player1_cards_tab[i].style.width='14%'
    //player1_cards_tab[i].draggable="false";
    player1_cards_tab[i].className="draggable"
    
    player_1_cards.appendChild(player1_cards_tab[i]);
  
    player2_cards_tab[i] = document.createElement("img");
    player2_cards_tab[i].setAttribute('src',player2_beasts[i][src_card_number_in_table]) 
    player2_cards_tab[i].style.height='20%'
    player2_cards_tab[i].style.width='14%'
   // player2_cards_tab[i].draggable="false";
    player2_cards_tab[i].className="draggable"
    player_2_cards.appendChild(player2_cards_tab[i]);
  
  
  
  }}

  function showingOpen(){
  for(let i=0;i<(player1_open.length);i++)
  {
    player1_cards_tab1[i] = document.createElement("img");
    player1_cards_tab1[i].setAttribute('src',player1_open[i][src_card_number_in_table]) 
    player1_cards_tab1[i].style.height='20%'
    player1_cards_tab1[i].style.width='14%'
    player1_cards_tab1[i].classList.add("open_card","draggable")
  
  }

player_1_cards.appendChild(player1_cards_tab1[0]);

  
}

function dragging()
{
  draggables= document.querySelectorAll('.draggable');
  areas=document.querySelectorAll('.area');
  draggables.forEach(draggable=>
    {
      draggable.addEventListener('dragstart',()=>{console.log("drag start");
      draggable.classList.add('dragging');
    }) 
      draggable.addEventListener('dragend',()=>{draggable.classList.remove('dragging');})
  
    })
  
    areas.forEach(area=>{
      area.style.display='flex';
      area.addEventListener('dragover',()=>{console.log('drag over '+area.id);
    const draggable=document.querySelector('.dragging');
    area.appendChild(draggable);
  draggable.style.height=80+'%';
  draggable.style.width=40+'%';})
    })
  
  

}

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  function Interval()
  {
    console.log(start[0])
    if(start[0]==1 && start[1]==1 )
    {
      clearInterval(interval);
      state+=1;
        state_f(state); 
    }
  }

  function whoStarts() //zaqczyna gre 0 albo 1
  {
    whoStartss=getRandomInt(2);

  }
let licz=0;
  function play(blocked_number)
  {

    document.getElementById("open_card_roll_button").addEventListener("click",()=>{
      
       licz=(licz+1)%4;
    console.log("licz: "+(licz+1)%4)
    player_1_cards.appendChild(player1_cards_tab1[licz]);
    dragging();
   
    if(licz>=1 && document.getElementById("player_1_cards").contains(player1_cards_tab1[licz-1]) ){player_1_cards.removeChild(player1_cards_tab1[licz-1]); }
     if(licz==0  && document.getElementById("player_1_cards").contains(player1_cards_tab1[3]) ){player_1_cards.removeChild(player1_cards_tab1[3]);}
// areas.forEach(area=>{if(area.contains(player1_cards_tab1[licz])){console.log("zawiera")}
// else{}})
      console.log("click r")})
    if(blocked_number==0)
    {
       player1_cards_tab[0].setAttribute("draggable", false);
        player1_cards_tab[1].setAttribute("draggable", false);
     player2_cards_tab[0].setAttribute("draggable", true);
        player2_cards_tab[1].setAttribute("draggable", true);


if(document.getElementById("player_1_cards").contains( player1_cards_tab[0]))
{
    player1_cards_tab[0].setAttribute("src",reverse_of_beast_card);
}

if(document.getElementById("player_1_cards").contains( player1_cards_tab[1]))
{
    player1_cards_tab[1].setAttribute("src",reverse_of_beast_card);
}
      
       



        player2_cards_tab[0].setAttribute("src",player2_beasts[0][src_card_number_in_table]);
        player2_cards_tab[1].setAttribute("src",player2_beasts[1][src_card_number_in_table]);
    }
    if(blocked_number==1)
    {
       player2_cards_tab[0].setAttribute("draggable", false);
        player2_cards_tab[1].setAttribute("draggable", false);

        if(document.getElementById("player_2_cards").contains( player2_cards_tab[0]))  //do poprawy ale dziala
        {
          player2_cards_tab[0].setAttribute("src",reverse_of_beast_card);
        }

        if(document.getElementById("player_2_cards").contains( player2_cards_tab[1]))
        {
          player2_cards_tab[1].setAttribute("src",reverse_of_beast_card);
        }
        
        
    

        player1_cards_tab[0].setAttribute("draggable", true);
        player1_cards_tab[1].setAttribute("draggable", true);
        player1_cards_tab[0].setAttribute("src",player1_beasts[0][src_card_number_in_table]);
        player1_cards_tab[1].setAttribute("src",player1_beasts[1][src_card_number_in_table]);


    }  
    }
  
      

  