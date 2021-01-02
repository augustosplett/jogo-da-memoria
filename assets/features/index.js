const board = document.querySelector('.board');

board.addEventListener('click', carta =>{
    
    const virar = carta.target.parentElement.parentElement.parentElement;
    console.log(virar);
    const checkboxx = virar.querySelector('#switch')
    if(checkboxx.checked){
        checkboxx.checked = false;
    }else{
        checkboxx.checked = true
    }

    console.log(checkboxx);
    //virar.style.transform = "rotateY(180deg)";


})