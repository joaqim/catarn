const SIDES = 6;

export function rollDice(x, sides = SIDES) {
  var value = 0;
  for (let i = 1; i <= x; i++) {
    value += Math.floor(Math.random() * sides + 1);
  }
  return value;
}
export const d3d6 = () => rollDice(3, 6);
export const d2d6 = () => rollDice(2, 6);
