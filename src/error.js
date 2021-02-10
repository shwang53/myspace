import Vue from 'vue'

Vue.config.errorHandler = e => {
//   Vue.prototype.$toast.error(e.message)
  console.log('--Error Message Below--')
  console.log(e.message)
}
