import 'ant-design-vue/dist/antd.css'
import 'virtual:windi.css'

import DatePicker from 'ant-design-vue/es/date-picker/date-fns'
import TimePicker from 'ant-design-vue/es/time-picker/date-fns'
import Calendar from 'ant-design-vue/es/calendar/date-fns'

import { createApp } from 'vue'
import antd from 'ant-design-vue'
import { router } from './router'
import App from './app.vue'

const app = createApp(App)

app
  .use(DatePicker)
  .use(TimePicker)
  .use(Calendar)
  .use(antd)
  .use(router)
  .mount('#app')
