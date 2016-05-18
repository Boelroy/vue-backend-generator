'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Nav from './components/nav/index';
import style from './utils/style/index.scss';
Vue.use(VueRouter);

let APP = Vue.extend({});

new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      {text: 'Add some todos'}
    ]
  },
  methods: {
    addTodo: function() {
      var text = this.newTodo.trim();
      if (text) {
        this.todos.push({text: text});
        this.newTodo = '';
      }
    },

    removeTodo: function(index) {
      this.todos.splice(index, 1);
    }
  }
});

let Foo = Vue.extend({
  template: '<p>This is foo!</p>'
});

let Bar = Vue.extend({
  template: '<p>This is bar!</p>'
});

let MyComponent = Vue.extend({
  template: '<div>This is the custom component {{msg}}</div>',
  props: ['msg']
});

Vue.component('my-component', MyComponent);
Vue.component('navbar', Nav);

var router = new VueRouter({
  history: true
});

router.map({
  '/foo': {
    component: Foo
  },
  '/bar': {
    component: Bar
  }
});

router.start(APP,'body');
