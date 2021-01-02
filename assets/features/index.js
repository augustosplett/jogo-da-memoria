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
        },2000);
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
