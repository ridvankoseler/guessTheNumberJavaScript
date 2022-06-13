let rightCount=document.querySelector(".right");
let guessScreen=document.querySelector(".guess");
let hintScreen=document.querySelector(".hint");
let buttons=document.querySelector(".buttons");
let answerEasy=Math.floor((Math.random()*10)+1)


rightCount.innerText=3;
buttons.addEventListener("click",(e)=>{
    let guess=e.target.innerText;
    if(guessScreen.innerText=="You Have Lost"){
        return;
    }
    else if(guessScreen.innerText=="CONGRATULATIONS"){
        return;
    }
    else{
    if(e.target.classList.contains('buttons') || e.target.classList.contains('subbutton')){
        return;
    }
    else{
    if(guess=="CLEAR"){
        guessScreen.innerText=""
        hintScreen.innerText=""
    }else if(guess=="ENTER"){
        if(guessScreen.innerText<10 && guessScreen.innerText>0){
            if(rightCount.innerText>0){
                if(guessScreen.innerText<answerEasy){
                    hintScreen.innerText=`Enter a number between \n ${guessScreen.innerText} and 10`
                    if(rightCount.innerText>1){
                        rightCount.innerText--
                        guessScreen.innerText="";
                    }else if(rightCount.innerText==1){
                        guessScreen.innerText="You Have Lost";
                        rightCount.innerText="0";
                        hintScreen.innerText=`The Number Was ${answerEasy}`
                    }
                } else if(guessScreen.innerText>answerEasy){
                    hintScreen.innerText=`Enter a number between \n 1 and ${guessScreen.innerText}`
                    if(rightCount.innerText>1){
                        rightCount.innerText--
                        guessScreen.innerText="";
                    }else if(rightCount.innerText==1){
                        guessScreen.innerText="You Have Lost"
                        rightCount.innerText="0";
                        hintScreen.innerText=`The Number Was ${answerEasy}`;
                    }
                }else{
                    guessScreen.innerText="CONGRATULATIONS";
                    hintScreen.innerText=""
                }
            }
        }else{
            hintScreen.innerText="Please enter a number between 1-10"
        }
    }else{
        guessScreen.innerText+=guess;
    }
}
    }
});

