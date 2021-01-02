const board = document.querySelector('.board');
var cartaAnterior;
var anterior;

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
};

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
                virar = null;
                mostrar = null;
                figura = null;

            }else{
                virar = null;
                mostrar = null;
                figura = null;
                cartaAnterior = null;
                anterior = null;
            }
        },2000);
    }
})