export const diceReducer = (state, action) => {
  const { type, payload } = action;
  let dice;
  let count;

  switch (type) {
    case "add":
      dice = [...state.dice, payload];
      count = [...state.count];
      count[payload.value].count += 1;
      return {
        dice,
        count,
        /*
        count: {
          ...state.count,
          [payload.value]: state.count[payload.value],
        },
        */
      };
    //return { ...state.dice, dice: payload };
    case "remove":
      dice = [...state.dice].filter((_, index) => index !== payload.index);
      count = [...state.count];
      count[state.dice[payload.index].value].count -= 1;
      return { dice, count };
    //return { ...state.dice.filter((_, index) => index !== payload.index) };
    default:
      throw new Error();
  }
};
