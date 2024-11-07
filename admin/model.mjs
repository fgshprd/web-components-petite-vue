import { createApp } from 'https://unpkg.com/petite-vue?module';

const data  = {
  label: 'Admin',
  input: '',
  bus: null,
  componentInit(bus) {
    this.bus = bus;
  },
  dispatchAttrChange(attr, value) {
    this.bus.dispatchEvent(new CustomEvent('attrfeedback', {
      detail: {
        channel: 'admin',
        message: value
      }
    }));
  },
  handleAttrChange(e) {
    const { detail } = e;
    this[detail.attribute] = detail.value;
  },
  updateUsername(e) {
    this.dispatchAttrChange('admin', this.input);
  }
}

export const app = createApp(data);

export const watchlist = ['pubs', 'subs', 'username'];

export const handleAttrChange = data.handleAttrChange;
export const componentInit = data.componentInit;
