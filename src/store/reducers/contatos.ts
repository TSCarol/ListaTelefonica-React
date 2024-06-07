import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Contato from "../../models/ContatoModels";
import * as enums from "../../utils/enums/ContatoEnums";

type ContatosState = {
  itens: Contato[];
};

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      name: "Carolina Spitivel",
      email: "carolspi@gmail.com",
      phone: "43999548754",
      status: enums.Status.FAVORITOS,
    },
    {
      id: 2,
      name: "Lidia Monique",
      email: "lidiamg@gmail.com",
      phone: "43999246544",
      status: enums.Status.FAVORITOS,
    },
    {
      id: 3,
      name: "Mateus Ramstin",
      email: "mramstin@hotmail.com",
      phone: "43999548754",
      status: enums.Status.EMERGENCIA,
    },
  ],
};

const contatosSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (tarefa) => tarefa.id !== action.payload,
      );
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id,
      );
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, "id">>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.name.toLowerCase() === action.payload.name.toLowerCase(),
      );

      if (contatoJaExiste) {
        alert("Já existe um contato com esse nome");
      } else {
        const ultimoContato = state.itens[state.itens.length - 1];
        const novoId = ultimoContato ? ultimoContato.id + 1 : 1;

        const contatoNovo = {
          ...action.payload,
          id: novoId,
        };
        state.itens.push(contatoNovo);
        state.itens.sort((a, b) => a.name.localeCompare(b.name));
      }
    },
  },
});

export const { remover, editar, cadastrar } = contatosSlice.actions;

export default contatosSlice.reducer;
