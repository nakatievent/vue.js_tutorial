var app = new Vue ({
  el: '#app',
  data: {
    message: "hello, Vue.js",
  },
  methods: {
    clickHandler: function(event) {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app2 = new Vue ({
  el: '#app2',
  data: {
    message: "hello, Vue.js",
  },
})

var app3 = new Vue ({
  el: '#app3',
  data: {
    message: "hello, <span style='color: red;'>Vue.js</span>"
  }
})

var app4 = new Vue ({
  el: '#app4',
  data: {
    message: "hello, Vue.js"
  }
})

var app5 = new Vue ({
  el: '#app5',
  data: {
    message: 'hello Vue.js'
  }
})

var app6 = new Vue ({
  el: '#app6',
  data: {
    message: 'hello Vue.js',
    number: 100,
    ok: true
  }
})

Vue.filter('numberFormat', function(value) {
  return value.toLocaleString()
})

var app7 = new Vue ({
  el: '#app7',
  data: {
    price: 298000000
  },
  // filters: {
  //   numberFormat: function(value) {
  //     return value.toLocaleString()
  //   }
  // }
})

Vue.filter('toUSD', function(jpy) {
  return jpy / 100
})

Vue.filter('numberFormat', function(value) {
  return value.toLocaleString()
})

var app8 = new Vue ({
  el: '#app8',
  data: {
    jpyPrice: 29800000
  }
})

Vue.filter('readMore', function(text, length, suffix) {
  return text.substring(0, length) + suffix
})

var app9 = new Vue ({
  el: '#app9',
  data: {
    text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used before final copy is available, but it may also be used to temporarily replace copy in a process called greeking, which allows designers to consider form without the meaning of the text influencing the design'
  }
})

var app10 = new Vue ({
  el: '#app10',
  data: {
    url: 'https://www.google.co.jp/'
  }
})

