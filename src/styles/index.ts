import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";
import { Botao } from "../components/Contato/styles";

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`;

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 85vh;
  overflow-y: scroll;
`;

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`;

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
  margin: 5px;
`;

export const BotaoVoltar = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #000;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.branco};
  border-radius: 8px;
  margin-right: 8px;
`;

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verdeSalvar};
`;

export default EstiloGlobal;
