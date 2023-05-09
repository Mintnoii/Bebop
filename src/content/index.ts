import { createApp } from 'vue'
import App from './index.vue'
import 'virtual:uno.css'
createApp(App).mount(createRootElement())

function createRootElement() {
  const root = document.createElement('div')
  root.id = 'mintnoii-bebop'
  document.body.append(root)

  return root
}
