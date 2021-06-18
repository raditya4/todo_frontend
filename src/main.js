import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory}from 'vue-router'
import todo from './components/todo.vue'
import user from './components/user.vue'
import auth from './components/auth.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:auth},
        {path:'/todo',component:todo},
        {path:'/user',component:user}
        
    ],
})

createApp(App).use(router).mount('#app')
