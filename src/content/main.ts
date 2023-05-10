import { createApp } from 'vue'
import App from './App.vue'

const createRootElement = () => {
  const root = document.createElement('div')
  root.id = 'mintnoii-bebop'
  document.body.append(root)
  return root
}

createApp(App).mount(createRootElement())
