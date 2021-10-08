import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import * as tipos from "../actions/action-types";

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState("");
  const dispath = useDispatch();

  return (
    <div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese el nombre del pokemon"
          onChange={(evt) => {
            setPokemon(evt.target.value);
          }}
        />
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            dispath({ type: tipos.ACT_REQUEST_POKEMON, name: pokemon });
          }}
        >
          &#57643;
        </button>
      </div>
      <div className="text-center">
        <h1>{props.pokemon.name}</h1>
        <h2>{props.pokemon.type}</h2>
        <img src={props.pokemon.img}></img>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon,
  };
}

export default connect(mapStateToProps)(Pokemon);
