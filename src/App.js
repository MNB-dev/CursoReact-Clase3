import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Pokemon from './components/Pokemon';
import { Provider } from 'react-redux';
import store from "./store/store";
import Loading from "./components/Loading";

function App() {
  return (
    <Provider store={store}>
      <Loading />
      <main className="container mt-3">
      <Pokemon />
      </main>
    </Provider>
  );
}

export default App;
