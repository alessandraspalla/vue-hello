const { createApp } = Vue;

const app = createApp({
  data() {
    return {
        message: 'Hello Vue!!',
        nameClass: 'titolo'
    }
  }
}).mount('#title');