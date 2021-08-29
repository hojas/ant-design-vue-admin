import 'ant-design-vue/dist/antd.css'
import 'virtual:windi.css'

import { createApp } from 'vue'
import App from './app.vue'
import { router } from './router'

createApp(App).use(router).mount('#app')
