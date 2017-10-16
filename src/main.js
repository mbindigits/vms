// import 'assets/css/theme/index.css'
import Vue from 'vue'

import App from './App'
/* eslint-disable no-new */
import router from './routers.js'
import store from 'stores'
import Element from 'element-ui'
import Vsider from 'components/Vsider.vue'
import Vheader from 'components/Vheader.vue'
import Vfooter from 'components/Vfooter.vue'
import Veditor from 'components/Veditor.vue'
import SearchTag from 'components/SearchTag.vue'
import SearchColumn from 'components/SearchColumn.vue'
import SearchArticle from 'components/SearchArticle.vue'
Vue.use(Element)
Vue.component(Vheader.name, Vheader)
Vue.component(Vfooter.name, Vfooter)
Vue.component(Vsider.name, Vsider)
Vue.component(Veditor.name, Veditor)
Vue.component(SearchTag.name, SearchTag)
Vue.component(SearchColumn.name, SearchColumn)
Vue.component(SearchArticle.name, SearchArticle)

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
