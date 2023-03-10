import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";

import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';



const app = createApp(App);

app.config.globalProperties.globalColor = {
    color: "#000000",
    backgroundColor: "#FFFFFF",
    inverse: false
}

app
    .use(router)
    .use(Vuesax)
    .mount('#app')
