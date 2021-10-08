import * as tipos from "../actions/action-types";
import { takeEvery, put, delay, call } from "redux-saga/effects";
import axios from "axios";

function* requestPokemon(action) {
  yield put({ type: tipos.BEGIN_LOAD });
  try {
    let res = yield call(
      axios.get,
      `https://pokeapi.co/api/v2/pokemon/${action.name}`
    );
    yield delay(3000);
    yield put({
      type: tipos.ACT_RESPONSE_POKEMON,
      pokemon: {
        name: res.data.name,
        type: res.data.types[0].type.name,
        img: res.data.sprites.front_default,
      },
    });
  } catch (error) {
    yield put({
      type: tipos.ACT_RESPONSE_POKEMON,
      pokemon: {
        name: "Pokemon inexistente",
        type: "",
        img: "no",
      },
    });
  }

  yield put({ type: tipos.END_LOAD });
}

export function* sagaMain() {
  //* funcion generadora
  yield takeEvery(tipos.ACT_REQUEST_POKEMON, requestPokemon);
}
