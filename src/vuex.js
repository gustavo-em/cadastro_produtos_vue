import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    produtos: []
  },
  mutations: {
    GET_PRODUTOS(state, payload){
        state.produtos = payload
    },
    POST_PRODUTO(state,payload){
        state.produtos.push(payload)
    },
    increment (state) {
    state.count++
    }
  },
  actions: {
    getProdutos(context){
        context.commit('GET_PRODUTOS', [
            { isActive: true,  disponivel: 'Sim', valor: 40, nome: 'Dickerson', descricao: 'Macdonald' },
            { isActive: false, disponivel: 'Não', valor: 21, nome: 'Larse1n', descricao: 'Shaw' },
            { isActive: false, disponivel: 'Não', valor: 89, nome: 'Geneva', descricao: 'Wilson' },
            { isActive: true,  disponivel: 'Sim', valor: 38, nome: 'Jami', descricao: 'Carney' }
          ])
    },
    postProduto(context, payload){
        context.commit('POST_PRODUTO', payload)
    }
  }
})

export{ store }
