import {configureStore} from '@reduxjs/toolkit';
import cardsSlice from '../features/cardsSlice';

const store = configureStore({
  reducer: {
    cards: cardsSlice,
  },
});

export {store};
