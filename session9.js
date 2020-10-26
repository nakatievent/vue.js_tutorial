var app = new Vue({
  el: "#app",
  data: {
    isLarge: true,
    hasError: true
  }
})

var app2 = new Vue({
  el: "#app2",
  data: {
    classObject: {
      large: true,
      'text-danger': true
    }
  }
})

var app3 = new Vue({
  el: "#app3",
  data: {
    largeClass: {
      large: true,
      'bg-gray': true
    },
    dangerClass: {
      'text-danger': true
    },
    isLarge: true
  }
})

var app4 = new Vue({
  el: "#app4",
  data: {
      color: 'blue',
      fontSize: 36
  }
})

var app5 = new Vue({
  el: "#app5",
  data: {
    styleObject: {
      color: 'blue',
      fontSize: '36px'
    }
  }
})