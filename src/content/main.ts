import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'

const createRootElement = () => {
  const root = document.createElement('div')
  root.id = 'mintnoii-bebop'
  document.body.append(root)
  return root
}

createApp(App).mount(createRootElement())
