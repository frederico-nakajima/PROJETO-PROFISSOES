// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    thumb: "foto-01.jpg",
    name: "Marcia Novaes",
    titulo: "Babá Profissional"
  
  },
  {
    thumb: "foto_feminino.jpeg",
    name: "Marta Magalhães",
    titulo: "Manicure Profissional"
  },
  {
    thumb: "foto-03.jpeg",
    name: "Carla Nunes",
    titulo: "Desenvolvedora Front-end"
  },
  {
    thumb: "foto-04.jpg",
    name: "Tabata Marquezines",
    titulo: "Desenvolvedora Back-end"
  },
  {
    thumb: "foto-05.png",
    name: "Ana Paula Padrão",
    titulo: "Gerente de Loja"
  },
  {
    thumb: "foto-06.jpg",
    name: "Fernanda da Silva",
    titulo: "Analista de Sistema"
  },
  {
    thumb: "foto-07.png",
    name: "Alessandra Martini",
    titulo: "Atendente Profissional"
  },
  {
    thumb: "maria-celia.jpg",
    name: "Maria Célia Nakajima",
    titulo: "Pedagoga"
  },
  {
    thumb: "sakamoto.jpg",
    name: "Sakamoto Fuyumi",
    titulo: "Psicóloga"
  },
  {
    thumb: "Carlos-Bolsonaro-RiodeJaneiro.png",
    name: "Carlos Bolsonaro",
    titulo: "Político Profissional"
  },
  {
    thumb: "jair-bolsonaro-100.jpg",
    name: "Jair Bolsonaro",
    titulo: "Presidente da República"
  },
  {
    thumb: "giovanna-lancelotti_4745.jpeg",
    name: "Fernanda Concon",
    titulo: "Atriz"
  }

];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector("h2").innerHTML = video.name;
  cardClone.querySelector("p").innerHTML = video.titulo;
  sectionCards.appendChild(cardClone);
});

card.remove();