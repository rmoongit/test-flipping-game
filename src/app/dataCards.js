import arms from '../assets/arms-coat.jpg';
import grafBoulevard from '../assets/graf-boulevard.jpg';
import hersonesVessel from '../assets/hersones-vessel.jpg';
import matrosBoulevard from '../assets/matros-boulevard.jpg';
import nightSevastopol from '../assets/night-sevastopol.jpg';
import paradeSevastopol from '../assets/parade-sevastopol.jpg';
import submarineSevastopol from '../assets/submarine-sevastopol.jpg';
import sunkenShips from '../assets/sunken-ships.jpg';

const cards = [
  {url: arms, alt: 'front-image'},
  {url: grafBoulevard, alt: 'front-image'},
  {url: hersonesVessel, alt: 'front-image'},
  {url: matrosBoulevard, alt: 'front-image'},
  {url: nightSevastopol, alt: 'front-image'},
  {url: paradeSevastopol, alt: 'front-image'},
  {url: submarineSevastopol, alt: 'front-image'},
  {url: sunkenShips, alt: 'front-image'},
];

const shuffleCards = [...cards, ...cards]
  .sort(() => Math.random() - 0.5)
  .map((image) => ({...image, id: Math.random(), flipped: false, matched: false}));

export {cards, shuffleCards};
