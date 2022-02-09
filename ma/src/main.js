import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import VueCookie from 'vue-cookie'
// import VueLazyLoad from 'vue-lazyload'
// import { Button } from 'element-ui'; // Message,
// import ElementPlus from 'element-plus';
// import 'element-ui/lib/theme-chalk/index.css'
// import 'element-plus/lib/theme-chalk/index.css';
// import { ElButton, ElSelect, ElLoading, ElMessage, ElMessageBox, ElInfiniteScroll } from 'element-plus';

const app = createApp(App)
app.use(store)
app.use(router)

// Vue.config.productionTip = false  // app.config.productionTip = false

// const components = [
//     ElButton,
//     ElSelect
// ]

// const plugins = [
//     ElInfiniteScroll,
//     ElLoading,
//     ElMessage,
//     ElMessageBox,
// ]
// console.log(components)
// components.forEach(component => {

//     app.component(component.name, component)
// })
// plugins.forEach(plugin => {
//     app.use(plugin)
// })
// const option = { ElementPlus: { size: 'small', zIndex: 3000 } }
// app.config.globalProperties.$ELEMENT = option

// 配置全局属性
//使用this.$message，相当于旧版本的Vue.prototype.$message = Message;
// app.config.globalProperties.$message = Message;
// app.config.globalProperties.$http=http;
// app.config.globalProperties.$api=api;

// createApp(App).use(Button)
// createApp(App).component(Button.name, Button);

app.use(VueAxios, axios) //axios通过vueaxios挂载到实例上，this.axios.get('')
    // app.use(VueCookie)
    // app.use(VueLazyLoad, {
    //     loading: '/imgs/loading-svg/loading-bars.svg'
    // })

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000

axios.interceptors.response.use(function(response) {
        let path = location.hash; //即#/index
        let res = response.data
        if (res.status == 0) { //登录成功
            return res.data
        } else if (res.status == 10) { //未登录
            if (path != '#/index') { //#是hash路由
                window.location.href = '/#/login'
            }
            return Promise.reject(res)
        } else { //404
            // Message.warning(res.msg)
            return Promise.reject(res)
        }
    },
    (error) => { //500
        // let res = error.response
        // Message.error(res.data.message)
        return Promise.reject(error)
    }
)
app.mount('#app') //这个需要确保app.mount('#app')在所有app.use后