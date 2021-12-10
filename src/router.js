import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";

import ProdutosHeader from './views/produtos/ProdutosHeader.vue'
import ListaProdutos from './views/produtos/ListaProdutos.vue'
import CadastroProduto from './views/produtos/CadastroProduto.vue'
import Dashboard from './views/dashboard/Dashbaord.vue'

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",redirect: '/produtos/lista' 
      
      
    },
    {
      path: "/produtos",      
      components: {

        default: ProdutosHeader,

      },
      children: [
        {
          name:"listaprodutos",
          path: 'lista',
          component: ListaProdutos
        },
        {
          name:"cadastrarproduto",
          path: 'cadastrarproduto',
          component: CadastroProduto
        }
      ]
      
    },
   
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
