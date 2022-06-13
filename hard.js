let rightCount=document.querySelector(".right");
let guessScreen=document.querySelector(".guess");
let hintScreen=document.querySelector(".hint");
let buttons=document.querySelector(".buttons");
let answerHard=Math.floor((Math.random()*100)+1)


rightCount.innerText=7;
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
        if(guessScreen.innerText<100 && guessScreen.innerText>0){
            if(rightCount.innerText>0){
                if(guessScreen.innerText<answerHard){
                    hintScreen.innerText=`Enter a number between \n ${guessScreen.innerText} and 100`
                    if(rightCount.innerText>1){
                        rightCount.innerText--
                        guessScreen.innerText="";
                    }else if(rightCount.innerText==1){
                        guessScreen.innerText="You Have Lost";
                        rightCount.innerText="0";
                        hintScreen.innerText=`The Number Was ${answerHard}`
                    }
                } else if(guessScreen.innerText>answerHard){
                    hintScreen.innerText=`Enter a number between \n 1 and ${guessScreen.innerText}`
                    if(rightCount.innerText>1){
                        rightCount.innerText--
                        guessScreen.innerText="";
                    }else if(rightCount.innerText==1){
                        guessScreen.innerText="You Have Lost"
                        rightCount.innerText="0";
                        hintScreen.innerText=`The Number Was ${answerHard}`;
                    }
                }else{
                    guessScreen.innerText="CONGRATULATIONS";
                    hintScreen.innerText=""
                }
            }
        }else{
            hintScreen.innerText="Please enter a number between 1-100"
        }
    }else{
        guessScreen.innerText+=guess;
    }}
}});

