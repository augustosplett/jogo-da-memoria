const board = document.querySelector('.board');
var cartaAnterior;
var anterior;

board.addEventListener('click', carta =>{
    
    let virar = carta.target.parentElement.parentElement.parentElement;
    let mostrar = virar.querySelector('#switch');
    let figura = virar.querySelector('.anverso-carta').childNodes[0].src;
    
    if(cartaAnterior == null){
        cartaAnterior = figura;
        anterior = mostrar;
        viraDesvira(mostrar);
    }else{
        viraDesvira(mostrar);
        
        setTimeout(()=>{        
            if(cartaAnterior!==figura){
                viraDesvira(mostrar);
                viraDesvira(anterior);
                limpaTudo();
            }else{
                limpaTudo();
            }
        },800);
    };
})

function isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};

function viraDesvira(carta){
    if(carta.checked){
        carta.checked = false;
    }else{
        carta.checked = true;
    }
};

function limpaTudo(){
    cartaAnterior = null;
    anterior = null;
    virar = null;
    mostrar = null;
    figura = null;
};

var animais = ['bear', 'coala', 'jacare', 'lion', 'rena'];

//https://github.com/Daplie/knuth-shuffle/blob/master/index.js
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

function novoJogo(){
    board.innerHTML = null;

    for(let i=1; i<3; i++){
        var texto = '';

        shuffle(animais).forEach(el =>{
            texto = texto + 
            `<div class="box-carta">
            <input type="checkbox" id="switch">
            <div class="carta">
                <div class="verso-carta "><img class="cards" src="assets/img/versoCartas.png" /></div>
                <div class="anverso-carta "><img class="cards" id="${el}" src="assets/img/${el}.png" /></div>
            </div>                
            </div>` 

        })

        board.innerHTML += texto;
    }
}
