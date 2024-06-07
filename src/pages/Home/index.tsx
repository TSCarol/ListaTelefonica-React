import BotaoAdicionar from "../../components/BotaoAdicionar";
import BarraLateral from "../../containers/BarraLateral";
import ListaDeNomes from "../../containers/ListaDeNomes";

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeNomes />
    <BotaoAdicionar />
  </>
);

export default Home;
