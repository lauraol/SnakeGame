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

let direction = "right"


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

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //criando coordenadas de aumentar ou diminuir a cobrinha
    if(direction == "rigth") snakeX += box;
    if(direction == "left") snakeX -= box; //criando a ilusão que a cobrinha está indo para a esquerda
    if(direction == "up") snakeY += box;
    if(direction == "down") snakeY -=box;

    snake.pop(); //tira o último elemento do array

    let novaCabeca = {
        x: snakeX,
        y: snakeY
    }

    //adiciona um elemento a frente
    snake.unshift(novaCabeca);
}

//intervalo de 100 milisegundos para ir atualizando o joguinho
let jogo = setInterval(iniciarJogo, 100);


