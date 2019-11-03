import Vue from "vue";
import App from "./App.vue";
import router from './router';
import Element from 'element-ui';

Vue.use(Element);
Vue.prototype.msgSuccess = function (msg) {
  this.$message({ showClose: true, message: msg, type: "success" });
}

Vue.prototype.msgError = function (msg) {
  this.$message({ showClose: true, message: msg, type: "error" });
}

Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg);
}


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
