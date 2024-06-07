import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FiltroCard from "../../components/FiltroCard";

import { RootReducer } from "../../store";
import * as S from "./styles";
import { alterarTermo } from "../../store/reducers/filtro";
import * as enums from "../../utils/enums/ContatoEnums";
import { BotaoVoltar, Campo } from "../../styles";

type Props = {
  mostrarFiltros: boolean;
};

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { termo } = useSelector((state: RootReducer) => state.filtro);

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.FAVORITOS}
                criterio="status"
                legenda="Favoritos"
              />
              <FiltroCard
                valor={enums.Status.EMERGENCIA}
                criterio="status"
                legenda="Emergência"
              />
              <FiltroCard criterio="todos" legenda="Todos" />
            </S.Filtros>
          </>
        ) : (
          <BotaoVoltar onClick={() => navigate("/")}>
            Voltar aos contatos
          </BotaoVoltar>
        )}
      </div>
    </S.Aside>
  );
};

export default BarraLateral;
