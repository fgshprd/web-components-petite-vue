import { createApp } from 'https://unpkg.com/petite-vue?module';

createApp({
  label: 'Top',
  input: '',
  username: 'Frank',
  init() {
    console.log('Top component mounted.');
    const bcAdmin = new BroadcastChannel('admin');
    bcAdmin.addEventListener('message', (e) => {
      console.log('message received in Top on admin channel', e);
      this.username = e.data;
    })
  },
  changeUsername() {
    this.username = this.input;
  }
}).mount('#top');
