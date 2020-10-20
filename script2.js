var data = { a: 1 }

var vm = new Vue({
  el: '#vm',
  data: {
    data: data
  }
})

var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})