import fetch from 'isomorphic-fetch';

const service = {
  getCards(query) {
    return fetch(`https://api.pokemontcg.io/v1/cards?name=${query}`).then(x => x.json()).then(x => x.cards);
  },
};

export default service;
