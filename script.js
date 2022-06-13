let rightCount=document.querySelector(".right");
let guessScreen=document.querySelector(".guess");
let hintScreen=document.querySelector(".hint");
let buttons=document.querySelector(".buttons");
let answerEasy=Math.floor((Math.random()*10)+1)
let answerMedium=Math.floor((Math.random()*50)+1)
let answerHard=Math.floor((Math.random()*100)+1)


buttons.addEventListener("click",(e)=>{
    let guess=e.target.innerText;
    if(guess=="CLEAR"){
        guessScreen.innerText=""
        hintScreen.innerText=""
    }else if(guess=="ENTER"){   
            if(guessScreen.innerText<answer){
            hintScreen.innerText="Increase your number"
            if(rightCount.innerText>1){
                rightCount.innerText--
                guessScreen.innerText="";
            }else if(rightCount.innerText==1){
                guessScreen.innerText="You Have Lost";
                rightCount.innerText="0";
                hintScreen.innerText=`The number was ${answerEasy}`
            }
        } else if(guessScreen.innerText>answer){
            hintScreen.innerText="Decrease your number"
            if(rightCount.innerText>=1){
                rightCount.innerText--
                guessScreen.innerText="";
            }else if(rightCount.innerText==0){
                guessScreen.innerText="You Lose"
                rightCount.innerText="0";
                hintScreen.innerText=`The number was ${answerEasy}`;
            }
        }else{
            hintScreen.innerText="Congratulations"
        }
    }else{
        guessScreen.innerText+=guess;
    }
});


