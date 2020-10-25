var app = new Vue({
  el: "#app",
  data: {
    message: "Hello,Vue.js"
  },
  watch: {
    message: function(newValue, oldValue){
      console.log('new: %s, old: %s', newValue, oldValue)
    }
  }
})

var app2 = new Vue({
  el: "#app2",
  data: {
    km: 0,
    m: 0,
    mm: 0
  },
  watch: {
    km: function(value) {
      // console.log(value)
      this.km = value
      this.m = value * 1000
      this.mm = value * 1000000
    },
    m: function(value) {
      this.km = value / 1000
      this.m = value
      this.mm = value * 1000
    },
    mm: function(value) {
      this.km = value / 1000000
      this.m = value / 1000
      this.mm = value
    }
  }
})

// var app3 = new Vue({
//   el: "#app3",
//   data: {
//     firstName: " ",
//     lastName: " ",
//     fullName: " "
//   },
//   watch: {
//     firstName: function(value) {
//       this.fullName = value + " " + this.lastName
//     },
//     lastName: function(value) {
//       this.fullName = this.firstName + " " + value
//     }
//   }
// })

var app3 = new Vue({
  el: "#app3",
  data: {
    firstName: " ",
    lastName: " ",
  },
  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName
    }
  }
})

var app4 = new Vue({
  el: "#app4",
  data: {
    colors: [
      { name: 'red'},
      { name: 'green'},
      { name: 'blue'},
    ]
  },
  watch: {
    colors: {
      handler: function(newValue, oldValue) {
        console.log('Update!')
        console.log("new: %s, oldValue: %s",
          JSON.stringify(newValue, null, '\t'),
          JSON.stringify(oldValue, null, '\t'))
      },
      deep: true,
      immediate: true
    }
  }
})