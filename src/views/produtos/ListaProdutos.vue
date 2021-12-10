<template>
  <div class="mt-5">
    <b-table
      v-if="items.length"
      striped
      hover
      :items="items"
      :fields="fields"
    ></b-table>
    <base-alert v-else type="secondary">
      <strong>Sem Produtos!</strong> Cadastre um produto para lista-los
    </base-alert>
  </div>
</template>
<script>
export default {
  name: "ListaProdutos",
  data() {
    return {
      // Note `isActive` is left out and will not appear in the rendered table
      fields: ["nome", "descricao", "valor", "disponivel"],
    };
  },
  computed: {
    items() {
      return this.$store.state.produtos;
    },
  },
  filters: {
    dinheiro: function (value) {
      if (!value) return "";
      value = value.toString();
      return valur + ",00 R$";
    },
  },
  methods: {},
  mounted() {},
};
</script>
