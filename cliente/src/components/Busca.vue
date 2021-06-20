<template>
    <section id="busca">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-6">
            <form class="codigo clearfix" @submit.prevent="submit">
              <div class="row">
                <div class="col-10">
                  <input type="text" v-model="termo" class="form-control form-control-sm" placeholder="Digite o código da ação. Ex: PETR4.SA">
                </div>
                <div class="col-2">
                  <input type="submit" value="Buscar" class="btn btn-sm btn-primary float-end">
                </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>            
</template>

<script>
export default {
    name: "Busca",
    data() {
        return {
            termo: ""
        }
    },
    methods: {
        submit() {
            this.$emit('busca', this.termo)
            this.termo = ""
        }
    }
}
</script>