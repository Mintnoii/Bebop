import { createApp } from 'vue'
import App from './index.vue'

createApp(App).mount(createRootElement())

function createRootElement() {
  const root = document.createElement('div')
  root.id = 'mintnoii-crx'
  document.body.append(root)

  return root
}
