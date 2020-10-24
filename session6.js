var app = new Vue ({
  el: "#app",
  data: {
    message: "Hello,Vue.js"
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    reversedMessageMethod: function() {
      return this.message.split('').reverse().join('')
    }
  }
})

var app2 = new Vue ({
  el: "#app2",
  data: {
    basePrice: 100
  },
  computed: {
    taxIncludedPrice: {
      get :function() {
        return parseInt(this.basePrice * 1.08)
      },
      set: function(taxIncludedPrice) {
        this.basePrice = Math.ceil(taxIncludedPrice / 1.08)
      }
    }
  }
})

var app3 = new Vue ({
  el: "#app3",
  computed: {
    computedNumber: function() {
      return Math.random()
    }
  },
  methods: {
    methodsNumber: function() {
      return Math.random()
    }
  }
})