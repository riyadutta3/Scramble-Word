const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";

let sWords = ['canary','truculent','handsome','imminent','toothpaste',
'button','abusive','productive','detailed','afterthought','tedious','wrench'];

const createNewWords = () =>{
    let num = Math.floor(Math.random()*sWords.length);
    let newWords = sWords[num];
    return newWords;
}

const scrambleWords = (arr)=>{
     for(let i=arr.length-1;i>0;i--){
        let temp=arr[i];
        let j = Math.floor(Math.random()*(i+1));

        arr[i] = arr[j];
        arr[j] = temp;
     }
     return arr;
    }

btn.addEventListener('click',function(){
    if(!play){
        play=true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords= createNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = `Guess the word : ${randWords}`;
        guess.value = "";
    }else{
        let temporary = guess.value;
        if(temporary===newWords){
            play=false;
            msg.innerHTML="Awesome Buddy! It is correct!";
            btn.innerHTML="Start Again";
            guess.classList.toggle('hidden');
        }
        else{
            msg.innerHTML=`Incorrect, Try again!! ${randWords}`;
    
            btn.innerHTML="Guess";
        }
    }
 })

 //split method is used to convert string to array