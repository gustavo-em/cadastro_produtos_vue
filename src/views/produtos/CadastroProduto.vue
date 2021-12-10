<template>
  <b-card
    header="Formulário para cadastrar um produto"
    class="text-center mt-5"
  >
    <base-alert type="danger" v-if="erro_valor">
      <strong>Valor</strong> O campo de valor precisa ser numérico
    </base-alert>
    <div class="row">
      <div class="col-md-6">
        <base-input
          v-model="campos.nome"
          alternative
          placeholder="Nome do produto"
          :valid="is_valid"
        ></base-input>
      </div>
      <div class="col-md-6">
        <base-input
          v-model="campos.descricao"
          alternative
          placeholder="Descrição"
          :valid="is_valid"
        ></base-input>
      </div>
      <div class="col-md-6">
        <base-input
          v-model="campos.valor"
          alternative
          placeholder="11,00"
          :valid="is_valid"
        ></base-input>
      </div>
      <div class="col-md-6">
        <base-checkbox class="mb-3" v-model="campos.disponivel">
          Disponível para venda?
        </base-checkbox>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <base-button @click="postProduto" type="success" icon="ni ni-fat-add"
          >Cadastrar</base-button
        >
      </div>
    </div>
  </b-card>
</template>
<script>
export default {
  name: "CadastroProduto",
  data() {
    return {
      is_valid: undefined,
      switches: {
        off: false,
        on: true,
      },
      campos: {
        nome: "",
        descricao: "",
        valor: "",
        disponivel: false,
      },
      erro_valor: false,
    };
  },
  methods: {
    postProduto() {
      this.erro_valor = false;
      const novo_produto = {
        isActive: this.campos.disponivel,
        disponivel: this.campos.disponivel,
        valor: this.campos.valor,
        nome: this.campos.nome,
        descricao: this.campos.descricao,
      };
      function isNumeric(str) {
        var er = /^[0-9]+$/;
        return er.test(str);
      }

      for (var input in novo_produto) {
        console.log(novo_produto[input]);
        if (input == "disponivel" || input == "isActive") {
          continue;
        }
        if (input == "valor") {
          if (!isNumeric(novo_produto[input])) {
            this.erro_valor = true;
            this.is_valid = false;
            break;
          }
        }
        if (!novo_produto[input]) {
          this.is_valid = false;
          break;
        } else {
          this.is_valid = true;
        }
      }

      if (this.is_valid) {
        if (novo_produto.disponivel) {
          novo_produto.disponivel = "Sim";
        } else {
          novo_produto.disponivel = "Não";
        }
        novo_produto.valor = novo_produto.valor + ",00 R$";
        setTimeout(() => {
          this.$store.dispatch("postProduto", novo_produto);
          this.$router.push({ name: "listaprodutos" });
        }, 200);
      }
    },
  },
};
</script>
