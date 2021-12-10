<template>
  <div>
    <div class="row">
      <div class="col-12">
        <base-button @click="getProdutos" type="default">Produtos</base-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"Dashbaord",
    methods: {
        getProdutos(){

            this.$router.push({ name: 'listaprodutos'})
        }
    }
}
</script>
