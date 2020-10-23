import { BUY_CHOCO } from './chocoTypes';

export const buyChoco = (number = 1) => ({
  type: BUY_CHOCO,
  payload: number,
});
