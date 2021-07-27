<template>
  <div class="home">
    <InputMask />
    <Recent />
  </div>
</template>

<script>
// @ is an alias to /src
import InputMask from './../components/InputMask.vue'
import Recent from './../components/Recent.vue'
import Data from './../components/Data.vue'

export default {
  name: 'Home',
  components: { InputMask, Recent, Data },
}
</script>

<style scoped>
.home {
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>
