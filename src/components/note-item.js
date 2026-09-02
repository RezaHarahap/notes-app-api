const escapeHtml=(value)=>String(value).replace(/[&<>'"]/g,(character)=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'})[character]);
const formatDate=(date)=>new Intl.DateTimeFormat('id-ID',{day:'numeric',month:'long',year:'numeric'}).format(new Date(date));
class NoteItem extends HTMLElement {
  set note(value){this._note=value;this.render();}
  connectedCallback(){this.render();}
  render(){if(!this._note)return;const note=this._note;const archived=Boolean(note.archived);this.innerHTML=`<article class="note-card"><span class="note-accent" aria-hidden="true">✦</span><time datetime="${note.createdAt}">${formatDate(note.createdAt)}</time><h3>${escapeHtml(note.title)}</h3><p>${escapeHtml(note.body)}</p><div class="note-actions"><button class="archive-button" type="button" aria-label="${archived?'Pulihkan':'Arsipkan'} ${escapeHtml(note.title)}">${archived?'↩ Pulihkan':'⌑ Arsipkan'}</button><button class="delete-button" type="button" aria-label="Hapus ${escapeHtml(note.title)}">× Hapus</button></div></article>`;this.querySelector('.archive-button').addEventListener('click',()=>this.dispatchEvent(new CustomEvent('note-archive',{detail:{id:note.id,archived},bubbles:true})));this.querySelector('.delete-button').addEventListener('click',()=>this.dispatchEvent(new CustomEvent('note-delete',{detail:{id:note.id,title:note.title},bubbles:true})));}
}
customElements.define('note-item',NoteItem);
