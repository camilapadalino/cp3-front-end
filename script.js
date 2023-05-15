var imagens=[
    'imagens/totoro1.jpg',
    'imagens/mei1.png',
    'imagens/totoro2.png',
    'imagens/mei2.png',
    'imagens/totoro3.jpg',
    'imagens/mei3.png',
    'imagens/totoro4.png',
    'imagens/mei4.jpg'
];

var Index = 0;
var time = 1000;

function slideShow(){
    document.getElementById('slide').src = imagens[Index];
    Index++;
    if(Index == imagens.length){Index = 0;}
    setTimeout("slideShow()", time);
}

slideShow();