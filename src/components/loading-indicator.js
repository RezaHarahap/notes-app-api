class LoadingIndicator extends HTMLElement {
  connectedCallback(){this.setAttribute('aria-live','polite');this.setAttribute('aria-busy','false');this.hidden=true;this.innerHTML=`<div class="loading-backdrop"><div class="loading-panel" role="status"><span class="spinner" aria-hidden="true"></span><span class="loading-message">Menghubungkan ke server...</span></div></div>`;}
  show(message='Menghubungkan ke server...'){this.querySelector('.loading-message').textContent=message;this.hidden=false;this.setAttribute('aria-busy','true');}
  hide(){this.hidden=true;this.setAttribute('aria-busy','false');}
}
customElements.define('loading-indicator',LoadingIndicator);
