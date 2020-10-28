var app = new Vue({
  el: "#app",
  data: {
    message: ''
  },
  methods: {
    clickHandler: function($event, message) {
      this.message = message
      console.log($event)
      // this.counter++
      // console.log(event)
      // console.log(event.target.tagName)
      // console.log(event.target.innerHTML)
      // console.log(event.target.type)
    }
  }
})

var app2 = new Vue({
  el: "#app2",
  data: {
    message: ''
  },
  methods: {
    clickHandler: function() {
      this.message = new Date().toLocaleTimeString()
    }
  }
})

var app3 = new Vue({
  el: "#app3",
  data: {
    message: ''
  },
  methods: {
    clear: function() {
      this.message = ''
    },
    clickHandler: function() {
      alert('shift + click')
    }
  }
})

var app4 = new Vue({
  el: "#app4",
  methods: {
    clickHandler: function() {
      alert('Clicked!')
    }
  }
})