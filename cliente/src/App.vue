<template>
  <div id="app">
    <titulo></titulo>
    <busca @busca='fetch'></busca>
    <resultados v-show="resposta" :dados="resposta"></resultados>
  </div>
</template>

<script>
import Titulo from './components/Titulo.vue'
import Busca from './components/Busca.vue'
import Resultados from './components/Resultados.vue'
import axios from 'axios'

const URL_API = 'http://localhost:5000/api/v1'

export default {
  name: 'App',
  components: {
    Titulo, Busca, Resultados
  },
  data() {
    return {
      resposta: null
    }
  },
  methods: {
    async fetch(codigo) {
      try {
        const res = await axios.get(`${URL_API}/resumo/${codigo}/`)
        this.resposta = res.data[0]
      } catch (error) {
        this.$toasted.error(`Ação com o código ${codigo} não foi encontrada!`, {
          duration: 3000,
        })
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(0, 70, 133);
}

#title {
  padding: 2rem 1rem;
  background-color: rgb(0, 70, 133);
  color: #fff;
  border-radius: .3rem;
  text-align: center;
}

#title h1 {
  font-size: 2.2rem;
}

#title h4 {
  font-size: 1.4rem;
}

#busca {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #eee;
  border-radius: .3rem;
  text-align: center;
}

#resultados h3 {
  font-size: 1.6rem;
  font-weight: 700;
}

#resultados .card {
  margin-top: 30px;
  padding: 2rem;
  text-align: center;
}

#resultados dl {
  margin-top: 20px;
}

#resultados .card h3 span {
  font-style: italic;
}

</style>
