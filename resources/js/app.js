
import './bootstrap';
import * as Vue from 'vue';
import Index from './components/Index.vue'
import router from './router'


const app = Vue.createApp({
    components:{
        Index
    },
    router
});



app.use(router);
app.mount('#app');

