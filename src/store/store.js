import reducer from "../reducer/reducer";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { sagaMain } from "../sagas/saga";

const defaultData = {
  loading: false,
  pokemon: {},
};

//transforma la funcion en un formato de middlewre
const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducer,
  defaultData,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagaMain);
