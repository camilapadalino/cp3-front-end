var imagens=[
    'imagens/totoro1.JPG',
    'imagens/mei1.jpg',
    'imagens/totoro2.jpg',
    'imagens/mei2.jpg',
    'imagens/totoro3.jpg',
    'imagens/mei3.jpg',
    'imagens/totoro4.jpg',
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