import { createStore } from 'vuex'

export default createStore({
  state: {
    dataCnpj: {
      nome: null,
      cnpj: null,
      abertura: null,
      bairro: null,
      logradouro: null,
      situacao: null,
      uf: null,
      cep: null,
      atividade_principal: null,
    },
  },
  mutations: {
    setNome(state, value) {
      state.dataCnpj.nome = value
    },
    setCnpj(state, value) {
      state.dataCnpj.cnpj = value
    },
    setAbertura(state, value) {
      state.dataCnpj.abertura = value
    },
    setBairro(state, value) {
      state.dataCnpj.bairro = value
    },
    setLogradouro(state, value) {
      state.dataCnpj.logradouro = value
    },
    setSituacao(state, value) {
      state.dataCnpj.situacao = value
    },
    setUf(state, value) {
      state.dataCnpj.uf = value
    },
    setCep(state, value) {
      state.dataCnpj.cep = value
    },
    setAtividadePrincipal(state, value) {
      state.dataCnpj.atividade_principal = value
    },
  },
  actions: {},
  modules: {},
})
