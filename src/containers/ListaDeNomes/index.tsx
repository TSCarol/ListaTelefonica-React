import { useSelector } from "react-redux";
import Contato from "../../components/Contato";
import { MainContainer, Titulo } from "../../styles";

import { RootReducer } from "../../store";

const ListaDeNomes = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro,
  );

  const filtroContatos = () => {
    let contatosFiltrados = itens;
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.name.toLowerCase().search(termo.toLowerCase()) >= 0,
      );

      if (criterio === "status") {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.status === valor,
        );
      }

      return contatosFiltrados;
    } else {
      return itens;
    }
  };

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = "";
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : "";

    if (criterio === "todos") {
      mensagem = `${quantidade} contato(s) encontrados: todos ${complementacao}`;
    } else {
      mensagem = `${quantidade} contato(s) encontrados: "${`${criterio}=${valor}`}" ${complementacao}`;
    }

    return mensagem;
  };

  const contatos = filtroContatos();
  const mensagem = exibeResultadoFiltragem(contatos.length);

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((t) => (
          <li key={t.id}>
            <Contato
              id={t.id}
              status={t.status}
              phone={t.phone}
              email={t.email}
              name={t.name}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default ListaDeNomes;
