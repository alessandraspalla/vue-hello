const { createApp } = Vue;

const app = createApp({
  data() {
    return {
        message: 'Hello Vue!!',
        nameClass: 'titolo',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
    }
  }
}).mount('#title');