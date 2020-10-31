Vue.component('hello-component', {
  template: '<p>hello</p>'
})

var helloComponent = {
  template: '<p>hello</p>'
}

var app = new Vue({
  el: "#app",
  components: {
    'hello-component': helloComponent
  }
})

Vue.component('button-counter', {
  data: function() {
    return {
      count: 0
    }
  },
  template: '<div><spam>count:</span><button v-on:click="count++">{{ count }}</button></div>'
})
var app2 = new Vue({
  el: "#app2"
})