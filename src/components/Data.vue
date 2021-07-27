<template>
  <div v-if="dataCnpj != null" class="results">
    <h2>{{ dataCnpj.cnpj }} - {{ dataCnpj.situacao }}</h2>
    <h3>{{ dataCnpj.nome }}</h3>
    <h4>{{ dataCnpj.logradouro }}, {{ dataCnpj.cep }}, {{ dataCnpj.uf }}</h4>
    <h4>{{ dataCnpj.atividade_principal[0].text }}</h4>
    <h5>Abertura: {{ dataCnpj.abertura }}</h5>
    <button><router-link to="/">Nova Consulta</router-link></button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Data',
  components: {},
  computed: {
    ...mapState(['dataCnpj']),
  },
}
</script>

<style scoped>
.results {
  font-family: Lato, sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}
button {
  background-color: #42b983;
  padding: 15px;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 2rem;
}
button:focus {
  outline: none;
}
button:hover {
  transition: 0.5s;
  background-color: #42b999;
}

a,
a:visited {
  text-decoration: none;
  color: #fff;
}
</style>
