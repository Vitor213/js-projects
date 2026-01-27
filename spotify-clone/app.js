let musicas = [
  {
    titulo: "Dragon Ball Z - Chala Head Chala",
    artista: "Hironobu Kageyama",
    src: "songs/Dragon_Ball_Z_-_Chala_Head_Chala_(mp3.pm).mp3",
    img: "imgs/dbz-spoty.jpg",
  },
  {
    titulo: "Creep",
    artista: "RadioHead",
    src: "songs/radiohead_-_creep_(mp3.pm).mp3",
    img: "imgs/creep-spoty.jpg",
  },
];
let indexMusica = 0;
let musica = document.querySelector("audio");
let imagem = document.querySelector("img");
let nomeDaMusica = document.querySelector(".description h2");
let nomeArtista = document.querySelector(".description i");

renderizarMusica(indexMusica);
musica.addEventListener("loadeddata", duration);

document.querySelector(".btn-play").addEventListener("click", tocarMusica);

document.querySelector(".btn-pause").addEventListener("click", pausarMusica);

document.querySelector(".anterior").addEventListener("click", () => {
  indexMusica--;
  if (indexMusica < 0) {
    indexMusica = 1;
  }
  renderizarMusica(indexMusica);
});
document.querySelector(".proxima").addEventListener("click", () => {
  if (indexMusica > 1) {
    indexMusica = 0;
  }
  indexMusica++;
  renderizarMusica(indexMusica);
});
musica.addEventListener("timeupdate", atualizarBarra);

function tocarMusica() {
  musica.play();
  document.querySelector(".btn-pause").style.display = "block";
  document.querySelector(".btn-play").style.display = "none";
}
function pausarMusica() {
  musica.pause();
  document.querySelector(".btn-pause").style.display = "none";
  document.querySelector(".btn-play").style.display = "block";
}
function atualizarBarra() {
  let barra = document.querySelector("progress");
  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";
  let tempoDecorrido = document.querySelector(".inicio");
  tempoDecorrido.textContent = segundoParaMinutos(
    Math.floor(musica.currentTime),
  );
  let duracaoMusica = document.querySelector(".fim");
  duracaoMusica.textContent = segundoParaMinutos(Math.floor(musica.duration));
}
function segundoParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }
  return campoMinutos + ":" + campoSegundos;
}
function renderizarMusica(index) {
  musica.setAttribute("src", musicas[index].src);
  musica.addEventListener("loadeddata", () => {
    nomeDaMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img;
    duracaoMusica.textContent = segundoParaMinutos(Math.floor(musica.duration));
  });
}
function duration() {
  let duracaoMusica = document.querySelector(".fim");
  duracaoMusica.textContent = segundoParaMinutos(Math.floor(musica.duration));
}
