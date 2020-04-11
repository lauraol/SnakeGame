let canvas = document.getElementById("snake");

//irá renderizar o joguinho
//irá tratar o arquivo como um 2d
let context = canvas.getContext("2d");
let box = 32;//tamanho dos quadradinhos
let snake = [];

//tamanho da cobrinha.
snake[0] = {
    x:8 * box,
    y:8 * box
}


function criarBG(){
    context.fillStyle = "lightblue";
    
    //irá desenhar o retangulo onde o jogo irá acontecer 
    //trabalha com a posição de x e y, altura e largura
    context.fillRect(0, 0, 16 * box, 16 * box)
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }

}

criarBG();
criarCobrinha();
