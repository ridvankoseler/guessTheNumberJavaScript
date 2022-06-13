let rightCount=document.querySelector(".right");
let guessScreen=document.querySelector(".guess");
let hintScreen=document.querySelector(".hint");
let buttons=document.querySelector(".buttons");
let answerMedium=Math.floor((Math.random()*50)+1)


rightCount.innerText=5;
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
        if(guessScreen.innerText<50 && guessScreen.innerText>0){
            if(rightCount.innerText>0){
                if(guessScreen.innerText<answerMedium){
                    hintScreen.innerText=`Enter a number between \n ${guessScreen.innerText} and 50`
                    if(rightCount.innerText>1){
                        rightCount.innerText--
                        guessScreen.innerText="";
                    }else if(rightCount.innerText==1){
                        guessScreen.innerText="You Have Lost";
                        rightCount.innerText="0";
                        hintScreen.innerText=`The Number Was ${answerMedium}`
                    }
                } else if(guessScreen.innerText>answerMedium){
                    hintScreen.innerText=`Enter a number between \n 1 and ${guessScreen.innerText}`
                    if(rightCount.innerText>1){
                        rightCount.innerText--
                        guessScreen.innerText="";
                    }else if(rightCount.innerText==1){
                        guessScreen.innerText="You Have Lost"
                        rightCount.innerText="0";
                        hintScreen.innerText=`The Number Was ${answerMedium}`;
                    }
                }else{
                    guessScreen.innerText="CONGRATULATIONS";
                    hintScreen.innerText=""
                }
            }
        }else{
            hintScreen.innerText="Please enter a number between 1-50"
        }
    }else{
        guessScreen.innerText+=guess;
    }}
}});

