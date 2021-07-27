<template>
  <div>
    <h2>CNPJ:</h2>
    <form @submit.prevent>
      <input
        type="text"
        class="cnpj-input"
        v-model="cnpj"
        v-mask="'##.###.###/####-##'"
        @keyup.enter="searchCnpj"
      />
      <input
        type="submit"
        value="Buscar"
        class="search-input"
        @click="searchCnpj"
      />
    </form>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'InputMask',
  data() {
    return {
      cnpj: '',
      dadosCnpjTemp: {
        nome: String,
        cnpj: String,
        abertura: new Date(),
        bairro: String,
        logradouro: String,
        situacao: String,
        uf: String,
        cep: String,
        atividade_principal: [],
      },
    }
  },
  methods: {
    async searchCnpj() {
      //remove the special characters from cnpj to search the api
      this.cnpj = this.cnpj.replace(/\./g, '')
      this.cnpj = this.cnpj.replace(/\-/g, '')
      this.cnpj = this.cnpj.replace(/\//g, '')
      //api call
      const response = await fetch(
        `https://ws.hubdodesenvolvedor.com.br/v2/cnpj2/?cnpj=${this.cnpj}&token=114127905xUneDtQAZE206054472`
      )
      const data = await response.json()
      this.dadosCnpjTemp.nome = data.nome
      this.dadosCnpjTemp.cnpj = data.cnpj
      this.dadosCnpjTemp.abertura = data.abertura
      this.dadosCnpjTemp.bairro = data.bairro
      this.dadosCnpjTemp.logradouro = data.logradouro
      this.dadosCnpjTemp.situacao = data.situacao
      this.dadosCnpjTemp.uf = data.uf
      this.dadosCnpjTemp.cep = data.cep
      this.dadosCnpjTemp.atividade_principal = data.atividade_principal
      if (localStorage) {
        localStorage.setItem('cnpj', JSON.stringify(this.dadosCnpjTemp))
      }
      this.setNome(this.dadosCnpjTemp.nome)
      this.setCnpj(this.dadosCnpjTemp.cnpj)
      this.setAbertura(this.dadosCnpjTemp.abertura)
      this.setBairro(this.dadosCnpjTemp.bairro)
      this.setLogradouro(this.dadosCnpjTemp.logradouro)
      this.setSituacao(this.dadosCnpjTemp.situacao)
      this.setUf(this.dadosCnpjTemp.uf)
      this.setCep(this.dadosCnpjTemp.cep)
      this.setAtividadePrincipal(this.dadosCnpjTemp.atividade_principal)
      if (data.cnpj) {
        this.$router.push({ path: '/results' })
      } else {
        alert('O CNPJ não existe, por favor, tente novamente')
      }
    },
    ...mapMutations([
      'setNome',
      'setCnpj',
      'setAbertura',
      'setBairro',
      'setLogradouro',
      'setSituacao',
      'setUf',
      'setCep',
      'setAtividadePrincipal',
    ]),
  },
  computed: {
    ...mapState(['dataCnpj']),
  },
  directives: { mask },
}
</script>

<style scoped>
form {
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
}
.search-input {
  font-family: Lato, sans-serif;
  border-radius: 5px;
  border: none;
  background-color: #42b983;
  color: #fff;
  padding: 0 0.6rem;
  font-weight: bold;
}

.search-input:hover {
  transition: 0.5s;
  background-color: #42b999;
}
.cnpj-input {
  font-size: 0.8rem;
  height: 25px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 2px;
}
input:focus {
  outline: none;
}
h2 {
  font-size: 1rem;
  font-family: Lato, sans-serif;
}
</style>
