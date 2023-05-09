# Bebop
**Jazz up your browsing~**

This template should help get you started developing a Vue 3 Chrome Extension in Vite using the [rxjs/vite-plugin](https://github.com/crxjs/chrome-extension-tools)


## 开发

- `yarn`

- `yarn dev`
## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Create Project
Using Vite, scaffold a new Vue project by following the prompts
```sh
npm init vite@latest
```
## Install CRXJS Vite Plugin
```sh
npm i @crxjs/vite-plugin -D
```
## Update the Vite Config
Setup the `vite.config.ts` file as the following:
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'

export default defineConfig({
  	plugins: [vue(), crx({manifest})],
    // ...
});
```
## Create Manifest file
Setup the `manifest.json` file as the following:
```json
{
    "manifest_version": 3,
    "name": "Vue Vite Chrome Extension Example",
    "version": "1.0.0",
    "action": {
        "default_title": "Vue Vite",
        "default_popup": "index.html"
    },
    "description": "Vue Vite Chrome Extension made with 'crxjs': https://github.com/crxjs/chrome-extension-tools",
    "options_page": "index.html"
}
```
## Compile and Hot-Reload for Development

```sh
npm run dev
```