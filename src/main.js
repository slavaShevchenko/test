import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('onlyNumbers', {
  inserted: function (el, params) {
    el.addEventListener("keypress", function(e){
      e = e || window.event;
      let charcode = typeof e.charCode == 'number' ? e.charCode : e.keyCode;
      let re = /\d/;
      if(charcode == 46 && params.value) {
        if(el.value.includes('.')) {
          e.preventDefault();
        }
        return;
      } else if(!re.test(String.fromCharCode(charcode)) && charcode > 9 && !e.ctrlKey) {
        if(e.preventDefault) {
          e.preventDefault();
        } else {
            e.returnValue = false;
        }
      }
    });
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
