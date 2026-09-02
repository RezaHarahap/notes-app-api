class AppHeader extends HTMLElement {
  static get observedAttributes() { return ['app-name', 'owner']; }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.isConnected) this.render(); }
  render() { const name=this.getAttribute('app-name')||'Notes App'; const owner=this.getAttribute('owner')||'Pengguna'; this.innerHTML=`<header class="app-bar"><nav class="app-nav" aria-label="Navigasi utama"><a class="brand" href="#main-content" aria-label="${name}, ke konten utama"><span class="brand-mark" aria-hidden="true">✦</span><span>${name}</span></a><span class="owner">Ruang milik ${owner}</span></nav></header>`; }
}
customElements.define('app-header', AppHeader);
