import {createSlice} from '@reduxjs/toolkit';
import {shuffleCards} from '../app/dataCards';

const cardsSlice = createSlice({
  name: 'cards',

  initialState: {
    cards: shuffleCards,
    turns: 0,
  },

  reducers: {
    shuffleAgain: (state) => {
      state.cards = state.cards
        .sort(() => Math.random() - 0.5)
        .map((stateItem) => ({...stateItem, id: Math.random(), flipped: false, matched: false}));

      state.turns = 0;
    },

    choseFlipCard: (state, action) => {
      const cardId = action.payload.id;
      const cardMatched = action.payload.matched;
      const cardFlipped = action.payload.flipped;

      const card = state.cards.find((card) => card.id === cardId);

      if (cardMatched || cardFlipped) {
        return;
      }

      if (card) {
        card.flipped = true;
        state.turns++;
      }
    },

    checkCards: (state) => {
      const flippedCards = state.cards.filter((card) => card.flipped);

      if (flippedCards.length === 1) {
        return;
      } else if (flippedCards.length === 2) {
        if (flippedCards[0].url === flippedCards[1].url) {
          flippedCards.map((card) => (card.matched = true));
        }
      } else {
        flippedCards.map((card) => (card.flipped = false));
      }
    },
  },
});

export const showTurns = (state) => state.cards.turns;
export const {shuffleAgain, choseFlipCard, checkCards} = cardsSlice.actions;
export default cardsSlice.reducer;
