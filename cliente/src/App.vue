<template>
  <div id="app">
    <section id="title">
      <div class="row">
        <h1>Cotações de Ações</h1>
        <h4>Bovespa</h4>
      </div>
    </section>

    <section id="busca">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-6">
            <form class="codigo clearfix">
              <div class="row">
                <div class="col-10">
                  <input type="text" class="form-control form-control-sm" placeholder="Digite o código da ação. Ex: PETR4.SA">
                </div>
                <div class="col-2">
                  <input type="button" value="Buscar" class="btn btn-sm btn-primary float-end">
                </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>

    <section id="resultados">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-8">
            <div class="card">
              <!-- longName: 'Petróleo Brasileiro S.A. - Petrobras' -->
              <!-- shortName: 'PETROBRAS   PN      N2' -->
              <!-- symbol: 'PETR4.SA' -->
              <h3>PETROBRAS PN N2 <span>(PETR4.SA)</span></h3> 

              <dl>
                <div class="row justify-content-center">
                  <!-- regularMarketPreviousClose: 28.13 -->
                  <!-- regularMarketPrice: 28.32 -->
                  <dt class="col-md-4">Valor da Ação</dt>
                  <dd class="col-md-4">R$ 28,32</dd>
                </div>

                <div class="row justify-content-center">
                  <!-- regularMarketChangePercent: 0.6754374 -->
                  <dt class="col-md-4">Variação</dt>
                  <dd class="col-md-4 text-success"><strong>0,675%</strong></dd>
                </div>

                <div class="row justify-content-center">
                  <!-- regularMarketDayHigh: 28.42 -->
                  <dt class="col-md-4">Máxima</dt>
                  <dd class="col-md-4">R$ 28,55</dd>
                </div>

                <div class="row justify-content-center">
                  <!-- regularMarketDayLow: 27.64 -->
                  <dt class="col-md-4">Mínima</dt>
                  <dd class="col-md-4">R$ 27,64</dd>
                </div>

                <div class="row justify-content-center">
                  <!-- regularMarketOpen: 28, -->
                  <dt class="col-md-4">Abertura</dt>
                  <dd class="col-md-4">R$ 28,00</dd>
                </div>
              </dl>

            </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    
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

</style>
