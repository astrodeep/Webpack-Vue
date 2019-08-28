 import css from './style.scss'
 import './modules/header/header'
 import Vue from 'vue'
 import component from './vue-components/component/component.vue'
 import lazy from './vue-components/lazy/lazy.vue'
 import VueMaterial from 'vue-material'


 Vue.use(VueMaterial);


 new Vue({
  el: '.component',
  render: h => h(component)
 });



 new Vue({
  el: '.lazy',
  render: h => h(lazy),

 });

