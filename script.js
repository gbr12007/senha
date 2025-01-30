const input = document.querySelector('.texto');
const btn = document.querySelector('.btn');
const tela = document.querySelector('.mostrar');

let resultado = [];
function mostrar(){
    tela.innerHTML ='';
    for(let i= 0; i<input.value.toUpperCase().length; i++){
        tela.innerHTML +=  resultado[i];
    }
}

function trocar(){
    let alphabet = `ABCDEFGHIJKLMNOPRQSTUVWXYZ!@#$%¨&*()""`;
    var tamanho = input.value.toUpperCase();
    resultado = [];
    for(let i=0; i<tamanho.length; i++){
        var index = alphabet.indexOf(tamanho[i]);
        if(index >= 9){
            let arm = (Number(index) + 1).toString();
            let trocando = `!${arm}!`;
            resultado[i] = trocando;
        }else{
            resultado[i] = Number(index) + 1;
        }  
        
    }
}

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    trocar();
    mostrar();
});

function numerosDecimais(){
    
}