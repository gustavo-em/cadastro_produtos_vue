<template>
  <div>
    <div class="row p-5">
      <div class="col-6">
        <router-link to="/produtos/lista">
          <base-button type="primary">Lista de Produtos</base-button>
        </router-link>
      </div>
      <div class="col-6">
        <router-link to="/produtos/cadastrarproduto">
          <base-button type="primary">Cadastrar um produto</base-button>
        </router-link>
      </div>
    </div>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "ProdutosHeader",
};
</script>
<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  /* transform: translateX(10px); */
  opacity: 0;
}
</style>
