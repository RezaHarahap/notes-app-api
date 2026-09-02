const BASE_URL = 'https://notes-api.dicoding.dev/v2';
class NotesApi {
  static async #request(path, options = {}) {
    const response = await fetch(`${BASE_URL}${path}`, { ...options, headers: { 'Content-Type': 'application/json', ...options.headers } });
    let result; try { result = await response.json(); } catch { throw new Error('Respons server tidak dapat dibaca.'); }
    if (!response.ok || result.status === 'fail') throw new Error(result.message || 'Permintaan ke server gagal.');
    return result;
  }
  static async getActiveNotes() { const result = await this.#request('/notes'); return result.data; }
  static async getArchivedNotes() { const result = await this.#request('/notes/archived'); return result.data; }
  static async createNote({ title, body }) { const result = await this.#request('/notes', { method: 'POST', body: JSON.stringify({ title, body }) }); return result.data; }
  static async deleteNote(id) { return this.#request(`/notes/${encodeURIComponent(id)}`, { method: 'DELETE' }); }
  static async archiveNote(id) { return this.#request(`/notes/${encodeURIComponent(id)}/archive`, { method: 'POST' }); }
  static async unarchiveNote(id) { return this.#request(`/notes/${encodeURIComponent(id)}/unarchive`, { method: 'POST' }); }
}
export default NotesApi;
