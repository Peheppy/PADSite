import './App.css';
import bg from './bgimg.jpg';
import sinpImg from "./sinopseimg.jpg";
import histImg from "./historiaimg.png";
import per1Img from "./personagem1img.png";
import per2Img from "./personagem2img.png";
import jogImg from "./jogabilidadeimg.png";


function App() {
  return (
    <div className="App">

      <div className="head-text">
        <div className="head-image">
          <img className="img-home" src = {bg} alt = ""/>  
        </div>
        <div className="text-on-image">
          <h1>SYRINXS</h1>
        </div>
      </div>

      <div className="head">
        <h1>Sinópse</h1>
      </div>
      <img className="img-conteudo" src = {sinpImg} alt = ""/>
      <div className="Sinopse">
        <p>Syrinxs é um jogo de exploração com elementos de RPG que busca trazer ao jogador uma experiência desafiadora 
        por meio dos inimigos espalhados pelo mapa do jogo e também pela punição pelos erros ao jogador, similar ao
        aclamado título Dark Souls. Outro fator de destaque na obra é a escolha das paletas de cores, as quais buscam
        trazer uma temática nacional, relembrando a cultura brasileira. 
        </p>
      </div>
      
      <div className= "head">
        <h1>História</h1>
      </div>
      <img className="img-historia" src = {histImg} alt = ""/>
      <div className="Historia">
        <p>Em um mundo futurista, a protagonista Héstia é a última da sua espécie, os Syrinxs, e esbarra com um 
        diário antigo enquanto fugia dos humanos cruéis que aniquilaram a sua raça. Após a descoberta do 
        diário, a protagonista percebe que nem tudo é o que parece ser e encontra o objetivo de fugir para o 
        que aparenta ter se tornado o único lugar seguro da Terra, com um porém: ela precisa encontrar nas ruínas 
        perdidas uma chave há muito perdida para poder adentrar tal local.
        </p>
      </div>

      <div className="head">
        <h1>Personagens</h1>
      </div>
      <h2>Héstia</h2>
      <img className="img-personagem1" src = {per1Img} alt = ""/>
      <div className="Personagem1">
        <p>A protagonista controlada pelo jogador(a) é Héstia, uma pequena jovem desbravadora, curiosa 
        e última de sua espécie praticamente extinta, os Syrinxs.
        </p>
      </div>
      <h2>Caça-Syrinxs</h2>
      <img className="img-personagem2" src = {per2Img} alt = ""/>
      <div className="Personagem2">
        <p>Os Caça-Syrinxs são monstros criados pela humanidade com o objetivo de perseguir essa raça 
        até que eles desaparecerem. Tais aberrações são o principal desafio de nossa heroína.
        </p>
      </div>

      <div className="head">
        <h1>Jogabilidade</h1>
      </div>
      <img className="img-jogabilidade" src = {jogImg} alt = ""/>
      <div className="Jogabilidade">
        <p>Syrinx apresenta jogabilidade em mundo aberto, com o seu grau de liberdade sendo através 
        de um mundo relativamente grande composto principalmente por polígonos tridimensionais. Apresenta 
        também mecânicas de combate entre o jogador e inimigos, elevando, assim, a dificuldade e a 
        imersão do jogo. Ademais, também são existentes elementos de coleta para a personagem no jogo 
        alcançar seu objetivo.
        </p>
      </div>

      <div className="head">
        <h1>Créditos</h1>
      </div>
      <div className="Creditos">
        <h2>Pedro Henrique, pedro.andrade@nave.org.br</h2>
        <h2>Gabriel Vinícius, gabrielssantos@nave.org.br</h2>
      </div>

    </div>
  );
}

export default App;
