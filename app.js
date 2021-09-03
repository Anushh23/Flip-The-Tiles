document.addEventListener('DOMContentLoaded', () => {
    var TotalMoves=0,move1=0;
cardArray=[
    {
        name: 'burger',
        img: 'images/burger.jpg'
    },
    {
        name: 'burger',
        img: 'images/burger.jpg'
    },
    {
        name: 'candy',
        img: 'images/candy.jpg'
    },
    {
        name: 'candy',
        img: 'images/candy.jpg'
    },
    {
        name: 'dog',
        img: 'images/dog.jpg'
    },
    {
        name: 'dog',
        img: 'images/dog.jpg'
    },
    {
        name: 'donut',
        img: 'images/donut.jpg'
    },
    {
        name: 'donut',
        img: 'images/donut.jpg'
    },
    {
        name: 'dragon',
        img: 'images/dragon.jpg'
    },
    {
        name: 'dragon',
        img: 'images/dragon.jpg'
    },
    {
        name: 'iceCream',
        img: 'images/iceCream.jpg'
    },
    {
        name: 'iceCream',
        img: 'images/iceCream.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'pumpkin',
        img: 'images/pumpkin.jpg'
    },
    {
        name: 'pumpkin',
        img: 'images/pumpkin.jpg'
    }
]
// cardArray.sort(()=> 0.5- Math.random());
// A better way to sort the array to generate more randomness!
function sortArray(){
    var yo= cardArray.length-1;
 for(let i = yo;i >0;i--) {
    const j = Math.floor(Math.random() * i);
    const temp = cardArray[i];
    cardArray[i] = cardArray[j];
    cardArray[j] = temp;
  }
}
const grid= document.querySelector('#grid');

function createGrid(){
    for(let i=0;i<cardArray.length;i++){
        let card= document.createElement('img');
        card.setAttribute('src','images/bg-1.jpg');
        card.setAttribute('DataId',i);
        card.addEventListener('click',flipcard);
        grid.appendChild(card); 
    }
}
sortArray();

cardSelected=[];
cardIdSelected=[];
cardsDone=[];
function match(){
    const cards= document.querySelectorAll('img');
    let cardId1= cardIdSelected[0];
    let cardId2= cardIdSelected[1];
    if(cardId1==cardId2){
        alert('You have to choose two different cards!');
        cards[cardId1].setAttribute('src','images/bg-1.jpg');
        // cards[cardId2].setAttribute('src','images/bg-1.jpg');
    }
    else if(cardSelected[0]===cardSelected[1]){

        // alert('Correct Match')
        cards[cardId1].setAttribute('src','images/white-bg.jpg');
        cards[cardId2].setAttribute('src','images/white-bg.jpg');
        cards[cardId1].removeEventListener('click',flipcard);
        cards[cardId2].removeEventListener('click',flipcard);
        cardsDone.push(cardId1);
        // cardsDone.push(cardId2);
    }
    else{
        // alert('Incorrect Match')
        cards[cardId1].setAttribute('src','images/bg-1.jpg');
        cards[cardId2].setAttribute('src','images/bg-1.jpg');   
    }
    cardIdSelected=[];
    cardSelected=[];
    document.getElementById('points').innerHTML="Score: "+cardsDone.length;
    if(cardsDone.length==cardArray.length/2){
        clearInterval(interval);
        document.getElementById('result').innerHTML="YOU WON✨🎉"
        document.getElementById('moves').innerHTML="Total Moves: " +TotalMoves;
        clicks=0;
    }
}
function flipcard(){
    // if(clicks==0){return;}
      move1++;
      if(move1==1){setTimer();}
      let cardId= this.getAttribute('DataId');
      cardIdSelected.push(cardId);
      cardSelected.push(cardArray[cardId].name);
      this.setAttribute('src',cardArray[cardId].img);
     // setTimeout( function(){
    //   if(cardSelected.length==2){
    //     setTimeout(match,500); 
    //   }},500);
      if(cardSelected.length==2){
          TotalMoves++;
        setTimeout(match,500); 
      }
}
var second=0, minute=0;
var timer= document.querySelector('#timer');
var interval;
function setTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}
createGrid();
})