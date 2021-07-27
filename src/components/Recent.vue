<template>
  <div class="recents">
    <h3>Buscas recentes</h3>
    <p>{{ dadosCnpj.cnpj }} - {{ dadosCnpj.nome }}</p>
  </div>
</template>

<script>
export default {
  name: 'Recent',
  data() {
    return {
      dadosCnpj: '',
    }
  },
  mounted() {
    if (localStorage.cnpj !== undefined) {
      this.dadosCnpj = JSON.parse(localStorage.getItem('cnpj'))
    }
  },
}
</script>

<style scoped>
.recents {
  background-color: #42b983;
  padding: 30px;
  border-radius: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-family: Lato, sans-serif;
  text-align: center;
}
p {
  font-weight: bold;
  font-size: 0.9rem;
}
</style>
