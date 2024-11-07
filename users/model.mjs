import { createApp } from 'https://unpkg.com/petite-vue?module';

const data  = {
  label: 'Users',
  bus: null,
  username: '',
  dispatchAttrChange(attr) {
    document.currentScript.getRootNode().dispatchEvent(new CustomEvent('attrfeedback', {
      detail: {
        channel: 'user',
        message: attr + ' changed'
      }
    }));
  },
  handleAttrChange(e) {
    const { detail } = e;
    this[detail.attribute] = detail.value;
  },
  componentInit(bus) {
    this.bus = bus;
  }
}

export const app = createApp(data);

export const watchlist = ['pubs', 'subs', 'username'];

export const handleAttrChange = data.handleAttrChange;

export const componentInit = data.componentInit;
