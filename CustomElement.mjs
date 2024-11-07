export function getElementClass(name, html, app, watchlist, subHandler, initHandler, stylePaths=[]) {

  return class CustomCSElement extends HTMLElement {

    static observedAttributes = [...watchlist ?? []]

    constructor() {
      super();
      this.channels = {};
      this.container = document.createElement('section');
      this.container.innerHTML = html;
      this.bus = document.createElement('div');
      this.bus.addEventListener('attrchanged', subHandler);
      this.bus.addEventListener('attrfeedback', e => this.broadcast(e));
      initHandler(this.bus);

      for (const path of stylePaths) {
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', path);
        this.container.append(link);
      }

      this.container.append(this.bus);
      this.shadow = this.attachShadow({mode: "open"});
      this.shadow.append(this.container);
    }

    broadcast(e) {
      const { message, channel } = e.detail;
      if (channel in this.channels) {
        this.channels[channel].postMessage(message);
      }
    }

    connectedCallback() {
      app.mount(this.container);
    }

    attributeChangedCallback(attr, prev, next) {
      if (['subs', 'pubs'].includes(attr)) this.managePubSub(attr, next);
      this.bus.dispatchEvent(new CustomEvent('attrchanged', {
        bubbles: true,
        detail: { attribute: attr, value: next }
      }));
    }

    managePubSub(channelType, newChannels) {
      const newChannelsList = newChannels.split(',');
      for (const channel of newChannelsList) {
        if (!(channel in this.channels)) {
          this.channels[channel] = new BroadcastChannel(channel);
        }
      }
    }
  }

}