<template>
    <section id="resultados" v-if="dados">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-8">
            <div class="card">
              <!-- longName: 'Petróleo Brasileiro S.A. - Petrobras' -->
              <!-- symbol: 'PETR4.SA' -->
              <h3>{{dados.longName}} <span>({{dados.symbol}})</span></h3> 

              <dl>
                <div class="row justify-content-center">
                  <!-- regularMarketPrice: 28.32 -->
                  <dt class="col-md-4">Valor da Ação</dt>
                  <dd class="col-md-4">{{formatReal(dados.regularMarketPrice)}}</dd>
                </div>

                <div class="row justify-content-center">
                  <!-- regularMarketChangePercent: 0.6754374 -->
                  <dt class="col-md-4">Variação</dt>
                  <dd class="col-md-4 text-success"><strong>{{formatPorcento(dados.regularMarketChangePercent)}}</strong></dd>
                </div>

                <div class="row justify-content-center">
                  <!-- regularMarketDayHigh: 28.42 -->
                  <dt class="col-md-4">Máxima</dt>
                  <dd class="col-md-4">{{formatReal(dados.regularMarketDayHigh)}}</dd>
                </div>

                <div class="row justify-content-center">
                  <!-- regularMarketDayLow: 27.64 -->
                  <dt class="col-md-4">Mínima</dt>
                  <dd class="col-md-4">{{formatReal(dados.regularMarketDayLow)}}</dd>
                </div>

                <div class="row justify-content-center">
                  <!-- regularMarketOpen: 28, -->
                  <dt class="col-md-4">Abertura</dt>
                  <dd class="col-md-4">{{formatReal(dados.regularMarketOpen)}}</dd>
                </div>
              </dl>

            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: "Resultados",
    props: {
        dados: Object
    },
    methods: {
        formatReal(valor) {
            var formatter = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })

            return formatter.format(valor)
        },
        formatPorcento(valor) {
            var formatter = new Intl.NumberFormat('pt-BR', {
                style: 'percent',
                maximumFractionDigits: 3
            })

            return formatter.format(valor/100)
        }
    }
}
</script>