import * as tipos from "../actions/action-types";

export default function reducer(state, action) {
  console.log("LLegó al reducer: ", action.type);

  let newState = { ...state };

  switch (action.type) {
    case tipos.BEGIN_LOAD:
      newState.loading = true;
      break;
    case tipos.END_LOAD:
      newState.loading = false;
      break;
    case tipos.ACT_RESPONSE_POKEMON:
      newState.pokemon = action.pokemon;
      break;

    default:
      break;
  }

  return newState;
}
