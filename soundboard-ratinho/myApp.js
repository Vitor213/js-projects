let audios = [
    {caminho: './sounds/grito.mp3',legenda: 'GRITO'},
    {caminho: './sounds/jesus.mp3',legenda: 'Jesus'},
    {caminho: './sounds/nao-e-o-pai.mp3',legenda: 'Ele nao e o pai'},
    {caminho: './sounds/pare.mp3',legenda: 'PARE'},
    {caminho: './sounds/que-isso-meu-filho.mp3',legenda: 'que isso meu filho'},
    {caminho: './sounds/ratinhoo.mp3',legenda: 'RATINHOO'},
    {caminho: './sounds/uepa.mp3',legenda: 'uepaa'},
    {caminho: './sounds/vixi-ratinho.mp3',legenda: 'vixi ratinho'},
    {caminho: './sounds/xaropinho.mp3', legenda: 'xaropinho'},
];
let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');
let audioTag = document.querySelector('audio');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda
    botoes[i].setAttribute('data-item', i);
}

botoes.forEach(botao => {
    botao.addEventListener('click',() => {
    let som = audios[botao.getAttribute('data-item')];
    audioTag.setAttribute('src', som.caminho)
    audioTag.addEventListener('loadeddata', ()=> {
        audioTag.play()
    });
    });
});